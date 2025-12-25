import { Component, computed, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataStoreService } from '../services/data-store.service';
import { Dialog } from "../dialog/dialog";
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-preview-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, Dialog],
  templateUrl: './preview-panel.html',
  styleUrls: ['./preview-panel.css']
})

export class PreviewPanelComponent implements OnInit {
  @ViewChildren('snoInput') snoInputs!: QueryList<ElementRef<HTMLInputElement>>;
  showDialog = false;
  dialogMessage = '';
  constructor(
    private store: DataStoreService,
    private router: Router
  ) { }
  ngOnInit() {
    const data = this.store.csvData();
    if (!data || data.length === 0) {
      this.router.navigate(['/search']);
    }
  }

  sheetName = computed(() => {
    const name = this.store.selectedFileName();
    return name ? name.replace('.csv', '') : '';
  });

  previewRows: {
    sno: string;
    partNumber: string;
    description: string;
  }[] = [
      { sno: '', partNumber: '', description: '' }
    ];

  onEnterPartNumber(item: any, index: number) {
    const part = item.sno?.trim();
    if (!part) return;

    if (this.previewRows.length > 10) {
      this.openDialog('Maximum 10 part numbers allowed');
      return;
    }

    if (this.previewRows.some(r => r.partNumber === part)) {
      this.openDialog('This part number is already added');
      return;
    }

    const data = this.store.csvData();
    if (!data || data.length === 0) {
      this.openDialog('CSV data not loaded');
      return;
    }

    const partKey = this.getPartNumberKey(data[0]);
    if (!partKey) {
      this.openDialog('Part number column not found in CSV');
      return;
    }

    const csvRow = data.find(
      r => r[partKey]?.toString().trim() === part
    );

    if (!csvRow) {
      this.openDialog('Invalid part number');
      return;
    }

    item.partNumber = part;
    item.description = this.buildDescription(csvRow);

    if (this.previewRows.length < 10) {
      this.previewRows.push({
        sno: '',
        partNumber: '',
        description: ''
      });
    }

    setTimeout(() => {
      const inputs = this.snoInputs.toArray();
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.nativeElement.focus();
      }
    });

  }

  openDialog(message: string) {
    this.dialogMessage = message;
    this.showDialog = true;
    const active = document.activeElement as HTMLElement | null;
    if (active && active.tagName === 'INPUT') {
      active.blur();
    }
  }


  closeDialog() {
    this.showDialog = false;
  }

  private getPartNumberKey(row: any): string | null {
    for (const key of Object.keys(row)) {
      const normalized = key
        .replace(/\uFEFF/g, '')
        .trim()
        .toLowerCase();

      if (normalized === 'part #') {
        return key;
      }
    }
    return null;
  }

  buildDescription(row: any): string {
    const parts: string[] = [];

    if (row['Sub-Assembly']) parts.push(row['Sub-Assembly']);
    if (row['Description']) parts.push(row['Description']);

    if (row['Length'] && row['Width'] && row['Copies']) {
      parts.push(`${row['Length']}*${row['Width']}*${row['Copies']}`);
    }

    if (row['Thick']) parts.push(row['Thick']);
    if (row['Material Name']) parts.push(row['Material Name']);
    if (row['<Info>']) parts.push(row['<Info>']);
    if (row['Notes']) parts.push(row['Notes']);

    return parts.join(' - ');
  }
}

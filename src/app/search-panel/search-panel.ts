import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CsvService } from '../services/csv.service';
import { DataStoreService } from '../services/data-store.service';
import { Dialog } from '../dialog/dialog';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-panel',
  standalone: true,
  imports: [FormsModule, CommonModule, Dialog],
  templateUrl: './search-panel.html',
  styleUrls: ['./search-panel.css']
})
export class SearchPanelComponent {

  showDialog = false;
  selectedFileName: string | null = null;

  constructor(
    private csv: CsvService,
    private store: DataStoreService,
    private router: Router
  ) { }

  onCsvUpload(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.selectedFileName = file.name;

    this.csv.parse(file).then(data => {
      this.store.setCsvData(data);
      this.store.setFileName(file.name);
      this.router.navigate(['/preview']);
    });

  }

  onAction() {
    this.router.navigate(['/setup']);
    if (!this.selectedFileName) {
      this.showDialog = true;
      return;
    }
  }

  closeDialog() {
    this.showDialog = false;
  }
}

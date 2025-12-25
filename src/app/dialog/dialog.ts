import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
})
export class Dialog {
  @Input() message = '';
  @Input() onClose!: () => void;

  close() {
    this.onClose();
  }
}

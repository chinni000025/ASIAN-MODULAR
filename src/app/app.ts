import { Component, signal } from '@angular/core';
import { LayoutPanel } from "./layout-panel/layout-panel";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [LayoutPanel, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('asian-modular');
}

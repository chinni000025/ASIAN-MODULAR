import { Component } from '@angular/core';
import { SearchPanelComponent } from "../search-panel/search-panel";
import { PreviewPanelComponent } from "../preview-panel/preview-panel";

@Component({
  selector: 'app-layout-panel',
  imports: [SearchPanelComponent, PreviewPanelComponent],
  templateUrl: './layout-panel.html',
  styleUrl: './layout-panel.css',
})
export class LayoutPanel {

}

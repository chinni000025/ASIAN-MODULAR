import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { SearchPanelComponent } from './search-panel/search-panel';
import { PreviewPanelComponent } from './preview-panel/preview-panel';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchPanelComponent },
  { path: 'preview', component: PreviewPanelComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};

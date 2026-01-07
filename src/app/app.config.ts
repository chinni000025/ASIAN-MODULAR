import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { SearchPanelComponent } from './search-panel/search-panel';
import { PreviewPanelComponent } from './preview-panel/preview-panel';
import { DatabaseConfiguration } from './database-configuration/database-configuration';
import { LoginPage } from './login-page/login-page';
import { RegisterComponent } from './register-component/register-component';
import { ForgetPasswordComponent } from './forget-password-component/forget-password-component';
import { SystemStatusServices } from './services/System.statusService';
import { ConfiguredGuard } from './gaurds/Configured.gaurd';
// import { AuthGuard } from './guards/auth.guard';
import { setUpGaurd } from './gaurds/Setup.gaurd';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: LoginPage, canActivate: [ConfiguredGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'search', component: SearchPanelComponent },
  { path: 'preview', component: PreviewPanelComponent },
  { path: 'setup', component: DatabaseConfiguration, canActivate: [setUpGaurd] }
];


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    SystemStatusServices,
    {
      provide: APP_INITIALIZER,
      useFactory: (status: SystemStatusServices) => () => status.loadStatus(),
      deps: [SystemStatusServices],
      multi: true
    }
  ]
};
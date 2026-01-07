import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SystemService } from '../services/System.Service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-database-configuration',
  imports: [CommonModule, FormsModule],
  templateUrl: './database-configuration.html',
  styleUrl: './database-configuration.css',
})
export class DatabaseConfiguration {
  dbConfig = {
    serverName: '',
    port: 1433,
    databaseName: '',
    username: '',
    password: ''
  };
  loading: boolean | undefined;
  errorMessage: any;
  constructor(private systemServie: SystemService, private router: Router) { }
  submit() {
    this.loading = true;
    this.systemServie.configuredDataBase({
      server: this.dbConfig.serverName,
      port: this.dbConfig.port,
      database: this.dbConfig.databaseName,
      userName: this.dbConfig.username,
      password: this.dbConfig.password
    }).subscribe(
      {
        next: (res) => {
          this.loading = false;
          this.router.navigate(['']);
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err?.error?.error || "DataBase is Not Configured";
        }
      }
    );
  }
}

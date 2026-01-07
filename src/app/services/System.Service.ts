import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class SystemService {
    private http = inject(HttpClient);
    private configured = false;
    private baseUrl = "https://localhost:7155/System";
    constructor() { }
    configuredDataBase(payload:
        {
            server: string,
            port: number,
            database: string,
            userName: string,
            password: string,
        }) {
        return this.http.post(`${this.baseUrl}/configure-database`, payload);
    }

    getSystemStatus() {
        return this.http.get<{ isDatabaseConfigured: boolean }>(
            `${this.baseUrl}/status`
        );
    }
}
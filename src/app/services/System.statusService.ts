import { Injectable, inject } from '@angular/core'; // Import inject
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SystemStatusServices {
    private http = inject(HttpClient);
    private configured = false;

    constructor() { }

    async loadStatus(): Promise<void> {
        try {
            const res = await firstValueFrom(
                this.http.get<{ isDatabaseConfigured: boolean }>
                    ('https://localhost:7155/System/status')
            );
            this.configured = res.isDatabaseConfigured;
        } catch (err) {
            console.error('System status check failed', err);
            this.configured = false;
        }
    }

    isDatabaseConfigured(): boolean {
        return this.configured;
    }
}
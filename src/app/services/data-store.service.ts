import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataStoreService {

    csvData = signal<any[]>([]);

    selectedFileName = signal<string | null>(null);

    selectedRow = signal<any | null>(null);

    setCsvData(data: any[]) {
        this.csvData.set(data);
    }

    setFileName(name: string) {
        this.selectedFileName.set(name);
    }

    findByPartNumber(part: string) {
        if (!part) {
            this.selectedRow.set(null);
            return false;
        }

        const row = this.csvData().find(r =>
            r['Part #']?.toString().trim() === part.trim()
        );

        this.selectedRow.set(row ?? null);
        return !!row;
    }
}

import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';

@Injectable({ providedIn: 'root' })
export class CsvService {
    parse(file: File): Promise<any[]> {
        return new Promise(resolve => {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: result => resolve(result.data)
            });
        });
    }
}

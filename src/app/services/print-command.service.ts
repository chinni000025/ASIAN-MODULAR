import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PrintCommandService {

    printRequested = signal(false);

    requestPrint() {
        this.printRequested.set(true);
    }

    reset() {
        this.printRequested.set(false);
    }
}

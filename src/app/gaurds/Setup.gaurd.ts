import { inject, Inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { SystemStatusServices } from "../services/System.statusService";

export const setUpGaurd: CanActivateFn = () => {
    const service = inject(SystemStatusServices);
    const router = inject(Router);
    if (!service.isDatabaseConfigured()) {
        return true;
    }
    router.navigate(['']);
    return false;
}
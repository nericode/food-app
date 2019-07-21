import { CanActivate } from "@angular/router";
import { AuthService } from "./modules/auth/services/auth.service";
import { Injectable } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: RouterExtensions) {}

    canActivate() {
        if (this.auth.currentUser() === null) {
            return true;
        }

        this.router.navigate(["/home/restaurants"]);
        return false;
    }
}

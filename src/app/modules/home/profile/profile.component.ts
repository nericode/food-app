import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../../auth/services/auth.service";

@Component({
    moduleId: module.id,
    providers: [AuthService],
    templateUrl: "./profile.component.html"
})
export class ProfileComponent {
    constructor(private rotuer: RouterExtensions, private auth: AuthService) {}

    public onLogout() {
        this.auth.deleteUser();
        this.rotuer.navigate(["/"], { clearHistory: true });
    }
}

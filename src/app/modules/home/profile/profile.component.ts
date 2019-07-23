import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { AuthService } from "../../auth/services/auth.service";
import * as firebase from "nativescript-plugin-firebase";

@Component({
    moduleId: module.id,
    providers: [AuthService],
    templateUrl: "./profile.component.html"
})
export class ProfileComponent {
    constructor(private rotuer: RouterExtensions, private auth: AuthService) {}

    public onLogout() {
        var userType = this.auth.currentUser().type;
        if (userType == "google" || userType == "facebook") {
            firebase.logout();
        }

        this.auth.deleteUser();
        this.rotuer.navigate(["/"], { clearHistory: true });
    }
}

import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { AuthService } from "../services/auth.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    providers: [AuthService],
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    public email: string = "";
    public password: string = "";

    constructor(
        private page: Page,
        private auth: AuthService,
        private router: RouterExtensions
    ) {
        this.page.actionBarHidden = true;
    }

    public onLogin() {
        this.auth.login(this.email, this.password).subscribe(
            () => {
                this.router.navigate(["/home/restaurants"]);
            },
            error => console.log(error)
        );
    }
}

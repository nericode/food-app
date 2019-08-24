import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { AuthService } from "../services/auth.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    public email: string = "eve.holt@reqres.in";
    public password: string = "cityslicka";

    constructor(
        private page: Page,
        private auth: AuthService,
        private router: RouterExtensions
    ) {
        this.page.actionBarHidden = true;
    }

    public onLogin() {
        this.auth.login(this.email, this.password).subscribe(
            response => {
                this.auth.setUser("food-app", response);
                this.router.navigate(["/home/menu"], {
                    clearHistory: true,
                    animated: false
                });
            },
            error => console.log(error)
        );
    }
}

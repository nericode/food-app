import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { AuthService } from "../services/auth.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "./register.component.html"
})
export class RegisterComponent {
    public email: string = "";
    public password: string = "";

    constructor(
        private page: Page,
        private auth: AuthService,
        private router: RouterExtensions
    ) {
        this.page.actionBarHidden = true;
    }

    public onRegister() {
        this.auth.register(this.email, this.password).subscribe(
            () => {
                this.router.navigate(["/home/restaurants"], {
                    clearHistory: true
                });
            },
            error => console.log(error)
        );
    }
}

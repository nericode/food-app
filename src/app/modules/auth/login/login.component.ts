import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }
}

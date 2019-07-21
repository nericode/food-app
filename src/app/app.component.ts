import { Component, AfterViewInit } from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        firebase.init({
            iOSEmulatorFlush: true
        });
    }
}

import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "BottomBar",
    templateUrl: "./bottom-bar.component.html"
})
export class BottomBarComponent {
    @Input("index") public index: number;
}

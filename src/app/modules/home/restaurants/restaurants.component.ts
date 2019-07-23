import { Component } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { RestaurantService } from "./services/restaurant.service";
import { TextField } from "tns-core-modules/ui/text-field";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    moduleId: module.id,
    providers: [RestaurantService],
    templateUrl: "./restaurants.component.html"
})
export class RestaurantsComponent {
    public data: ObservableArray<any>;

    constructor(
        private page: Page,
        private restaurantService: RestaurantService,
        private navigate: RouterExtensions
    ) {
        this.page.actionBarHidden = true;
        this.getRestaurants();
    }

    public getRestaurants(query: string = "") {
        this.data = new ObservableArray<any>([]);
        this.restaurantService.search(query).subscribe(
            response => {
                this.data.push(response["restaurants"]);
            },
            error => console.log(error)
        );
    }

    public onReturnPress(args) {
        let textField = <TextField>args.object;
        this.getRestaurants(textField.text);
    }

    public onNavigate(item) {
        this.navigate.navigate(["/home/restaurant-detail"], {
            queryParams: {
                restaurant: JSON.stringify(item)
            }
        });
    }
}

import { Component } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { RestaurantService } from "./services/restaurant.service";

@Component({
    moduleId: module.id,
    providers: [RestaurantService],
    templateUrl: "./restaurants.component.html"
})
export class RestaurantsComponent {
    public data: ObservableArray<any>;

    constructor(private restaurantService: RestaurantService) {
        this.data = new ObservableArray<any>([]);
        this.restaurantService.search().subscribe(
            response => {
                this.data.push(response["restaurants"]);
            },
            error => console.log(error)
        );
    }
}

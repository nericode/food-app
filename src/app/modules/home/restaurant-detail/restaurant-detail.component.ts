import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MapboxViewApi } from "nativescript-mapbox";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    templateUrl: "./restaurant-detail.component.html"
})
export class RestaurantDetailComponent {
    public restaurant: any;
    private map: MapboxViewApi;

    constructor(
        private params: ActivatedRoute,
        private page: Page,
        private navigate: RouterExtensions
    ) {
        this.page.actionBarHidden = true;
        this.restaurant = JSON.parse(
            this.params.snapshot.queryParams["restaurant"]
        )["restaurant"];
    }

    public onMapReady(args, restaurant): void {
        this.map = args.map;
        this.map.addMarkers([
            {
                lat: restaurant.location.latitude,
                lng: restaurant.location.longitude,
                title: restaurant.name,
                subtitle: restaurant.timings
            }
        ]);
    }

    public onBack() {
        this.navigate.back();
    }
}

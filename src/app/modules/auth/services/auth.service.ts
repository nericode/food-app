import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as localstorage from "nativescript-localstorage";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    public login(email: string, password: string) {
        return this.http.post(
            "https://reqres.in/api/login",
            JSON.stringify({
                email: email,
                password: password
            }),
            {
                headers: this.commonHeaders()
            }
        );
    }

    public register(email: string, password: string) {
        return this.http.post(
            "https://reqres.in/api/register",
            JSON.stringify({
                email: email,
                password: password
            }),
            {
                headers: this.commonHeaders()
            }
        );
    }

    private commonHeaders() {
        return new HttpHeaders({
            "Content-Type": "application/json"
        });
    }

    public setUser(type: string, data: any) {
        localstorage.setItem(
            "user",
            JSON.stringify({
                type: type,
                data: data
            })
        );
    }

    public currentUser() {
        return JSON.parse(localstorage.getItem("user")) || null;
    }

    public deleteUser() {
        localstorage.removeItem("user");
    }
}

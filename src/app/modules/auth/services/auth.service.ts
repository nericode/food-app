import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

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
}

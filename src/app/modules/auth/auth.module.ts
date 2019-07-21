import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { RegisterComponent } from "./register/register.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AuthGuard } from "~/app/auth-guard.service";
import { AuthService } from "./services/auth.service";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "register",
        component: RegisterComponent
    }
];

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [LoginComponent, RegisterComponent],
    providers: [AuthGuard, AuthService],
    schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AuthModule {}

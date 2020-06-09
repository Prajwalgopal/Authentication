import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalModule } from '@azure/msal-angular';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
// app.module.ts

      

MsalModule.forRoot({
  auth: {
      clientId: '4a0e4103-3ce1-4f1b-af4a-f42986899e4e',
      authority: 'https://login.microsoftonline.com/ed9fdd86-256c-4e86-a5b5-f20071bb0823', // This is your tenant info
redirectUri: 'http://localhost:8080', // This is your redirect URI
postLogoutRedirectUri: "http://localhost:8080/login"

},
cache: {
  cacheLocation: 'localStorage',
  storeAuthStateInCookie: true, // set to true for IE 11
},
// Config object to be passed to Msal on creation
})



@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
    ],
    
   
        
    
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent
        // ...
    ],

    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]

    
})



    


export class AppModule { }

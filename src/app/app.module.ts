import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SignUpComponent} from './component/auth/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';

export const appRoutes: Routes = [
  {path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

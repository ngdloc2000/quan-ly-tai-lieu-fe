import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SignUpComponent} from './component/auth/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';
import {HomepageComponent} from './component/homepage/homepage.component';
import {SignInComponent} from './component/auth/sign-in/sign-in.component';
import {httpInterceptorProvider} from './auth.interceptor';
import { ConstructionManagementComponent } from './component/management/construction/construction-management.component';
import { HeaderComponent } from './component/management/header/header.component';
import { MainComponent } from './component/management/main/main.component';
import { MenuComponent } from './component/management/menu/menu.component';

export const appRoutes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'management', component: MainComponent},
  {path: 'management/construction', component: SignInComponent},
  {path: '', component: HomepageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomepageComponent,
    SignInComponent,
    ConstructionManagementComponent,
    HeaderComponent,
    MainComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}

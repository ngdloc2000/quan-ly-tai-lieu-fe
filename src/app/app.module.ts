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
import {HeaderComponent} from './component/management/header/header.component';
import {MainComponent} from './component/management/main/main.component';
import {MenuComponent} from './component/management/menu/menu.component';
import {
  GeneralInformationComponent
} from './component/management/construction/general-information/general-information.component';
import {
  ConstructionProfileComponent
} from './component/management/construction/construction-profile/construction-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';

export const appRoutes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'management', component: MainComponent},
  {path: '', component: HomepageComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomepageComponent,
    SignInComponent,
    HeaderComponent,
    MainComponent,
    MenuComponent,
    GeneralInformationComponent,
    ConstructionProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}

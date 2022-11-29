import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {PageOneComponent} from './pages/page-one/page-one.component';
import {PageTwoComponent} from './pages/page-two/page-two.component';
import {AsideComponent} from './components/aside/aside.component';
import {MenuService} from "./services/menu.service";
import {FormComponent} from './components/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import * as fromApp from './state/app.reducer';
import {AppEffects} from './state/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PageOneComponent,
    PageTwoComponent,
    AsideComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducer),
    EffectsModule.forFeature([AppEffects])
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

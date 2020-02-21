import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const HomeElement = createCustomElement(HomeComponent, { injector });

    customElements.define('home-element', HomeElement);

    (window as any).angular.bootstrap(document.body, ['myApp']);
  }
}

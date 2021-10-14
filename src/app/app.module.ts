import { BrowserModule } from "@angular/platform-browser";
import { Injector, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgApexchartsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('app-chart', el);
  }

  ngDoBootstrap() {}
}
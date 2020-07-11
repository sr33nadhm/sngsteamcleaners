import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./minor/navbar/navbar.component";
import { FooterComponent } from "./minor/footer/footer.component";
import { LandingComponent } from "./major/landing/landing.component";
import { AboutComponent } from "./major/about/about.component";
import { FaqComponent } from "./major/faq/faq.component";
import { PricingComponent } from "./major/pricing/pricing.component";
import { SliderComponent } from "./minor/slider/slider.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DetailModalComponent } from "./minor/detail-modal/detail-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { CarPricingComponent } from './major/car-pricing/car-pricing.component';
import { HomePricingComponent } from './major/home-pricing/home-pricing.component';
import { GalleryComponent } from './major/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    FaqComponent,
    PricingComponent,
    SliderComponent,
    DetailModalComponent,
    CarPricingComponent,
    HomePricingComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DetailModalComponent],
})
export class AppModule {}

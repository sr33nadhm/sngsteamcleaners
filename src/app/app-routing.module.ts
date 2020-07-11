import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./major/landing/landing.component";
import { AboutComponent } from "./major/about/about.component";
import { FaqComponent } from "./major/faq/faq.component";
import { PricingComponent } from "./major/pricing/pricing.component";
import { GalleryComponent } from "./major/gallery/gallery.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "about", component: AboutComponent },
  { path: "faq", component: FaqComponent },
  { path: "pricing", component: PricingComponent },
  { path: "gallery", component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

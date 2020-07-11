import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DetailModalComponent } from "src/app/minor/detail-modal/detail-modal.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}
  showPrices(item) {
    var product = {
      service: item,
    };
    this.router.navigate(["pricing"], { state: product });
  }
  showCar() {
    const modalRef = this.dialog.open(DetailModalComponent);
    if (window.screen.width >= 1024) {
      modalRef.updatePosition({ top: "7%", left: "20%" });
    }
    modalRef.componentInstance.product = [
      "Exterior Steam Wash",
      "Interior Steaming",
      "Leather Conditioning",
      "Windshield Treatment",
      "Upholstery Protection",
      "Headlight Restoration",
      "Engine Degreasing & Coating",
      "Wax Rubbing And Buffing",
      "Ceramic Coating",
      "Polishing",
      "Interior Vaccuming",
      "Seat Shampooing",
      "Tyre Pressure check & filling",
      "Interior Roof Shampooing",
      "Pet Hair Removal",
      "A/C Filter Cleaning",
    ];
  }
  showHome() {
    const modalRef = this.dialog.open(DetailModalComponent);
    if (window.screen.width >= 1024) {
      modalRef.updatePosition({ top: "10%", right: "20%" });
    }
    modalRef.componentInstance.product = [
      "Kitchen",
      "Bathrooms",
      "Bedrooms & Living Rooms",
      "Sofa & Carpet Dry Cleaner",
      "Move in or out",
      "Shops & Factories",
      "Medical facilities",
      "Restaurants & Airports",
      "Showrooms & Office",
    ];
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.css"],
})
export class PricingComponent implements OnInit {
  constructor() {}
  service = "all";
  car: boolean = false;
  home: boolean = false;
  ngOnInit(): void {
    if (window.history.state.service) {
      this.service = window.history.state.service;
      if (this.service === "car") {
        this.showCarOnly();
      } else if (this.service === "home") {
        this.showHomeOnly();
      } else {
        this.showAll();
      }
    }
  }
  showCarOnly() {
    this.home = false;
    this.car = true;
  }
  showHomeOnly() {
    this.home = true;
    this.car = false;
  }
  showAll() {
    this.home = true;
    this.car = true;
  }
}

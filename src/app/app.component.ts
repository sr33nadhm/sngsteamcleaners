import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "sngsteamcleaners";
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 150) {
      let element = document.getElementById("navbar");
      element.classList.add("sticky");
    } else {
      let element = document.getElementById("navbar");
      element.classList.remove("sticky");
    }
  }
}

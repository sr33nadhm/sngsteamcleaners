import { Component, OnInit, Renderer2 } from "@angular/core";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"],
})
export class FaqComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  moveTo(div) {
    var element = this.renderer.selectRootElement("#" + div);
    element.scrollIntoView();
  }
}

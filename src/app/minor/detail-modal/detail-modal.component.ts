import { Component, OnInit, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-detail-modal",
  templateUrl: "./detail-modal.component.html",
  styleUrls: ["./detail-modal.component.css"],
})
export class DetailModalComponent implements OnInit {
  @Input() public product;
  list = [];
  constructor(private dialogRef: MatDialogRef<DetailModalComponent>) {}
  ngOnInit(): void {}
  close() {
    this.dialogRef.close();
  }
}

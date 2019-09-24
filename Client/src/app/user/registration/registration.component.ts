import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/shared/user.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styles: []
})
export class RegistrationComponent implements OnInit {
  constructor(public service: UserService) {}

  ngOnInit() {}

  onSubmit() {
    this.service.register().subscribe(
      res => {},
      err => {
        console.log(err);
      }
    );
  }
}

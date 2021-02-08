import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  model = { password: "" };
  submitted = false;

  constructor(private readonly sessionService: SessionService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    (this.model.password) ? this.sessionService.checkPassword(this.model.password) : "";
  }

  public goInVisitMode() {
    this.sessionService.goInVisitMode();
  }

}

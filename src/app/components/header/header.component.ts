import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AuthService, public route: Router) {
  }
  ngOnInit(): void {
    this.auth.user$.subscribe({
      next: (res) => {
        // console.log(res?.['role'][0]);
        // if (res?.['role'][0] == 'Physician') {
        //   this.route.navigateByUrl("/physician");
        //   console.log("Physician");
        // }
        // else if (res?.['role'][0] == 'Admin') {
        //   this.route.navigateByUrl("/admin");
        //   console.log("Admin");
        // }
      }
    });
  }
}

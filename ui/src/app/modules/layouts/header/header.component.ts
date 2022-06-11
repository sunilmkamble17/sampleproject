import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  gotoHomePage() {
    this.router.navigate(['/dashboard']);
  }

  signout() {
    this.commonService.logOut();
  }
}

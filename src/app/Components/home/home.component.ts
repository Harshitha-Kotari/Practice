import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentDate: Date | undefined;
  userName: any;
  private timer: any;

  constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userName = JSON.parse(localStorage.getItem('user') ?? '')['LoggedInUser'];//to get the username stored at local storage
  }

  ngOnInit(): void {
    this.updateTime();
    // this.currentDate = new Date();
    // Set the timer to update the time every second (1000 milliseconds)
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);

    //to call functions through routing
    this.activatedRoute.paramMap.subscribe(params => {
      const functionName = params.get('functionName');
      if (functionName === 'snackBarFuncCall') {
        this.openSnackBar();
      }
    });

    this.activatedRoute.queryParamMap.subscribe(params => {
      const functionName = params.get('functionName');
      if (functionName === 'snackBarFuncCall')
        this.openSnackBar();
    });
  }

  updateTime() {
    this.currentDate = new Date();
  }

  openSnackBar() {
    this.accountService.openSnackBar();
  }

  logOutFunction() {
    this.accountService.logout();
  }

  ngOnDestroy() {
    // Clear the timer to avoid memory leaks when the component is destroyed
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

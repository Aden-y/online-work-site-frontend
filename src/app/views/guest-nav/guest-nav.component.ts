import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenService } from 'src/app/services/token.service';
import { AuthControlService } from 'src/app/services/auth-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-nav',
  templateUrl: './guest-nav.component.html',
  styleUrls: ['./guest-nav.component.css']
})
export class GuestNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

   isLogged: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private token: TokenService,
    private auth: AuthControlService,
    private router: Router
    ) {}

    ngOnInit() {
      this.auth.authStatus.subscribe(value => this.isLogged = value);
    }


    logout(event: MouseEvent) {
      event.preventDefault();
      this.token.delete();
      this.auth.changeAuthStatus(false);
      this.router.navigateByUrl('/login');
    }
}

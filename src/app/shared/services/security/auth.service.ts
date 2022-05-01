import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationService } from 'src/@vex/services/navigation.service';
import { User } from '@app/shared/models/common/user.model';
// import { CookieService } from 'ngx-cookie-service';
// import { DirectionsModel } from '@app/models/pacomeryllevar/direction.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public showLoader: boolean = false;
  public userData: any;

  user:User;

  constructor(private _http: HttpClient,
    private navigationService: NavigationService,
    private router: Router,
    // private cookieService: CookieService
  ) {

  }

  setModules(module: any) {
    console.log(module);
    console.log(JSON.parse(sessionStorage.getItem('module')));
  
    if (JSON.parse(sessionStorage.getItem('module'))) {
      sessionStorage.setItem('module', JSON.stringify(module));
    } else {
      sessionStorage.setItem('module', null);
      sessionStorage.setItem('module', JSON.stringify(module));
    }
  }
  AuthLoginToken(userData) {
    if (JSON.parse(sessionStorage.getItem('user'))) {
      sessionStorage.setItem('user', JSON.stringify(userData));
      // this.showLoader = false;
      setTimeout(() => {
        this.getRedirect();
      }, 1200);

    } else {
      sessionStorage.setItem('user', null);
      sessionStorage.setItem('user', JSON.stringify(userData));
      JSON.parse(sessionStorage.getItem('user'));
      // this.showLoader = false;
      setTimeout(() => {
        this.getRedirect();
      }, 1200);

    }
  }
  getRedirect() {

    JSON.parse(sessionStorage.getItem("user")) &&
      JSON.parse(sessionStorage.getItem("user")).access_token &&
      window.location.pathname == "/login"
      ? location.href = "/" //this.router.navigate(["/"])
      : null;
  }

  getToken() {
    return JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).id_token : null;
  }
  getModule() {
    return JSON.parse(sessionStorage.getItem('module')) ? JSON.parse(sessionStorage.getItem('module')) : null;
  }
  getOffice() {

    return JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).idSucursal : null;
  }

  getUser() {
    // JSON.parse(localStorage.getItem('user')) ?
    return JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).user : this.SignOut();
    // return JSON.parse(sessionStorage.getItem('user')) ? this.user=  JSON.parse(sessionStorage.getItem('user')) : this.SignOut();
  }
  // Sign out
  SignOut() {
    // this.showLoader = false;
    this.navigationService.items
    sessionStorage.clear();

    // this.cookieService.deleteAll('user', '/auth/login');
    // this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (user != null && user.emailVerified != false) ? true : false;
  }

  //realizado por Andy
  getvalidarToken() {
    return JSON.parse(sessionStorage.getItem('user'))?.token === undefined ? true : false;
  }
  getoffice() {
    let var1 = JSON.parse(sessionStorage.getItem('user'))?.idSucursal ? JSON.parse(sessionStorage.getItem('user'))?.idSucursal : false;
    let var2 = JSON.parse(sessionStorage.getItem('user'))?.office ? JSON.parse(sessionStorage.getItem('user'))?.office : false;
    let data = []
    var2.findIndex(value => {
      if (value.idOffice == var1) {
        data.push(value)
      }
    })

    return data;
  }

}




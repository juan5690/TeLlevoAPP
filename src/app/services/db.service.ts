import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private router: Router) {  }
/* activar cuando se trabaje con la base de datos */
  canActivate(){
    this.router.navigate(['login']);
    return false;
  }

}

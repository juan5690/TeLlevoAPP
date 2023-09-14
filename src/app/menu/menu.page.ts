import { HomePage } from './../home/home.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})


export class MenuPage implements OnInit {

  nombreUsuario = localStorage.getItem('usuario.nombre');
  constructor() { }

  ngOnInit() {
  }
}

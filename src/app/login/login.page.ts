import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  formularioLogin: FormGroup;


  constructor(public fb: FormBuilder, public alertController: AlertController, public navCTRL: NavController, private dbService: DbService) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })

  }

  ngOnInit() {
  }


  async ingresar(){
    var f = this.formularioLogin.value;
    var usuarioJson = localStorage.getItem('usuario');
  
    if (usuarioJson !== null) {
      var usuario = JSON.parse(usuarioJson);
  
      if (usuario.nombre == f.nombre && usuario.password == f.password){
        console.log(f.nombre, f.password);
        localStorage.setItem('ingresado','true');
        this.navCTRL.navigateRoot(['/menu', { nombre: f.nombre }]);


      } else {
        const alert = await this.alertController.create({
          header: 'Datos Incorrectos',
          message: 'Error al ingresar el nombre o la contraseña!',
          buttons: ['Aceptar'],
        });
    
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Usuario no encontrado',
        message: 'No se ha registrado ningún usuario',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
    }
  }
}

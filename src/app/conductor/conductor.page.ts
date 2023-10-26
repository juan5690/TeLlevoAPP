import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  formularioAuto: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCTRL: NavController) { 

    this.formularioAuto=this.fb.group({
      'marca': new FormControl("",Validators.required),
      'modelo': new FormControl("",Validators.required),
      'patente': new FormControl("",Validators.required),
      'precio_viaje': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  async registrarAuto(){
    var f = this.formularioAuto.value;
    if (this.formularioAuto.invalid){
      const alert = await this.alertController.create({
        header: 'Error al registrar vehiculo',
        message: 'Debes completar todos los campos!',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;
    }

    var auto = {
      marca: f.marca,
      modelo: f.modelo,
      patente: f.patente,
      precio_viaje: f.precio_viaje
    }

    localStorage.setItem('auto', JSON.stringify(auto));

    localStorage.setItem('registrado','true');
    this.navCTRL.navigateRoot(['/menu', { auto: f.patente }]);
  }

}

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

}

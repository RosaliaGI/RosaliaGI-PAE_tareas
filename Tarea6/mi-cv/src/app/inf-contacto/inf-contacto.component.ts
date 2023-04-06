import { Component } from '@angular/core';

@Component({
  selector: 'app-inf-contacto',
  templateUrl: './inf-contacto.component.html',
  styleUrls: ['./inf-contacto.component.scss']
})
export class InfContactoComponent {
  contactData = [
    {
      tel: '523414200671',
      email: 'mrginiguez@gmail.com',
      linkedin: 'https://www.linkedin.com/in/mar%C3%ADa-rosal%C3%ADa-gonz%C3%A1lez-i%C3%B1iguez-9a035147/',
      github: 'https://github.com/RosaliaGI'
    }
  ];
}

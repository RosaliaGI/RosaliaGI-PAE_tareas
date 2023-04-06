import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
  projectsData = [
    {
      name: 'Lotería',
      description: 'Desarrollé una lotería con Java. Pueden jugar hasta 4, las imagenes son las mismas que en la lotería tradicional. Cada jugador debe marcar la que salga en la pantalla. El que marque más gana. Tiene apartado con el score de cada jugador y el ganador.',
      image: '/assets/images/loteria.jpg'
    },
    {
      name: 'Web Para Paquertería Tamazula',
      description: 'Desarrollé una web para una paquertería de Tamazula, Jalisco. La web tiene apartados de servcicios, rutas, horarios y ubicaciones de las sucursales. También tiene apartado de contacto. Se puede hacer login y registrarse, para clientes y administradores. Los administradores pueden agregar, editar y eliminar rutas, cambiar tarifas, revisar cotizaciones. Los clientes pueden crear cotizaciones. Está hecha con Node.js, Express, Mongoose.',
      image: '/assets/images/paqTamazula.jpeg'
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent {
  educationData = [
    {
      title: 'Ingeniería en Sistemas Computacionales',
      institution: 'ITESO',
      startDate: '2021',
      endDate: 'En curso',
      logo: '/assets/images/ITESO.jpg',
      website: 'https://www.iteso.mx/',
      description: 'Al estudiar Ingeniería en Sistemas Computacionales me formo para diseñar, y desarrollar soluciones tecnológicas innovadoras que aprovechen o automaticen la infraestructura tecnológica, esta incluye: servicios en la nube, servidores, redes de computadoras, bases de datos y sistemas de información. Analizar, extraer, transformar, integrar y procesar grandes cantidades de información de forma eficiente permitiendo la toma de decisiones que brinden ventajas competitivas en las organizaciones.'
    },
    {
      title: 'Técnico en Administración de Empresas',
      institution: 'CBTis 226',
      startDate: '2006',
      endDate: '2009',
      logo: '/assets/images/cbtis226.jpeg',
      website: 'https://www.cbtis226.edu.mx/',
      description: 'Al estudiar Técnico en Administración de Empresas me formo para administrar, organizar y dirigir las actividades de una empresa, ya sea pública o privada, con el fin de lograr los objetivos de la misma. Para ello, se debe tener conocimientos de contabilidad, finanzas, mercadotecnia, recursos humanos, entre otros.'
    },
  ];
}

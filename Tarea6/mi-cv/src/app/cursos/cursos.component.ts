import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  coursesData = [
    {
      title: 'Neo4j Fundamentals',
      provider: 'GraphAcademy',
      date: 'Octubre 31, 2022',
      image: '/assets/images/cert_neo4j.jpg',
      url: 'https://graphacademy.neo4j.com/u/046dd51f-c109-488e-a4a1-b65d5fa73ba5/neo4j-fundamentals/',
    },
    {
      title: 'Kickoff Agile Badge',
      provider: 'PMI',
      date: 'Noviembre, 2022',
      image: '/assets/images/agile.jpg',
      url: 'https://www.pmi.org/kickoff',
    }
  ];
}

import { Component } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

interface User {
  firstname:string;
  lastname:string;
  age:number;
}

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  paragraph = new LoremIpsum().generateParagraphs(1);
  paragraphVisible = true;

  userData: User[] = [
    { firstname:"Nikos",      lastname:"Avramidis",     age:20 },
    { firstname:"Makis",      lastname:"Kapetaros",     age:19 },
    { firstname:"Thanassis",  lastname:"Andoutsos",     age:33 },
    { firstname:"Markos",     lastname:"Klapsomounis",  age:44 }
  ]

  toggleParagraph() {
    this.paragraphVisible = !this.paragraphVisible;
  }
}

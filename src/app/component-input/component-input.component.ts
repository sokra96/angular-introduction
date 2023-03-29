import { Component } from '@angular/core';
import { orderBy } from 'lodash-es';

export interface User {
  firstname:string;
  lastname:string;
  age:number;
}

@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['./component-input.component.css']
})
export class ComponentInputComponent {
  userData: User[] = [
    { firstname:"Nikos",      lastname:"Avramidis",     age:20 },
    { firstname:"Makis",      lastname:"Kapetaros",     age:19 },
    { firstname:"Thanassis",  lastname:"Andoutsos",     age:33 },
    { firstname:"Markos",     lastname:"Klapsomounis",  age:44 },
    { firstname:"Pikachu",    lastname:"Malakas",       age:10 }
  ]

  sortByAgeDesc() {
    this.userData = orderBy(this.userData, ['age'], ['desc'])
  }

  sortByAgeAsc() {
    this.userData = orderBy(this.userData, ['age'], ['asc'])
  }

  sortByAgeDescLastDesc() {
    this.userData = orderBy(this.userData, ['age', 'lastname'], ['desc', 'desc'])
  }

  resetData() {
    this.userData = [
      { firstname:"Nikos",      lastname:"Avramidis",     age:20 },
      { firstname:"Makis",      lastname:"Kapetaros",     age:19 },
      { firstname:"Thanassis",  lastname:"Andoutsos",     age:33 },
      { firstname:"Markos",     lastname:"Klapsomounis",  age:44 },
      { firstname:"Pikachu",    lastname:"Malakas",       age:10 }
    ]
  }
}

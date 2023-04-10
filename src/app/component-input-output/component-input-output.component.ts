import { Component } from '@angular/core';

export interface User {
  firstname:string;
  lastname:string;
  age:number;
}

@Component({
  selector: 'app-component-input-output',
  templateUrl: './component-input-output.component.html',
  styleUrls: ['./component-input-output.component.css']
})



export class ComponentInputOutputComponent {
  userData: User[] = [
    { firstname:"Nikos",      lastname:"Avramidis",     age:20 },
    { firstname:"Makis",      lastname:"Kapetaros",     age:19 },
    { firstname:"Thanassis",  lastname:"Andoutsos",     age:33 },
    { firstname:"Markos",     lastname:"Klapsomounis",  age:44 },
    { firstname:"Pikachu",    lastname:"Malakas",       age:10 }
  ]
  receivedUser: User | undefined;

  onDeleteUser(index: number) {
    console.log(index);
    this.userData.splice(index, 1)
  }

onReceivedUser(user: User){
  this.receivedUser = user;
}

}

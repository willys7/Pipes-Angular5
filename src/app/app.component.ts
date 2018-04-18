import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "William"

  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    name:"Logan",
    key:"Wolverine",
    age: 500,
    addres: {
      street:"first",
      house:"19"
    }
  }

  promiseValue = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Llego la data'), 3500)
  } )

  date = new Date();

}

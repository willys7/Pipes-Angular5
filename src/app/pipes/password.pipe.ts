import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active:boolean = true): any {
    if(active){
      let salida:string = "";
      for(let i=0; i<value.length; i++){
        salida +="*";
      }
      return salida;
    }else{
      return value;
    }
  }

}

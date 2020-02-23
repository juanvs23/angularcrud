import { Component, OnInit, Output,Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
uuid=()=>{
  let day=new Date()
  return `s-${Math.floor(Math.random()*1000000)}-${day.getFullYear()}`}
nombreNew:string=""
salarioNew:number=0
cargoNew:string=""
rangoNew:string=""
@Input('empladoList')empleados
//@Output()empleados=new 
  constructor() { }

  ngOnInit(): void {
  }
agregaEmpledado=()=>{

   
  let empleadoNew={
    id:this.uuid(),
    Nombre:this.nombreNew,
    Salario:this.salarioNew,
    Cargo:this.cargoNew,
    Rango:this.rangoNew
  }

  this.empleados.push(empleadoNew)
  //console.log(this.empleados)
}
}

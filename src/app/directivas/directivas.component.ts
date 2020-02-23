import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

carga:boolean=true

nombreE:boolean=false
salariosE:boolean=false
cargoE:boolean=false
rangoE:boolean=false
disabledBTN:boolean=true
uuid=()=>{
  let day=new Date()
  return `s-${Math.floor(Math.random()*1000000)}-${day.getFullYear()}`}
empleados:Array<any>=[
  {
  id:this.uuid(),  
  Nombre:'Luis',
  Salario:150000,
  Cargo:'Programador',
  Rango:'Junior'
},
{
  id:this.uuid(),
  Nombre:'Jose',
  Salario:300000,
  Cargo:'Programador',
  Rango:'Senior'
}
]
  constructor() { 
    this.cargando()
  }

  ngOnInit(): void {
  }
cargando=()=>setTimeout(()=>{this.carga=false,this.disabledBTN=false},7000)
cambiaValor=()=>{
  if(this.carga){
    this.carga=false
  }else{
    this.carga=true
  }
}
getId=(e)=>{

  this.empleados.forEach((empleado,i)=>{
   let posicion;
   if (empleado.id===e) {
     Swal.fire({
  title: '¿Desea Remover el suiguiente empleado?',
  html: `<b>Nombre: </b>${empleado.Nombre}<br/><b>Cargo: </b>${empleado.Cargo}<br/><b>Nombre: </b>${empleado.Rango}`,
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, remover'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Removido',
      'Sus registros han sido eliminados',
      'success'
    )
     this.empleados.splice(i,1)
  }
})
   }
   
 })
  //alert(e)

}
setId=(e)=>{
  alert(e)
}
}

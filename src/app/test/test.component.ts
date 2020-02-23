import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
datos:any={
  nombre:'Juan Carlos',
  edad:30,
  profesion:'Programador',
  imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
  input:'mediante propiete binding'
}
correo:string=''
clave:string=''
punto:number=0
chance:string=""
contador:number=0
inputText:string=""
focus:string=""
  constructor() { }

  ngOnInit(): void {
  }
  puntuar=()=>{
    this.punto=this.punto+1
  }
  cuentaLetrass(){
    this.contador= this.chance.length
  }

click=()=>console.log(this.correo,this.clave)
input=(event)=>this.inputText=event.target.value
onFocus=(event)=>this.focus=event.target.value
keyDown=(e)=>{
  console.log('haz presionado el boton ',e.keyCode)
}
keyUp=()=>{
  console.log('Listo enter')
}
}

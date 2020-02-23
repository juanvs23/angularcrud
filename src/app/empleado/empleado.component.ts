import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }
@Input()empleado
@Output()deleteid=new EventEmitter<string>()
@Output()editId=new EventEmitter<string>()

  ngOnInit(): void {
  }
borrar(uuid){
	
	this.deleteid.emit(uuid)
}
editar(uuid){
	
	this.editId.emit(uuid)
}
}

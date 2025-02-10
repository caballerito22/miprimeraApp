import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iría un empleado</p>",
  styleUrl: './empleado.component.css'
  //styles: ["p { background-color: red; }"]

})
export class EmpleadoComponent implements OnInit{
  constructor(){}

  nombre="Alejandro";

  apellido="Caballero";

  edad=19;

  //empresa="Proyecto Lorena"

  /*getEdad(){return this.edad}*/

  /*llamaEmpresa(value:String){}*/

  habilitacionCuadro=true;

  usuRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setusuarioRegistrado(event:Event){
    //alert("El usuario se acaba de registrar")
    //this.textoDeRegistro="El usuario se acaba de registrar";
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }

  ngOnInit(): void {
    
  }
}

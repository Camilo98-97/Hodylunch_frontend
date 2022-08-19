import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

const listUsuarios: Usuario[] = [
  {usuario: "camilo", nombre: 'Camilo', apellido: 'Cadavid', ciudad: 'Bogotá', direccion: 'Calle 65', celular: 3123900078, correo: 'dacane@gmail.com' },

];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'ciudad', 'direccion', 'celular' , 'correo', 'acciones'];
  dataSource = listUsuarios;

  constructor() { }

  ngOnInit(): void {
  }

}

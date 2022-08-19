import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

const listUsuarios: Usuario[] = [
  {usuario: "camilo", nombre: 'Camilo', apellido: 'Cadavid', ciudad: 'Bogotá',direccion: 'Calle 65' },

];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'ciudad', 'direccion', 'acciones'];
  dataSource = listUsuarios;

  constructor() { }

  ngOnInit(): void {
  }

}

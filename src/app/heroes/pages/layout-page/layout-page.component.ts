import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list-heroes' },
    { label: 'Agregar', icon: 'add', url: './new-heroe' },
    { label: 'Buscar', icon: 'search', url: './search' }
  ]

}

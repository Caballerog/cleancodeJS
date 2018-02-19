import { Component } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css',],
  template: `
    <div>
      <h3>
        Alumnos del politécnico
      </h3>
      <ngx-datatable
        class="material"
        [columnMode]="'flex'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [rows]="rows">
        <ngx-datatable-column name="Seleccionar" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
           <mat-checkbox></mat-checkbox>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Nombre" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Apellidos" [flexGrow]="1">
          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Cambios" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Creacion" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Acceso" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Correo" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value}}
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>

    </div>
  `
})
export class DatatableComponent {

  rows = [
    { nombre: 'Austin', apellidos: 'Power', cambios: '5', creacion: '25/09/2017', acceso: '19/01/2018', correo: 'austin@gmail.com' },
    { nombre: 'Austin', apellidos: 'Power', cambios: '2', creacion: '25/09/2017', acceso: '19/01/2018', correo: 'austin@gmail.com' },
    { nombre: 'Austin', apellidos: 'Power', cambios: '1', creacion: '25/09/2017', acceso: '19/01/2018', correo: 'austin@gmail.com' },
    { nombre: 'Austin', apellidos: 'Power', cambios: '2', creacion: '25/09/2017', acceso: '19/01/2018', correo: 'austin@gmail.com' },
    { nombre: 'Austin', apellidos: 'Power', cambios: '1', creacion: '25/09/2017', acceso: '19/01/2018', correo: 'austin@gmail.com' },
    { nombre: 'Austin', apellidos: 'Power', cambios: '1', creacion: '25/09/2017', acceso: '19/01/2018', correo: 'austin@gmail.com' },
    { nombre: 'Austin', apellidos: 'Power', cambios: '2', creacion: '25/09/2017', acceso: '19/01/2018', correo: 'austin@gmail.com' },
    { nombre: 'Austin', apellidos: 'Power', cambios: '1', creacion: '25/09/2017', acceso: '19/01/2018', correo: 'austin@gmail.com' },
    { nombre: 'Austin', apellidos: 'Power', cambios: '1', creacion: '25/09/2017', acceso: '19/01/2018', correo: 'austin@gmail.com' },
    { nombre: 'Austin', apellidos: 'Power', cambios: '2', creacion: '25/09/2017', acceso: '19/01/2018', correo: 'austin@gmail.com' },
    { nombre: 'Austin', apellidos: 'Power', cambios: '1', creacion: '25/09/2017', acceso: '19/01/2018', correo: 'austin@gmail.com' },
  ];
}

import { NotificationsComponent } from './navigation/notifications/notifications.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import {

  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatInput,
  MatInputModule
} from '@angular/material';
import { TopbarComponent } from './topbar/topbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CommonDirectivesModule } from '../../directives/common/common-directives.module';
import { ThemeService } from '../../services/theme/theme.service';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from 'app/components/common/footer/footer.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableComponent } from './datatable/datatable.component';
import { AdminDatatableComponent } from 'app/components/common/layouts/administratorDatatable/admin-datatable.component';
import { SigninComponent } from 'app/views/sessions/signin/signin.component';
import { SignupComponent } from 'app/views/sessions/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    CommonDirectivesModule,
    TranslateModule,
    NgxDatatableModule
  ],
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    TopbarComponent,
    NavigationComponent,
    NotificationsComponent,
    BreadcrumbComponent,
    FooterComponent,
    DatatableComponent,
    AdminDatatableComponent,
    SigninComponent,
    SignupComponent
  ],
  providers: [ThemeService],
  entryComponents: [SigninComponent],
  exports: []
})
export class AppCommonModule { }

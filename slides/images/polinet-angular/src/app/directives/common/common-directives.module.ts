import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqualValidatorDirective } from './equal-validator.directive';
import { SideNavAccordionDirective } from './sidenav-accordion.directive';
import { AppAccordionDirective } from './app-accordion.directive';
import { FontSizeDirective } from './font-size.directive';
/* import { ScrollToDirective } from './scroll-to.directive'; */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EqualValidatorDirective,
    SideNavAccordionDirective,
    AppAccordionDirective,
    FontSizeDirective,
    /* ScrollToDirective */
  ],
  exports: [
    EqualValidatorDirective,
    SideNavAccordionDirective,
    AppAccordionDirective,
    FontSizeDirective,
    /* ScrollToDirective */
  ]
})
export class CommonDirectivesModule { }

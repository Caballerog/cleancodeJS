import { NgModule } from '@angular/core';
import { RelativeTimePipe } from './relative-time.pipe';
import { ExcerptPipe } from "./excerpt.pipe";
@NgModule({
  declarations: [
    RelativeTimePipe,
    ExcerptPipe
  ],
  exports: [
    RelativeTimePipe,
    ExcerptPipe
  ]
})
export class CommonPipesModule { }
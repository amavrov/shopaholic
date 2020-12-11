import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [HeaderComponent, NotFoundComponent, FooterComponent]
})
export class CoreModule { }

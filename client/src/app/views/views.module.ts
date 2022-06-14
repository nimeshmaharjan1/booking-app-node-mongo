import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeViewComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HomeViewComponent],
})
export class ViewsModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { ConversionComponent } from './components/screens/conversion/conversion.component';
import { NotFoundComponent } from './components/screens/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ConversionComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ComponentsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

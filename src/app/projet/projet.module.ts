import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { FiliereComponent } from './filiere/filiere.component';
import { ModuleComponent } from './module/module.component';
import { AddFiliereComponent } from './add-filiere/add-filiere.component';
import { UpdateFiliereComponent } from './update-filiere/update-filiere.component';






@NgModule({
  declarations: [
    MainComponent,
    FiliereComponent,
    ModuleComponent,
    AddFiliereComponent,
    UpdateFiliereComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'filiere', component: FiliereComponent},
      {path:'module/:arg', component: ModuleComponent},
      {path: 'addfiliere', component: AddFiliereComponent},
      {path: 'updatefiliere', component: UpdateFiliereComponent}

    ])
  ],
  exports: [MainComponent]
})
export class ProjetModule { }

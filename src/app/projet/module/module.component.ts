import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Filiere } from '../interfaces/filiere.interface';
import { Module } from '../interfaces/module.interface';
import { Personne } from '../interfaces/personne.interface';

@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

      //PROPRIETE
      filieres: Filiere[] = [];
      modules: Module[]= [];
      personnes: Personne = {    
        nom: "",
        prenom: '',
        type: ''};

  constructor(private mainService: MainService) { 
    const source$ = this.mainService.getModule();    
    source$.subscribe(module => this.modules=module);

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Filiere } from '../interfaces/filiere.interface';
import { Module } from '../interfaces/module.interface';
import { Personne } from '../interfaces/personne.interface';
import { MainService } from '../main.service';

@Component({
  selector: 'filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {

    //PROPRIETE
    filieres: Filiere[] = [];
    modules: Module[]= [];    
    stagiaires: Personne[] = [];

    selectedFiliere: Filiere | null = null;

    //METHODE
      handleChange(event: any){
        const filiereName = event.target.value;
        const filteredfiliere = this.filieres.filter(filiere => filiere.libelle === filiereName)

        this.selectedFiliere = (filteredfiliere. length > 0) ? filteredfiliere[0] : null;
        console.log(this.selectedFiliere)
      }

  constructor(private mainService: MainService) {
    const source$ = this.mainService.getFiliere();
    source$.pipe(map((res) => res[0].modules)).subscribe(modules=> {this.modules= modules});
    source$.pipe(map((res) => res[0].stagiaires)).subscribe(stagiaires=> {this.stagiaires= stagiaires});
    source$.subscribe(filiere => this.filieres=filiere);
    

   }


  ngOnInit(): void {
  }

}

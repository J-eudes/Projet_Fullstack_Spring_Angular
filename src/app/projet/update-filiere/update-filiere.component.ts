import { Component, OnInit } from '@angular/core';
import { Filiere } from '../interfaces/filiere.interface';
import { MainService } from '../main.service';

@Component({
  selector: 'app-update-filiere',
  templateUrl: './update-filiere.component.html',
  styleUrls: ['./update-filiere.component.css']
})
export class UpdateFiliereComponent implements OnInit {

  //PROPRIETE
  filieres: Filiere[] = [];
  selectedFiliere: Filiere | null = null;
  updateFiliere: Filiere | null = null;

  //METHODE
  handleChange(event: any) {
    const filiereName = event.target.value;
    const filteredfiliere = this.filieres.filter(filiere => filiere.libelle === filiereName)

    this.selectedFiliere = (filteredfiliere.length > 0) ? filteredfiliere[0] : null;
    console.log(this.selectedFiliere)
  }

  handleSubmit(){
    
  }

  constructor(private mainService: MainService) {


  }

  ngOnInit(): void {  
    const source$ = this.mainService.getFiliere();
    source$.subscribe(filiere => this.filieres = filiere);
    

    //const source2$ = this.mainService.putFiliere();
  }

}

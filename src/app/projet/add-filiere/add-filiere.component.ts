import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms'
import { Filiere } from '../interfaces/filiere.interface';
import { MainService } from '../main.service';

@Component({
  selector: 'app-add-filiere',
  templateUrl: './add-filiere.component.html',
  styleUrls: ['./add-filiere.component.css']
})
export class AddFiliereComponent implements OnInit {

  //PROPRIETES

  filiere: Filiere = {
    libelle: "",
    modules: [],
    stagiaires: []
  }
createdFiliere: Filiere | null = null


  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }
  handleSubmit(){
    this.mainService.postFiliere(this.filiere).subscribe((res: Filiere) => {console.log(res)})
    this.createdFiliere = this.filiere;
  }



}

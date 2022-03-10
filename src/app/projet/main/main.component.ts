import { Component, OnInit } from '@angular/core';
import { Filiere } from '../interfaces/filiere.interface';
import { Module } from '../interfaces/module.interface';
import { MainService } from '../main.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //PROPRIETE
  filieres: Filiere[] = [];
  modules: Module[] = [];

  constructor(private mainService: MainService ) {
    const source$ = this.mainService.getFiliere().subscribe(filiere => {this.filieres= filiere});
   }

  ngOnInit(): void {
  }

}

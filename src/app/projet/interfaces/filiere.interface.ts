import { Module } from "./module.interface";
import { Personne } from "./personne.interface";


export interface Filiere{
    id?: number;
    libelle: string;
    modules: Module[];
    stagiaire: Personne[];

    
}
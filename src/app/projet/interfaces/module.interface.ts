import { Personne } from "./personne.interface";

export interface Module {
    id?: number;
    libelle: string;
    dateDebut: string;
    dateFin: string;
    formateur: Personne;
}
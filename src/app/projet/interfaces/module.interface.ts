import { Personne } from "./personne.interface";

export interface Module {
    id?: number;
    dateDebut: string;
    dateFin: string;
    formateur: Personne;
}
import { Time } from "@angular/common";

export class Concour {

    date_debut : String;
    date_fin : String;
    titre: string;
    participants:[];
    constructor(
        date_fin:String,
        date_debut:String,
       titre: string, 
       participants:[]
    ) {
        this.titre = titre;
        this.date_debut=date_debut;
        this.participants=participants;
        this.date_fin= date_fin;
        
        
       
       
    }
}
import { Time } from "@angular/common";

export class Meeting {

    id: number;
    date : Date;
    temp:Time;
    sujet:String;
    titre: string;
    equipe:[];
    constructor(id: number,
        date: Date,
        temp:Time,
        sujet:String,
       titre: string, 
       equipe:[]
    ) {
        this.id = id;
        this.titre = titre;
        this.sujet=sujet;
        this.equipe=equipe;
        this.date= date;
        this.temp=temp;
        
       
       
    }
}
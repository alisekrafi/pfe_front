import { Time } from "@angular/common";

export class Meeting {

    date : Date;
    time:String;
    sujet:String;
    titre: string;
    equipe:[];
    constructor(id: number,
        date: Date,
        time:String,
        sujet:String,
       titre: string, 
       equipe:[]
    ) {
        this.titre = titre;
        this.sujet=sujet;
        this.equipe=equipe;
        this.date= date;
        this.time=time;
        
       
       
    }
}
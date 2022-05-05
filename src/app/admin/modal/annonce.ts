export class Annonce {

    // id: number;
    titre: string;
    sujet:String;
    date : Date;
   
    constructor(id: number,
        date: Date,
        sujet:String,
       titre: string, 
       
    ) {
        // this.id = id;
        this.titre = titre;
        this.sujet=sujet;
         this.date= date;
        
        
       
       
    }
}
export class Conge {

    
    date_debut: Date;
    date_fin: Date;
    date_dem: Date;
    nom:String;
    prenom:String;
    id_emp: String;
    raison: string; 
    status :boolean;
     
    constructor(
        date_debut: Date,
        date_fin: Date,
        date_dem: Date,
        id_emp: String,
        raison: string,
        nom:String,
        status :boolean,
        prenom:String
    ) { 
        
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.date_dem = date_dem;
        this.id_emp = id_emp;
        this.raison = raison;
        this.nom=nom;
        this.status=status;
        this.prenom=prenom
    }
}
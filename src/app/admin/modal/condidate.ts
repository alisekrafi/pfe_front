export class Condidate {
 
  nom: String;
  prenom: String;
  date_nais: Date;
  email: String;
  tel: String;
 
  genre: string;
  type: string;

  universite:String;
  niveau:String;
  experience:String;
  constructor(
    
    nom: String,
    prenom: String,
    date_nais: Date,
    email: String,
    tel: String,
    
    genre: string,
    universite:String,
    type: string,
   
    niveau:String,
    experience:String,
  ) {
 
    this.nom = nom;
    this.prenom = prenom;
    this.date_nais = date_nais;
    this.email = email;
    this.tel = tel;
    this.universite=universite;
   
    this.genre = genre;
    this.type = type;
  
    this.niveau=niveau;
    this.experience=experience;
  }
}

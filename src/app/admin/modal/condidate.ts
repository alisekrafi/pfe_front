export class Condidate {
  // id: number;
  cin: number ;
  nom: String;
  prenom: String;
  date_nais: Date;
  email: String;
  tel: String;
  adresse: string;
  genre: string;
  type: string;
  role: String; 
  universite:String;
  niveau:String;
  experience:String;
  constructor(
    // id: number,
    cin: number,
    nom: String,
    prenom: String,
    date_nais: Date,
    email: String,
    tel: String,
    adresse: string,
    genre: string,
    universite:String,
    type: string,
    role: String,
    niveau:String,
    experience:String,
  ) {
    // this.id = id;
    this.cin = cin;
    this.nom = nom;
    this.prenom = prenom;
    this.date_nais = date_nais;
    this.email = email;
    this.tel = tel;
    this.universite=universite;
    this.adresse = adresse;
    this.genre = genre;
    this.type = type;
    this.role = role;
    this.niveau=niveau;
    this.experience=experience;
  }
}

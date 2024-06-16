interface IStudent {
  id: number
  nom: string
  prenom: string
  birthday: string
  email: string
  adresse: string
  profession_fk: string
  telephone: number
  user_fk: number
}

interface IStudentRequest {
  nom: string
  prenom: string
  birthday: string
  email: string
  adresse: string
  profession_fk: string
  telephone: number
  user_fk: number
}

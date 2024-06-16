interface IFormationEtudiant {
  id: number
  formation_fk: number
  student_fk: number
}

interface IFormationEtudiantRequest {
  formation_fk: number
  student_fk: number
}

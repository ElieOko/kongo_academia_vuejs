interface IEvaluationFormationStudent {
  id: number
  cote: number
  avis: string
  formation_student_fk: number
}

interface IEvaluationFormationStudentRequest {
  cote: number
  avis: string
  formation_student_fk: number
}

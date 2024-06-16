interface IFormation {
  id: number
  name: string
  title: string
  description: string
  image: string
  teacher_fk: number
  level_formation_fk: number
}

interface IFormationRequest {
  name: string
  title: string
  description: string
  image: string
  teacher_fk: number
  level_formation_fk: number
}

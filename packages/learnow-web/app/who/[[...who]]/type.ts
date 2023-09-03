export enum CardType {
  STUDENT = 'STUDENT',
  EMPLOYEE = 'EMPLOYEE'
}

export const cards = [
  {
    alt: 'employee',
    src: '/employee.png',
    type: CardType.EMPLOYEE
  },
  {
    alt: 'student',
    src: '/student.png',
    type: CardType.STUDENT
  }
]

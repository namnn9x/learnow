export enum HomeActionType {
  GET_STARTED = 'GET_STARTED',
  SIGN_IN = 'SIGN_IN',
}

export interface IHomeAction {
  title: string,
  type: HomeActionType
}

export const listActions = [
  {
    title: 'Get Started',
    type: HomeActionType.GET_STARTED
  },
  {
    title: 'Sign In',
    type: HomeActionType.SIGN_IN
  }
]

export const listIntro = [
  {
    title: '13 English grammar topics'
  },
  {
    title: 'Learn English in an easy and fun way'
  },
  {
    title: 'Build a solid foundation for learning English'
  },
  {
    title: 'Custom Learning Paths'
  }
]

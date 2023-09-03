import { User } from "@prisma/client"
import { userModel } from "../models/model"

export const getUserByEmail = async (email: string) => {
  try {
    return userModel.findFirst({
      where: {
        email
      }
    })
  } catch (error) {
    console.log('error getUserByEmail' + error)
  }
}

export const getUserById =async (id: string) => {
  try {
    return userModel.findUnique({
      where: {
        id,
      }
    })
  } catch (error) {
    console.log('error getUserById' + error)
  }
}

export const createUser = async (user: User) => {
  try {
    return userModel.create({
      data: user
    })
  } catch (error) {
    console.log('error createUser' + error)
  }
}

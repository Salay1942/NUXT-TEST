import { compare } from 'bcrypt'
import { RequestHandler } from 'express'
import { omit } from 'lodash'
import { User } from '@prisma/client'
import prisma from '../prisma'

declare module 'express-session' {
  export interface SessionData {
    auth?: Omit<User, 'password'>
  }
}

export default <RequestHandler>(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  })
  if (!user) {
    return res.status(400).send({
      message: 'ที่อยู่อีเมลหรือรหัสผ่านไม่ถูกต้อง'
    })
  }
  const result = await compare(req.body.password, user.password)
  if (!result) {
    return res.status(400).send({
      message: 'ที่อยู่อีเมลหรือรหัสผ่านไม่ถูกต้อง'
    })
  }
  req.session.auth = omit(user, 'password')
  res.send({
    message: 'คุณได้เข้าสู่ระบบเสร็จสิ้น'
  })
})
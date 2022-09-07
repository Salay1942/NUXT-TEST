import { compare } from 'bcrypt'
import { RequestHandler } from 'express'
import { omit } from 'lodash'
import { Admin } from '../generated/prisma-client-js'
import prisma from '../prisma'

declare module 'express-session' {
  export interface SessionData {
    admin?: Omit<Admin, 'password'>
  }
}

export default <RequestHandler>(async (req, res) => {
  const admin = await prisma.admin.findUnique({
    where: {
      username: req.body.username
    }
  })
  if (!admin) {
    return res.status(400).send({
      message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
    })
  }
  const result = await compare(req.body.password, admin.password)
  if (!result) {
    return res.status(400).send({
      message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
    })
  }
  req.session.admin = omit(admin, 'password')
  res.send({
    message: `ยินดีต้อนรับ แอดมิน ${admin.username}`
  })
})
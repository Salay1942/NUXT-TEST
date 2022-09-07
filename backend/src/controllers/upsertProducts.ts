import { RequestHandler } from 'express'
import prisma from '../prisma'

export default <RequestHandler>(async (req, res) => {
  const payload = {
    title: req.body.title,
    description: req.body.description,
    images: req.body.images,
    price: req.body.price
  }
  await prisma.product.upsert({
    where: {
      id: req.query.id ? +req.query.id : -1
    },
    create: payload,
    update: payload
  })
  res.status(201).send({
    message: 'คุณได้เพิ่มรายการสินค้าเสร็จสิ้น'
  })
})
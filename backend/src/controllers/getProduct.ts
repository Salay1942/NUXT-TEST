import { RequestHandler } from 'express'
import prisma from '../prisma'

export default <RequestHandler>(async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: +req.params.id
    }
  })
  res.send({
    product
  })
})
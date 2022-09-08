import { RequestHandler } from 'express'
import { find } from 'lodash'
import prisma from '../prisma'

interface RequestBody {
  carts: {
    id: number
    title: string
    price: number
    amount: number
  }[]
}

export default <RequestHandler<unknown, unknown, RequestBody>>(async (req, res) => {
  if (!req.session.auth) {
    return res.sendStatus(403)
  }
  // req.body.carts.reduce((prev, cur) => {
  //   return prev + (cur.amount * cur.price)
  // }, 0)
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: req.body.carts.map(it => it.id)
      }
    },
    select: {
      id: true,
      price: true
    }
  })
  if (products.length === 0) {
    return res.sendStatus(400)
  }
  const totalPrice = products.reduce((prev, cur) => {
    const amount = find(req.body.carts, { id: cur.id })?.amount
    if (!amount) {
      return prev
    }
    return prev + (amount * cur.price)
  }, 0)
  const checkout = await prisma.checkout.create({
    data: {
      userId: req.session.auth.id,
      price: totalPrice
    },
    select: {
      id: true
    }
  })
  await Promise.all(
    products.map(async (product) => {
      const productOnCheckout = await prisma.productOnCheckout.create({
        data: {
          checkoutId: checkout.id,
          productId: product.id
        }
      })
    })
  )
  res.status(201).send({
    message: 'คุณได้สร้างออเดอร์เสร็จสิ้น'
  })
})
import { RequestHandler } from 'express'

export default <RequestHandler>((req, res, next) => {
  if (!req.session.auth) {
    return res.sendStatus(403)
  }
  next()
})
import { NextFunction, RequestHandler, Request, Response } from 'express'
import {AppRouter} from '../../AppRouter'
import {Methods, Keys} from './enums'

function bodyValidators(keys: string): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('invalid request')
      return;
    }
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`<h1>missing property ${key}!</h1>`)
        return;
      } 
    } 
    next()
    return;
  }
}

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata(Keys.path, target.prototype, key)
      const method: Methods = Reflect.getMetadata(Keys.method, target.prototype, key)
      const middlewares = Reflect.getMetadata(Keys.middleware, target.prototype, key) || []
      const requireBodyProps = Reflect.getMetadata(Keys.validator, target.prototype, key) || []

      const validate = bodyValidators(requireBodyProps)

      if(path) {
        router[method](`${routePrefix}${path}`, ...middlewares, validate,  routeHandler)
      }
    }
  }
}
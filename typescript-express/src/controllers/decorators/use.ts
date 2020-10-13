import { Keys } from './enums'
import {RequestHandler} from 'express'

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(Keys.middleware, target, key) || []
    Reflect.defineMetadata(Keys.middleware, [...middlewares, middleware], target, key)
  }
}
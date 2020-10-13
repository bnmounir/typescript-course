import { Keys } from './enums'
import {RequestHandler} from 'express'

export function bodyValidator(...keys: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(Keys.validator, keys, target, key)
  }
}
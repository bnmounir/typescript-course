import { RequestHandler } from 'express'
import {Methods, Keys} from './enums'

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}


function routerBinder(method: string) {
  return function get(path: string) {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(Keys.path, path, target, key)
      Reflect.defineMetadata(Keys.method, method, target, key)
    }
  }
}

export const get = routerBinder(Methods.get)
export const post = routerBinder(Methods.post)
export const del = routerBinder(Methods.del)
export const put = routerBinder(Methods.put)
export const patch = routerBinder(Methods.patch)
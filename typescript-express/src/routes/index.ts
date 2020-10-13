import {  Request, Response, NextFunction } from "express";
import {AppRouter} from '../AppRouter'
import { controller, get, use } from "../controllers/decorators";
import './LoginRoutes'

const router = AppRouter.getInstance

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) : void {
	if (req.session && req.session.loggedIn) {
		next()
		return
	} else {
		res.redirect('/login')
	}
}

@controller('')
export class Main {

	@get('/')
	@use(requireAuth)
	getHome(req: Request, res: Response): void {
		res.send(
			`
			<div>
			<h1>Welcome</h1>
			<a href="/logout">Logout</a>
			</div>
			`
		)
	}
}



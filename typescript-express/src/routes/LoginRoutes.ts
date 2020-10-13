import {NextFunction, Request, Response} from 'express'
import {get, controller, bodyValidator, post} from '../controllers/decorators'


@controller('')
export class LoginRoutes {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <h1>Please Login</h1>
  <form method="POST">
    <div class="">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" />
    </div>
    <div class="">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" />
    </div>
    <button type="submit" >Submit</button>
  </form>
    `);
  }
  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email === 'hi@hi' && password === 'pass') {
      req.session = {loggedIn: true}
      res.redirect('/')
    } else {
      res.send('Invalid credentials!')
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    if (req.session) {
      req.session.loggedIn = false;
      res.redirect('/login')
    }
  }
}
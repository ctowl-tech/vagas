import { Router } from 'express'
 
export default (route: Router):void => {
  route.get('/status', (req, res) => { return res.status(200).json({ message: 'ok' }) })
}

import server from './config/app'
import createConnection from '../infra/db/mysql/typeorm/conn/typeorm-conn'

createConnection('medina').then(() => {
  server.listen('3333', () => {
    console.log('Server is running on port 3333 ')
  })
})

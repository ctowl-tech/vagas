const DATABASE = {
  dev: {
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'medina',
    port: 3306
  },
  test: {
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'medina_test',
    port: 3306
    
  }
}
export default DATABASE[process.env.NODE_ENV || 'dev']

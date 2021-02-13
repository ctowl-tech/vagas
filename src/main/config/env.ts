export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://root:root@localhost:27017/tcc-backend?authSource=admin',
  port: process.env.PORT || 3333
}

export default {
  server: {
    host: process.env.SERVER_HOST || '0.0.0.0',
    port: Number(process.env.PORT) || 3000
  }
}
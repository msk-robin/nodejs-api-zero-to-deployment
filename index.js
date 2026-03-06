import { app } from './server.js'
import mongoose from 'mongoose'

// use railway provide port and fallback 3000 for local dev
const port = process.env.PORT || 3000

try {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB')

  app.listen(port, () => {
    // for logs, show actual railway url if available, otherwise show localhost
    const publicURL =
      process.env.RAILWAY_STATIC_URL || `http://localhost:${port}`
    console.log(`APp running at ${publicURL}`)
  })
} catch (error) {
  console.error('Failed to start server', error)
}

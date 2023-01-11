import express from 'express'
import educatorRoutes from './routes/educator_routes.js'

const app = express()

const PORT = 4001

app.use(express.json())
app.use('/educators', educatorRoutes)

app.listen(PORT, () => console.log(`Listening on http://127.0.0.1:${PORT}`))


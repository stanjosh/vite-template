import { db, router } from './db'
import express, { Request, Response } from "express"
import { Context } from "vm"
require('dotenv').config()



declare global {
    namespace Express {
        interface Request {
            context: Context
        }
        interface Response {
            context: Context
        }
    }
}




const app = express()
const port = process.env.PORT || 5000


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'))
} else {
    app.get('/', (req: Request, res: Response) => {
        return res.send('server running')
    })
}



const startServer = async () => {
    app.use('/api', router)
    try {
        db.on('open', () => {
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`)
            })
        });
    } catch (error) {
        console.log(error)
    }
}

startServer()
import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));


// Routes
app.use('/api/v1/auth',authRoutes);




// rest api
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Ecommerce App tejas</h1>");
});

// port
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white)
});
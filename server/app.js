import express from "express";
import morgan from "morgan";
import ViteExpress from 'vite-express';
import handlerFunctions from './controller.js';

const app = express();

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(express.json())


const {natList,addNat,editNat,deleteNat} = handlerFunctions

app.get('/natList',natList)

app.put('/editNativity/:id',editNat)

ViteExpress.listen(app,4242,() => console.log('what is the answer? http://localhost:4242'))
import { PORT } from "./config.js";
import express, { request, response } from "express";   
import mongoose from "mongoose";
import { User } from "./schemaa/schema.js";
import bodyParser from "body-parser";
import { Donor } from "./schemaa/Donorschema.js";

const app = express();
app.use(bodyParser.json()); 


app.get("/", (req, res) => {
    console.log(request);
    return res.status(200).send("Hello World");
});
 //create user
app.post('/new/ngo', async(req, res) => {
    try{
        if(!req.body.Ngoname){
            return res.status(400).send({message:'name is required'});
        }
        const newUser = await User.create({
            Ngoname: req.body.Ngoname,
            contactno: req.body.contactno,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            password: req.body.password,
            Authid: req.body.Authid
        });
        res.status(200).json({
            success: true,
            newUser
        });
    }
    catch(error){
        console.log('error', error);
        return res.status(500).send('error');
    }
});
app.post('/new/donor', async(req, res) => {
    try{
        if(!req.body.shopname){
            return res.status(400).send({message:'name is required'});
        }
        const newDonor = await Donor.create({
            shopname: req.body.shopname,
            contactno: req.body.contactno,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city
        });
        res.status(200).json({
            success: true,
            newDonor
        });
    }
    catch(error){
        console.log('error', error);
        return res.status(500).send('error');
    }
});

//login for ngo

app.post('/login/ngo', async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send({ message: 'user not found' });
        }
        if (user.password !== req.body.password) {
            return res.status(400).send({ message: 'invalid password' });
        }
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        console.log('error', error);
        return res.status(500).send('error');
    }
});






//mogoose config 
mongoose 
.connect('mongodb+srv://naiknischal91:lawdatelassan@crudd.pldjyhd.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(PORT, () => {
        console.log(` server chal raa idhar ${PORT}`);
    });
    console.log('connected to database');
})
.catch((error) => {
    console.log('error connecting to database', error);
});
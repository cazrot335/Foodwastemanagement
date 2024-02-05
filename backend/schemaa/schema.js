import mongoose from 'mongoose';
const Schema = mongoose.Schema(
    {
        Ngoname:{
            type: String,
            required: true
        },
        contactno:{
            type: Number,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        Authid:{
            type: String,
            required: true
        },
     }
    
);

export const User = mongoose.model('User',Schema);
const mongoose = require('mongoose');
const stream = require("stream");
const { Schema }=mongoose;

const Schedule = require('/models/Schedule');

const ProfesionalSchema = new Schema({
    dni:{type:String, required:true},
    nombre : { type: String,required:true},
    apellido: { type: String, required:true},
    telefono:String,
    mail: String,
    direccion: String,
    fecha_nac: Date,
    schedule:'Schedule'
});

module.exports=mongoose.model('Profesional', ProfesionalSchema)
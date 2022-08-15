const { Schema, model } = require('mongoose');
const accesosSchema = new Schema({
    nombre: {type: String, required: true },
    usuario: {type: String, required: true },
    clave: {type: String, required: true },
    servidor: {type: String, required: true },
    observaciones: {type: String, required: true },
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('accesosModel', accesosSchema);
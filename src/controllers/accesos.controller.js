const accesosCtrl = {};
const Acceso = require('../models/accesos.model');

accesosCtrl.createAcceso = async (req, res) => {
    const newAcceso = new Acceso(req.body);
    await newAcceso.save();

    res.send('Acceso creado');
}

accesosCtrl.readAcceso = async (req, res) => {
    try {
        const acceso = await Acceso.findById(req.params.id);
        res.send(acceso);
    } catch (error) {
        res.send('No se ha encontrado informaciòn relacionada al id enviado')
    }
}

accesosCtrl.readAccesos = async (req, res) => {
    const listadoAccesos = await Acceso.find();
    res.json(listadoAccesos); 
}

accesosCtrl.updateAcceso = async (req, res) => {
    const acceso = await Acceso.findByIdAndUpdate(req.params.id, req.body);
    res.send('acceso actualizado');
}

accesosCtrl.deleteAcceso = async (req, res) =>{
    try {
        await Acceso.findByIdAndDelete(req.params.id);
        res.send('acceso eliminado')
    } catch (error) {
        res.send('error al eliminar el registro');
    }
}

module.exports = accesosCtrl;
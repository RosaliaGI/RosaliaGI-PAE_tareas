const Tarea = require('./../modelos/tarea');

function crearTarea(req, res) {
    const nuevaTarea = new Tarea({
        idTarea: req.body.idTarea,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        status: 'new',
        fecha_creacion: Date.now()
    });

    nuevaTarea.save()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(400).json({ message: 'Error al crear tarea ' + error });
        });
};


function actTarea(req, res) {
    const idTarea = req.params.id;
    console.log(idTarea);
    const actualizacion = {};

    if (req.body.titulo) {
        actualizacion.titulo = req.body.titulo;
    }
    if (req.body.descripcion) {
        actualizacion.descripcion = req.body.descripcion;
    }
    if (req.body.status) {
        actualizacion.status = req.body.status;
    }

    Tarea.updateOne({ idTarea: idTarea }, actualizacion)
        .then(response => {
            console.log('response: ')
            console.log(response);
            if (response.modifiedCount > 0) {
                res.status(200).json({ message: "Tarea actualizada" });
            } else {
                res.status(404).json({ message: "No se encontró la tarea" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'La tarea no se pudo actualizar' });
        });

};



function listTarea(req, res) {
    Tarea.find().then(response => {
        console.log(response);
        res.status(200).json({ message: "Lista de tareas: ", tareas: response });
    }).catch(error => {
        console.log(error);
        res.status(400).json({ message: 'Error al listar las tareas :( , ' + error });
    })
};


function detTarea(req, res) {
    const idTarea = req.params.id;
    console.log(idTarea);
    Tarea.findOne({ idTarea: req.params.id }).then(response => {
        console.log(response);
        res.status(200).json({ message: "Tarea", tarea: response });
    }).catch(error => {
        console.log(error);
        res.status(404).json({ message: 'Error, no encontré la tarea :( ' + error });
    })
};



function borrarTarea(req, res) {
    const idTarea = req.params.id;
    console.log(idTarea);

    Tarea.findOneAndUpdate(
        { idTarea: idTarea },
        { status: 'borrada' },
        { new: true }
    )
        .then((tarea) => {
            if (tarea) {
                res.status(200).json({ message: "Tarea eliminada exitosamente" });
            } else {
                res.status(404).json({ message: "Tarea no encontrada" });
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'La tarea no se pudo eliminar' });
        });
};


module.exports = {
    crearTarea,
    actTarea,
    listTarea,
    detTarea,
    borrarTarea
};
const express = require('express');
const router = express.Router();
const controller = require('./../controladores/tareas');

/**
 * @swagger
 * /tareas:
 *  post:
 *    description: crear una nueva tarea
 *    parameters: 
 *      - in: body
 *        name: tarea
 *        description: La información de la nueva tarea
 *        schema:
 *          type: object
 *          required:
 *            - idTarea
 *            - titulo
 *            - descripcion
 *          properties:
 *            idTarea:
 *              type: number
 *            titulo:
 *              type: string
 *            descripcion:
 *              type: string
 *    responses:
 *      200:
 *        description: nueva tarea creada
 */
router.post('', express.json(), controller.crearTarea);


/**
 * @swagger
 * /tareas/{id}:
 *  put:
 *    description: Actualizar una tarea existente
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: ID de la tarea que se quiere actualizar
 *        required: true
 *        schema:
 *          type: string
 *      - in: body
 *        name: tarea
 *        description: La información de la tarea que se quiere actualizar
 *        schema:
 *          type: object
 *          properties:
 *            titulo:
 *              type: string
 *            descripcion:
 *              type: string
 *            status:
 *              type: string
 *    responses:
 *      200:
 *        description: tarea actualizada exitosamente
 *      404:
 *        description: tarea no encontrada
 */
router.put('/:id', express.json(), controller.actTarea);

/**
 * @swagger
 * /tareas:
 *  get:
 *    description: Obtener todas las tareas
 *    responses:
 *      200:
 *        description: lista de tareas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    description: ID de la tarea
 *                  titulo:
 *                    type: string
 *                    description: título de la tarea
 *                  descripcion:
 *                    type: string
 *                    description: descripción de la tarea
 *      404:
 *        description: tarea no encontrada
 */
router.get('', express.json(), controller.listTarea);

/**
 * @swagger
 * /tareas/{id}:
 *  get:
 *    description: Mostrar una tarea existente
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: ID de la tarea que se quiere mostrar
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: tarea encontrada y mostrada
 *      404:
 *        description: tarea no encontrada
 */
router.get('/:id', express.json(), controller.detTarea);

/**
 * @swagger
 * /tareas/{id}:
 *  delete:
 *    description: Eliminar una tarea existente (estatus a borrada)
 *    parameters: 
 *      - in: path
 *        name: id
 *        description: ID de la tarea que se quiere borrar
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: tarea eliminada exitosamente
 *      404:
 *        description: tarea no encontrada
 *      500:
 *        description: error al eliminar la tarea
 */
router.delete('/:id', express.json(), controller.borrarTarea);

module.exports = router;
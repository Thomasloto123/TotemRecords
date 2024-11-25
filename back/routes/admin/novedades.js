var express = require('express');
var router = express.Router();
var NovedadesModel = require('../../models/NovedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


/* GET home page. */
router.get('/', async function (req, res, next) {

    var novedades = await NovedadesModel.getNovedades();

    novedades = novedades.map(novedad =>{
        if (novedad.img_id){
            const imagen = cloudinary.image(novedad.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return{
                ...novedad,
                imagen
            }
        } else{
            return{
                ...novedad,
                imagen: ''
            }
        }
    });

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
            var img_id = '';
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
            }
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await NovedadesModel.insertNovedades({
                ...req.body,
                img_id
            });
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'todos los campos son requeridos'

            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se creo la novedad'


        })

    }
})

router.get('/eliminar/:id', async (req, res, next) =>{
    var id = req.params.id;
    
    let novedad = await NovedadesModel.getNovedadesId(id);
    if (novedad.img_id) {
        await (destroy(novedad.img_id));
    } 

    await NovedadesModel.borrarNovedades(id);
    res.redirect('/admin/novedades');
})

router.get('/modificar/:id', async (req, res, next) =>{
    var id = req.params.id;
    var novedad = await NovedadesModel.getNovedadesId(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    })
});

router.post('/modificar', async (req, res, next) =>{
    try{
        
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") {
            img_id = null; 
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original){
            await (destroy(req.body.img_original));
        }
        var obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id
        }
        console.log(obj)

        await NovedadesModel.modificarNovedadId(obj, req.body.id);
        res.redirect('admin/modificar');
    } catch (error){
        console.log(error)
        res.render('admin/modificar',{
            layout: 'admin/layout',  
            error: true,
            message: 'No se modifico la novedad'
        })
    }
    
})



module.exports = router;
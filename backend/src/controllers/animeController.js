
import AnimeModel from '../models/anime.js';

const listAnime = (req, res)=>{

    let animesA = [];

    AnimeModel.findAll().then(anime=>{

        anime.forEach(animeOnly =>{
            animesA.push({
                id: animeOnly.id,
                titulo: animeOnly.titulo,
                descripcion: animeOnly.descripcion,
                imagen: animeOnly.imagen
            });
        });

        return res.json(animesA);

    }).catch(error =>{
        return res.status(500).json(error);
    });

}

const listOnlyAnime = (req, res)=>{

    const {id} = req.params;

    if(!id) return res.status(404).json({ msg: 'Parámetros mal enviados' });

    AnimeModel.findOne({
        where: { id: id }
    }).then(anime=>{

        if(!anime) return res.status(404).json({ msg: 'Anime no encontrado' });

        return res.json({ anime: {
            id: anime.id,
            titulo: anime.titulo,
            descripcion: anime.descripcion,
            imagen: anime.imagen
        }})

    }).catch(error =>{
        return res.status(500).json(error);
    });
}

const addAnime = (req, res)=>{

    const { titulo, descripcion, imagen } = req.body;

    if(!titulo || !descripcion || !imagen) return res.status(404).json({ msg: 'Falta información' });

    AnimeModel.create({
        titulo,
        descripcion,
        imagen

    }).then(anime=>{

        return res.status(200).json({ msgCo: 'Anime registrado con éxito' });

    }).catch(error =>{
        return res.status(500).json(error);
    });

}

const updateAnime = (req, res)=>{

    const {id} = req.params;
    const { titulo, descripcion, imagen } = req.body;

    if(!id) return res.status(404).json({ msg: 'Parámetros mal enviados' });

    AnimeModel.update({ titulo, descripcion, imagen },{
        where: { id: id }
    }).then(anime=>{

        if(!anime) return res.status(404).json({ msg: 'Anime no encontrado' });

        return res.json({ masgCo: 'Anime actualizado correctamente' });

    }).catch(error =>{
        return res.status(500).json(error);
    });
}

const deleteAnime = (req, res)=>{

    const {id} = req.params;

    if(!id) return res.status(404).json({ msg: 'Parámetros mal enviados' });

    AnimeModel.destroy({
        where: { id: id }
    }).then(anime=>{

        if(!anime) return res.status(404).json({ msg: 'Anime no encontrado' });

        return res.json({ masgCo: 'Anime eliminado correctamente' });

    }).catch(error =>{
        return res.status(500).json(error);
    });

}

export default{
    listAnime,
    listOnlyAnime,
    addAnime,
    updateAnime,
    deleteAnime
}

const db = require('../config/db')

// Para inserir dados do novo exoplaneta, 
// completar informações da constante newExoplanet e executar o código.

const newExoplanet = {
    name: 'planet-name', 
    mass: 0 ,
    hasStation: 'true/false',
}

db('infos').insert(newExoplanet)
    .then(res => console.log(res))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy)
const db = require('../config/db')

// Para alterar dados de algum exoplaneta existente, 
// fazer requisição do exoplaneta por nome completando a constante desiredUpdateExoplanet.
// Em seguida, passar parâmetros que desejam ser alterados na constante updateExoplanet.
// Salvar página e executar o código.

const desiredUpdateExoplanet = 'planet-name'

const updateExoplanet = {
    name: 'new-planet name',
    mass: 0,
    hasStation: 'true/false',
}

async function updateInfos() {
    let { id } = await db('infos')
        .select('id').first()
        .where({ name: name_updateExoplanet })

    await db('infos').where({ id })
        .update(updateExoplanet)
    
    return await db('infos').where( {id} )
}

updateInfos()
    .then(infos => console.log(infos))
    .finally(() => db.destroy())
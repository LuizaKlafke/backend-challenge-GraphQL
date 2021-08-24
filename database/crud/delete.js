const db = require('../config/db')

// Para deletar dados de algum exoplaneta existente, 
// fazer requisição do exoplaneta por nome completando a constante desiredDeleteExoplanet.
// Salvar página e executar o código.

const desiredDeleteExoplanet = 'planet-name'

async function recharge() {
    let { id } = await db('infos')
        .select('id').first()
        .where({ name: desiredDeleteExoplanet })

    await db('infos').where({ id })
        .delete()
    
    return await db('infos').where( {id} )
}

recharge()
    .then(infos => console.log(infos))
    .finally(() => db.destroy())

exports.up = function(knex) {
  return knex.schema.createTable('infos', table => {
    table.increments('id').primary()
    table.string('name').notNull()
    table.int('mass').notNull()
    table.string('hasStation').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('infos')
};

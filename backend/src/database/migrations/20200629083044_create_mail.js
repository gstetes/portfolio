exports.up = function (knex) {
  return knex.schema.createTable('mail', (table) => {
    table.increments('id');
    table.string('sender').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('message');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('mail');
};

import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user_balance', (t) => {
    t.increments('id');
    t
      .string('user_id')
      .notNullable()
      .references('id')
      .inTable('user')
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    t.string('balance').notNullable();
    t.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
    t.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now());;
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('user_balance');
}

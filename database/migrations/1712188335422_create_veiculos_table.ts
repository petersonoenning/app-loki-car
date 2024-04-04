import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'veiculos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('marca').notNullable()
      table.string('modelo').notNullable()
      table.integer('ano_Fabricacao').notNullable()
      table.integer('ano_modelo').notNullable()
      table.integer('renavam').notNullable()
      table.string('placa', 8).notNullable()
      table.string('cor').notNullable()
    

      table.enum('situacao', ['liberado', 'manutencao']).defaultTo('liberado').notNullable()

      table.boolean('ativo').defaultTo(true)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
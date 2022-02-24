
 module.exports = {
  type: 'postgres',
  host: "127.0.0.1",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
  migrationsTableName: "migration",
  migrations: ["src/migration/*.{ts,js}"],
  cli: {
  entitiesDir: "src/**/entities",
    migrationsDir: "src/migration"
  },
}
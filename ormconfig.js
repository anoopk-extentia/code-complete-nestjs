
 module.exports = {
  type: 'postgres',
  host: "127.0.0.1",
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
  migrationsTableName: "migration",
  migrations: ["src/migration/*.{ts,js}"],
  cli: {
  entitiesDir: "src/**/entities",
    migrationsDir: "src/migration"
  },
}
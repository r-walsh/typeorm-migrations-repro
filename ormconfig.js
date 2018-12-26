module.exports = {
  cli: {
    migrationsDir: "src/migrations"
  },
  entities: [`${__dirname}/src/entity/*.ts`],
  logging: true,
  migrations: ["src/migrations/*.ts"],
  migrationsRun: false,
  name: "default",
  type: "postgres",
  url: process.env.DATABASE_URL
};

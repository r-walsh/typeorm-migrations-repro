### TypeORM Migrations Issue

#### My Issue

TypeORM attempts to load my TS migrations on application startup. This causes an error because they are left in `.ts` format and run via the CLI with `ts-node`.

I would expect that migrations would not be loaded due to the configuration setting of `migrationsRun: false`.

#### Reproduction steps:

- Set `process.env.DATABASE_URL` to a valid postgres URL
- Synchronize the database for initial setup
- Run `yarn migrate` or `npm run migrate`
- Comment out or delete `age` in `src/index.ts` and `src/entity/User.ts`
- `yarn build` or `npm run build`
- `node dist/index.js`
- An error should now occur where TypeORM attempts to load `src/migrations/1545847395051-RemoveAgeFromUser.ts` even though `migrationsRun` is set to `false` in `ormconfig.js`

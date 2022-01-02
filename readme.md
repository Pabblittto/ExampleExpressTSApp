## Creating new database entities steps

1. Create entity file in [src/entity](src/entity) dictionary

Create an entity based on documentation https://typeorm.io/#/entities

2. Create a migration by running script below

```
npm run typeorm migration:generate -- --name NameOfYourMigration
```

3. Apply migration to local database by running code below

```
npm run typeorm migration:run
```

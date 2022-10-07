# SETUP(DEV)
> Daily setup for developer devlopment

## Categories

--- 

### Server

#### 🐘 [PostgreSQL@14](../../project/server/databases/POSTGRESQL.md)
**Localhost Port:**
```shell
# env DATABASE URL for: schema.prisma
postgresql://postgres:password@localhost:####/databasename?schema=public
```

#### Local Deployment

- [PostgreSQL Shell Docs](https://www.postgresql.org/docs/current/app-psql.html)

**Shell Commands:**
```bash
# Install
brew install postgresql@14

# Start
brew services start postgresql@14

# Stop
brew services stop postgresql@14

# Restart
brew services restart postgresql@14

# Start PostgreSQl Console
psql

# Uninstall
brew uninstall postgres@14
```
---

### Database Setup/Update/Migration

🚶 &nbsp;*Database Migration*
```bash
# package command | ...
yarn ...
```
#### Database Seeding
🌱 &nbsp;*Seed Database*
```bash
# package command | ...
yarn ...
```
🌱 &nbsp;*Seed Database* <u>**(Reset Database Data)**</u> | **🚨&nbsp;!!! This will delete <u>_ALL_</u> database data !!!&nbsp;🚨**
```bash
# package command | ...
yarn ...
```

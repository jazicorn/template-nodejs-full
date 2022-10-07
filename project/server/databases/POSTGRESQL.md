# PostgreSQL
> local and production setup for PostgreSQL project database

---

## Resources
- [postgresql: Website](https://www.postgresql.org/)
- [postgresql: Documentation: 14.5](https://www.postgresql.org/docs/current/)
- [postgresql: Github: awesome-postgres](https://github.com/dhamaniasad/awesome-postgres)
- [node-postgres: Github](https://github.com/brianc/node-postgres)
- [node-postgres: Website](https://node-postgres.com/)


### General Articles
- https://stackabuse.com/using-postgresql-with-nodejs-and-node-postgres/

---

### PostgreSQL Commands
- **-h: --host=HOSTNAME:** *The database server host or socket directory; the default is local socket*
- **-p: --port=PORT:** *The database server port; the default is 5432*
- **-U: --username=USERNAME:** *The database username; the default is your_username*
- **-w: --no-password:** *Never prompt for password*
- **-W: --password:** *Force password prompt, which should happen automatically*
- **\q:** *Exit psql connection*
- **\c:** *Connect to a new database*
- **\dt:** *List all tables*
- **\du:** *List all roles*
- **\list:** *List databases*

---

## Local
> local database setup

### PostgreSQL

#### Install

[MacOS Install](https://www.postgresql.org/download/macosx/)

**Homebrew Installation:**
```bash
brew install postgresql
```

**Localhost Port:**
```bash
# env DATABASE URL 
postgresql://postgres:password@localhost:####/databasename?schema=public
```

#### Deployment

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

**TODO: add main postgres shell commands**
### PgAdmin4

#### Installation

- [Docs](https://www.pgadmin.org/docs/pgadmin4/development/index.html)
- [MacOS](https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.13/macos/)

#### Articles

- [Install PG Admin4 **After** Installing PostgreSQL](https://dev.to/letsbsocial1/installing-pgadmin-only-after-installing-postgresql-with-homebrew-part-2-4k44)
- https://marioyepes.com/install-postgresql-on-mac-with-brew/

---

## Production
> production database setup

#### Configuration

#### Remote Deployment


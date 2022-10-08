/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pool, QueryResult } from 'pg';

// TODO: add logging to querying | https://node-postgres.com/guides/project-structure

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

module.exports = {
    query: (
        text: string,
        params: any,
        callback: (err: Error, result: QueryResult<any>) => void
    ) => {
        return pool.query(text, params, callback);
    },
};

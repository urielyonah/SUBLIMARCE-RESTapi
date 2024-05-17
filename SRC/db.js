import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'uriel',        
    password: '123456789',
    database: 'sublimarce01',
    charset: 'utf8',
})


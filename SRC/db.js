import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'bf9oexmvjv7umifwuwdu-mysql.services.clever-cloud.com',
    user: 'utykxbwezjt44m3a',
    password: 'OCs10YTeZ47cnQ1Rwddp',
    database: 'bf9oexmvjv7umifwuwdu',
    charset: 'utf8',
})


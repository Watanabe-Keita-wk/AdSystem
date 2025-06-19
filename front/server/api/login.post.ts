import mysql from 'mysql2/promise';
export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const body = await readBody(event)

    const connection = await mysql.createConnection({
        host : runtimeConfig.mysqlHost,
        port: runtimeConfig.mysqlPort,
        user : runtimeConfig.mysqlUser,
        database: runtimeConfig.database,
        password: runtimeConfig.mysqlPass
    });

    try {
        const [results, fields] = await connection.query(
            "SELECT id FROM users WHERE user_id = '" + body.userId + "' AND user_pass = '" + body.userPass + "'"
        );

        connection.end()
        if (results.length !== 0) {
            return true
        }
        return false
    } catch (err) {
        console.log(err);
    }
    connection.end()
    return false
})
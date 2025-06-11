import mysql from 'mysql2/promise';
export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const query = getQuery(event)
    const promotionId = query.promotionId
    const clickId = Math.random().toString(36).slice(-10);

    const connection = await mysql.createConnection({
        host : runtimeConfig.mysqlHost,
        port: runtimeConfig.mysqlPort,
        user : runtimeConfig.mysqlUser,
        database: runtimeConfig.database,
        password: runtimeConfig.mysqlPass
    });

    try {
        const [results, fields] = await connection.query(
            "INSERT INTO click (click_id, promotion_id) VALUES ('" + clickId + "', '" + promotionId + "')"
        );

        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
        console.log(err);
    }
    connection.end()

    return clickId
})
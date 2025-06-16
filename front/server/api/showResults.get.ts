import mysql from 'mysql2/promise';
export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();

    const connection = await mysql.createConnection({
        host : runtimeConfig.mysqlHost,
        port: runtimeConfig.mysqlPort,
        user : runtimeConfig.mysqlUser,
        database: runtimeConfig.database,
        password: runtimeConfig.mysqlPass
    });

    try {
        const [results, fields] = await connection.query(
            "SELECT click.promotion_id, promotions.promotion_name, COUNT(click.id) as click_count, COUNT(conversion.id) as cv_count FROM click LEFT JOIN conversion ON click.id = conversion.click_tbl_id LEFT JOIN promotions ON click.promotion_id = promotions.promotion_id GROUP BY click.promotion_id, promotions.promotion_name"
        );

        console.log(results);
        console.log(fields);

        return results;
    } catch (err) {
        console.log(err);
    }
    connection.end()

    return []
})
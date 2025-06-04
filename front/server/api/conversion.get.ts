import mysql from 'mysql2/promise';
export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const query = getQuery(event)
    const clickId = query.clickId

    const connection = await mysql.createConnection({
        host : runtimeConfig.mysqlHost,
        port: runtimeConfig.mysqlPort,
        user : runtimeConfig.mysqlUser,
        database: runtimeConfig.database,
        password: runtimeConfig.mysqlPass
    });

    try {
        const [clickResults, clickFields] = await connection.query(
            "SELECT id FROM click WHERE click_id = '" + clickId + "'"
        );
        if (clickResults.length === 0) return;
        const click_tbl_id = clickResults[0].id
        const [conversionResults, conversionFields] = await connection.query(
            "INSERT INTO conversion (click_tbl_id, click_id) VALUES (" + click_tbl_id + ",'" + clickId + "')"
        );

        console.log(conversionResults)
        console.log(conversionFields)
        connection.end()
        return conversionResults
    } catch (err) {
        console.log(err);
        connection.end()
    }
})
import mysql from 'mysql2/promise';
export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const query = getQuery(event)
    const promotionName = sanitize(query.name as string)
    const promotionId = Math.random().toString(36).slice(-8);

    const connection = await mysql.createConnection({
        host : runtimeConfig.mysqlHost,
        port: runtimeConfig.mysqlPort,
        user : runtimeConfig.mysqlUser,
        database: runtimeConfig.database,
        password: runtimeConfig.mysqlPass
    });

    try {
        const [results, fields] = await connection.query(
            "INSERT INTO promotions (promotion_id, promotion_name) VALUES ('" + promotionId + "', '" + promotionName + "')"
        );

        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
        console.log(err);
    }
    connection.end()

    return promotionId
})

const ESCAPE_RULES: {[key: string]: string} = {
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
    '<': '&lt;',
    '>': '&gt;',
};

function sanitize(str: string): string {
    return str.replace(
        /[&'"<>]/g,
        (match) => ESCAPE_RULES[match],
    );
}
import mysql from 'mysql2/promise';
export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const promotionId = event.context.params!.id;
    const clickId = Math.random().toString(36).slice(-10);

    const connection = await mysql.createConnection({
        host : runtimeConfig.mysqlHost,
        port: runtimeConfig.mysqlPort,
        user : runtimeConfig.mysqlUser,
        database: runtimeConfig.database,
        password: runtimeConfig.mysqlPass
    });

    try {
        const [promotion, fields] = await connection.query(
            "SELECT lp_url FROM promotions WHERE promotion_id = '" + promotionId + "'"
        );
        if (promotion.length === 0) throw new Error('無効なプロモーションIDです。')

        const [clickResults, clickFields] = await connection.query(
            "INSERT INTO click (click_id, promotion_id) VALUES ('" + clickId + "', '" + promotionId + "')"
        );
        sendRedirect(event, promotion[0]['lp_url'] + "?clickId=" + clickId)
    } catch (err) {
        throw createError({
            statusCode: 500,
            statusMessage: err.toString(),
        })
    }
});
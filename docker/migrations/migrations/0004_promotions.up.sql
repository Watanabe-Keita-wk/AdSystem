CREATE TABLE promotions (
    id SERIAL PRIMARY KEY,
    promotion_id VARCHAR(100) NOT NULL,
    promotion_name VARCHAR(100),
    lp_url VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_flg TINYINT(1) NOT NULL DEFAULT 0
);
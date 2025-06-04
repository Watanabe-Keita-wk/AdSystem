CREATE TABLE conversion (
    id SERIAL PRIMARY KEY,
    click_tbl_id INT NOT NULL,
    click_id VARCHAR(100) NOT NULL,
    promotion_id VARCHAR(100),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
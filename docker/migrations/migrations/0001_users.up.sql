CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    user_id VARCHAR(100) NOT NULL,
    user_pass VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users
 (username, user_id, user_pass) 
VALUES
 ('admin', 'admin', 'pass');
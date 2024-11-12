// config.rs

use std::env;

pub struct Config {
    pub server_port: u16,
    pub database_url: String,
}

pub fn load() -> Config {
    Config {
        server_port: env::var("SERVER_PORT")
            .unwrap_or_else(|_| "8000".to_string())
            .parse()
            .expect("SERVER_PORT must be a number"),
        database_url: env::var("DATABASE_URL")
            .unwrap_or_else(|_| "postgres://user:password@localhost:5432/rusteze_db".to_string()),
    }
}

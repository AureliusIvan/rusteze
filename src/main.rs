// main.rs
use warp::Filter;
use tracing_subscriber;
mod config;
mod controllers;
mod models;
mod views;
mod router;
mod error;
// Add the router module

#[tokio::main]
async fn main() {
    // Initialize tracing/logging subscriber
    tracing_subscriber::fmt()
        .with_max_level(tracing::Level::INFO) // Set desired log level (e.g., INFO, DEBUG)
        .init();

    // Load configuration and set up routes
    let config = config::load();
    let routes = router::create_routes()
        .with(warp::log("rusteze::api")); // Attach logging to routes

    // Start the server with a log message
    tracing::info!("Starting server on http://localhost:{}", config.server_port);
    warp::serve(routes)
        .run(([0, 0, 0, 0], config.server_port))
        .await;
}

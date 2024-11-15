// src/router.rs

use warp::Filter;
use crate::controllers::example_controller;

pub fn create_routes() -> impl Filter<Extract=impl warp::Reply, Error=warp::Rejection> + Clone {
    // Define individual routes
    // warp::path("example") creates a filter that matches the path "/example"
    let example_route = warp::path::end()
        .and(warp::get())
        .and_then(example_controller::handle_example);

    // Combine all routes into a single filter
    example_route.with(warp::log("rusteze::api"))
}

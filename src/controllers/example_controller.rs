// src/controllers/example_controller.rs

use warp::{http::StatusCode, reply, Reply};
use tera::{Context, Tera};
use crate::error::TemplateError;

pub async fn handle_example() -> Result<impl Reply, warp::Rejection> {
    let tera = Tera::new("src/views/templates/**/*.html").map_err(|e| {
        eprintln!("Tera Template Parsing Error: {:?}", e);  // Log the detailed error
        warp::reject::custom(TemplateError::new("Template parsing error"))
    })?;

    let mut context = Context::new();
    context.insert("message", "Hello, World!");
    context.insert("status", &StatusCode::OK.as_u16());
    context.insert("title", "My Custom Page Title");
    context.insert("header_title", "Welcome to My Project");
    context.insert("header_subtitle", "An Amazing Project with Rust and Tailwind CSS");

    let rendered = tera.render("pages/example.html", &context).map_err(|_| {
        warp::reject::custom(TemplateError::new("Template rendering error on page"))
    })?;

    Ok(reply::html(rendered))
}

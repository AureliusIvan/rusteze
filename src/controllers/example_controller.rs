// src/controllers/example_controller.rs

use warp::{http::StatusCode, reply, Reply};
use tera::{Context, Tera};
use serde::Serialize;
use tracing::info;
use crate::error::TemplateError;
use crate::views::example_view::ExampleView;

pub async fn handle_example() -> Result<impl Reply, warp::Rejection> {
    let tera = match Tera::new("src/views/templates/*.html") {
        Ok(t) => t,
        Err(e) => {
            eprintln!("Template parsing error(s): {}", e);
            return Err(warp::reject::custom(TemplateError::new("Template parsing error")));
        }
    };

    let mut context = Context::new();
    context.insert("message", "Hello, World!");
    context.insert("status", &StatusCode::OK.as_u16());

    let rendered = tera.render("example.html", &context)
        .map_err(|_| warp::reject::custom(TemplateError::new("Template rendering error")))?;

    Ok(reply::html(rendered))
}

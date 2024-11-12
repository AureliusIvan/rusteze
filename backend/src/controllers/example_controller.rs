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

// Unit Test Section
#[cfg(test)]
mod tests {
    use super::*;
    use warp::Reply;

    #[tokio::test]
    async fn test_handle_example() {
        // Call the function and unwrap the result
        let response = handle_example().await.unwrap();

        // Convert the response into an HTML string
        let body = response.into_response().into_body();

        // Collect the body data into a string
        let bytes = hyper::body::to_bytes(body).await.unwrap();
        let body_string = String::from_utf8(bytes.to_vec()).unwrap();

        // Assert that the response contains certain expected values
        assert!(body_string.contains("Hello, World!"));
        assert!(body_string.contains("My Custom Page Title"));
        assert!(body_string.contains("Welcome to My Project"));
        assert!(body_string.contains("An Amazing Project with Rust and Tailwind CSS"));
    }
}

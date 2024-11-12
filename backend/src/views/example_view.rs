// src/views/example_view.rs

use serde::Serialize;

#[derive(Serialize)]
pub struct ExampleView {
    pub message: String,
    pub status: u16,
}

// Example function to create a view instance
impl ExampleView {
    pub fn new(message: &str, status: u16) -> Self {
        ExampleView {
            message: message.to_string(),
            status,
        }
    }
}

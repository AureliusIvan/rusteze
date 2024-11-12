// src/error.rs

use warp::reject::Reject;
use std::fmt;

#[derive(Debug)]
pub struct TemplateError {
    message: String,
}

impl TemplateError {
    pub fn new(message: &str) -> Self {
        TemplateError {
            message: message.to_string(),
        }
    }
}

impl Reject for TemplateError {}

// Optional: Implement Display and Error for better error handling
impl fmt::Display for TemplateError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.message)
    }
}

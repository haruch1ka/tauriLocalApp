// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/


use serde::{ Serialize, Deserialize };
#[derive(Debug, Serialize, Deserialize)]
struct MyMessage {
    field_str: String,
    field_u32: u32,
}


#[tauri::command]
fn greet(name: &str) -> String {
    println!("Hello from Rust!");    
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn simple_command(){
    println!("I was invoked from Rust!"); 
}

#[tauri::command]
fn command_with_message(message: String) -> String {
    format!("hello {}", message)
}
#[tauri::command]
fn command_with_object(message: MyMessage) -> MyMessage {   
    let MyMessage {
        field_str,
        field_u32,
    } = message;

    MyMessage {
        field_str: format!("hello {}", field_str),
        field_u32: field_u32 + 1,
    }
}   


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            simple_command,
            command_with_message,
            command_with_object
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

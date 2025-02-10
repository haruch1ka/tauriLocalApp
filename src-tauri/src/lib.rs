// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

#[tauri::command]
fn greet(name: &str) -> String {
    println!("Hello from Rust!");    
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn simple_command(){
    println!("I was invoked from Rust!"); 
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            simple_command
            ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

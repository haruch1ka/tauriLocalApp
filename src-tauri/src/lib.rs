// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use std::process::Command;
use std::string::String;

#[tauri::command]
fn greet(name: &str) -> String {
    println!("Hello from Rust!");    
    format!("Hello, {}! You've been greeted from Rust!", name)
}


// execute powershell script
#[tauri::command]
fn run_script() -> Result<String, String> {
    let script_path = "D:\\05_scripts\\00main\\04desktopAppDEV\\99prototype\\01powershell_proto\\01_完全にlocalからillusratorを立ち上げてスクリプトを実行する仕組み\\test.ps1";
    let output = Command::new("powershell")
        .arg("-File")
        .arg(script_path)
        .output()
        .map_err(|e| format!("failed to execute process: {}", e))?;

    let stdout = String::from_utf8(output.stdout).map_err(|e| format!("failed to parse stdout: {}", e))?;
    let stderr = String::from_utf8(output.stderr).map_err(|e| format!("failed to parse stderr: {}", e))?;

    if !stderr.is_empty() {
        return Err(format!("stderr: {}", stderr));
    }

    Ok(format!("stdout: {}", stdout))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, run_script])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

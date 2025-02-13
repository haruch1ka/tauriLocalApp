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
fn run_script(script_path: &str) -> Result<String, String> {
    let output = Command::new("powershell")
        .arg("-Command")
        .arg(format!(
            //制作したcomobjectを使ってillustratorを起動し、指定したスクリプトを実行する。main()を追記して、スクリプト内の関数を実行する。
            "$appRef = New-Object -ComObject Illustrator.Application; $appRef.DoJavaScript((Get-Content -Path '{}' -Raw)+\";main();\");",
            script_path
        ))
        .output()
        .map_err(|e| format!("failed to execute process: {}", e))?;

    let stdout = String::from_utf8_lossy(&output.stdout).to_string();
    let stderr = String::from_utf8_lossy(&output.stderr).to_string();

    if !stderr.is_empty() {
        return Err(format!("stderr: {}", stderr));
    }

    Ok(format!("stdout: {}", stdout))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, run_script])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

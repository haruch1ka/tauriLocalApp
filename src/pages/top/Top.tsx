import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
// import { open } from "@tauri-apps/plugin-dialog";

const Top = () => {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
		setGreetMsg(await invoke("greet", { name }));
	}

	async function runScript() {
		let scriptPath =
			"D:\\05_scripts\\00main\\04desktopAppDEV\\99prototype\\01powershell_proto\\01_完全にlocalからillusratorを立ち上げてスクリプトを実行する仕組み\\test.ps1";
		await invoke("run_script", { scriptPath });
	}

	return (
		<>
			<main className="m-0 pt-10 flex flex-col items-center justify-center">
				<h1>指定した場所のスクリプトを実行するスクリプト。</h1>
				<form
					className="greet-form"
					onSubmit={(e) => {
						e.preventDefault();
						greet();
					}}
				>
					<input id="greet-input" className="input" onChange={(e) => setName(e.currentTarget.value)} placeholder="名前を入力" />
					<button className="btn" type="submit">
						ボタン
					</button>
				</form>
				<p>{greetMsg}</p>
				<div className="p-4">
					<button className="btn" onClick={runScript}>
						Click to open dialog
					</button>
				</div>
			</main>
		</>
	);
};
export default Top;

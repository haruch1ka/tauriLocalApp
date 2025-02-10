import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import Headder from "./components/Headder";

const Top = () => {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
		setGreetMsg(await invoke("greet", { name }));
	}
	function executeCommands() {
		invoke("simple_command");
	}
	return (
		<>
			<Headder />
			<main className="m-0 pt-10 flex flex-col items-center justify-center">
				<p className="text-lg p-4">Welcome to Tauri React</p>
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
					<button className="btn" onClick={executeCommands}>
						Click to execute command
					</button>
				</div>
			</main>
		</>
	);
};
export default Top;

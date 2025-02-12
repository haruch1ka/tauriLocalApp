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

	function commandWithMessage() {
		invoke("command_with_message", { message: "message" }).then((res) => {
			console.log(res);
		});
	}
	function executeCommands() {
		invoke("simple_command");
		invoke("command_with_object", { message: { field_str: "some message", field_u32: 12 } }).then((message) => {
			console.log("command_with_object", message);
		});
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
					<button className="btn" onClick={commandWithMessage}>
						Send Message
					</button>
				</div>
			</main>
		</>
	);
};
export default Top;

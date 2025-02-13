import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import { FolderOpenIcon, PlayIcon } from "@heroicons/react/24/outline";
import { extname, basename } from "@tauri-apps/api/path";
import { open } from "@tauri-apps/plugin-dialog";
import { stat, BaseDirectory } from "@tauri-apps/plugin-fs";
import RadioBtn from "./../components/RadioBtn";

const Top = () => {
	// const [greetMsg, setGreetMsg] = useState("");
	const [scriptPath, setScriptPath] = useState(
		"D:\\05_scripts\\00main\\04desktopAppDEV\\99prototype\\01powershell_proto\\01_完全にlocalからillusratorを立ち上げてスクリプトを実行する仕組み\\test.jsx"
	);
	const [fileName, setFileName] = useState<string | null>(null);
	const [fileExt, setFileExt] = useState<string | null>(null);
	const [fileStat, setFileStat] = useState<any>(null);

	async function runScript() {
		await invoke("run_script", { scriptPath });
	}
	useEffect(() => {
		console.log(fileName, fileExt, fileStat);
	}, [fileName, fileExt, fileStat]);

	async function openFile() {
		const selected = await open({ multiple: false, extensions: ["jsx", "js"] });
		if (selected) {
			const baseName = await basename(selected);
			const extName = await extname(selected);
			const Stat = await stat(selected, { baseDir: BaseDirectory.AppLocalData });
			setFileName(baseName);
			setFileExt(extName);
			setFileStat(Stat);
			setScriptPath(selected);
		}
	}

	return (
		<>
			<main className="m-0 px-10 flex flex-col gap-4">
				<div className="p-2 flex flex-col gap-4">
					<h1 className="font-bold text-xl text-stone-500  pb-10"></h1>

					<div className="bg-stone-50 p-4 rounded-lg">
						<div className="py-2 flex flex-row items-center justify-between text-nowrap">
							<h2 className="font-semibold text-gray-500">起動ソフト</h2>
							<div>
								<RadioBtn />
							</div>
						</div>
					</div>

					<div className="bg-stone-50 p-4 rounded-lg">
						<div className="py-2 flex flex-row items-center justify-between">
							<h2 className="font-semibold text-gray-500">開いたファイル</h2>
							<button className="btn btn-sm text-xs bg-stone-200" onClick={() => openFile()}>
								<FolderOpenIcon className="h-4 w-4" />
								ファイルを開く
							</button>
						</div>
						<div className="mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
							<div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
								<table className="min-w-full leading-normal ">
									<thead className="bg-stone-200">
										<tr>
											<th className="px-6 py-4 border-b-2 text-nowrap border-stone-300  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
												ファイル名
											</th>
											<th className="px-6 py-4 border-b-2 text-nowrap border-stone-300  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
												拡張子
											</th>
											{/* <th className="px-6 py-4 border-b-2 text-nowrap border-stone-300  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											サイズ
										</th> */}
											<th className="px-6 py-4 border-b-2 text-nowrap border-stone-300  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
												パス
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="px-5 py-5 border-b border-gray-200  text-sm">
												<div className="flex">
													{/* <div className="flex-shrink-0 w-10 h-10">
													<img
														className="w-full h-full rounded-lg"
														src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
														alt=""
													/>
												</div> */}
													<div className="flex ml-3 items-center">
														<p className="text-gray-900 text-nowrap ">{fileName ? fileName : "不明"}</p>
													</div>
												</div>
											</td>
											<td className="px-5 py-5 border-b border-gray-200  text-sm">
												<p className="text-gray-900 text-nowrap">{fileExt ? fileExt : "不明"}</p>
											</td>
											{/* <td className="px-5 py-5 border-b border-gray-200  text-sm">
											<p className="text-gray-900 text-nowrap">{fileStat ? fileStat.size : "不明"}</p>
										</td> */}
											<td className="px-5 py-5 border-b border-gray-200  text-sm">
												<p className="text-gray-900 text-nowrap truncate max-w-40 mr-full">{scriptPath ? scriptPath : "不明"}</p>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div className="flex flex-row-reverse justify-between ">
						<button className="btn bg-amber-200 hover:bg-amber-400" onClick={runScript}>
							<PlayIcon className="h-6 w-6" />
							スクリプトを実行する
						</button>
					</div>
				</div>
			</main>
		</>
	);
};
export default Top;

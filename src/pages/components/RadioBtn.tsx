const RadioBtn = () => {
	const items = [
		{ id: 1, value: ".ai", checked: true },
		{ id: 2, value: ".indd", checked: false },
		{ id: 3, value: ".psd", checked: false },
	];
	return (
		<>
			<div className="grid w-full place-items-start">
				<div className="grid grid-cols-3 gap-2 rounded-xl bg-stone-200 p-2">
					{items.map((i) => {
						return (
							<div key={i.id}>
								<input
									type="radio"
									name="option"
									id={i.value}
									value={i.value}
									defaultChecked={i.checked}
									className="peer hidden"
								/>
								<label
									htmlFor={i.value}
									className="block text-sm cursor-pointer select-none rounded-lg px-3 py-1 text-center peer-checked:bg-stone-500 font-bold peer-checked:text-white"
								>
									{i.value}
								</label>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default RadioBtn;

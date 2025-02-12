import React, { useEffect, useState } from "react";
import "animate.css";
import { BoltIcon, HomeIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface DelayProps {
	children: React.ReactNode;
	delay: number;
	giveClassName: string;
}

const Delay = ({ children, delay, giveClassName }: DelayProps) => {
	const [isTimerEnd, setIsTimerEnd] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsTimerEnd(true);
		}, delay);
		return () => clearTimeout(timer);
	}, [delay]);
	return <div className={isTimerEnd ? giveClassName : "invisible"}>{children}</div>;
};

const Sidebar: React.FC = () => {
	return (
		<>
			<div className="flex flex-col h-lvh p-3 w-50 dark:bg-gray-0 dark:text-gray-800  shadow-lg shadow-stone-300">
				<div className="space-y-3 ">
					<div className="flex items-center justify-between">
						<Delay delay={1000} giveClassName="animate__animated animate__fadeInDown animate__fast">
							<div className="flex  items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg px-3 py-1.5 text-lg font-semibold">
								<div className="text-token-text-secondary text-gray-700 flex-shrink-0">App</div>
								<BoltIcon className="h-6 w-6 text-amber-400 flex-shrink-0 animate-scale-up-ver-center" />
							</div>
						</Delay>
						{/* <button className="p-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-800">
								<rect width="352" height="32" x="80" y="96"></rect>
								<rect width="352" height="32" x="80" y="240"></rect>
								<rect width="352" height="32" x="80" y="384"></rect>
							</svg>
						</button> */}
					</div>
					{/* <div className="relative">
						<span className="absolute inset-y-0 left-0 flex items-center py-4">
							<button type="submit" className="p-2 focus:outline-none focus:ring">
								<svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-600">
									<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
								</svg>
							</button>
						</span>
						<input
							type="search"
							name="Search"
							placeholder="Search..."
							className="w-full py-2 pl-10 text-sm dark:border-rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
						/>
					</div> */}

					<div className="flex-1 rounded-sm">
						<ul className="pt-2 pb-4 space-y-1 text-sm">
							<li>
								<Link to="/" className="flex items-center p-2 space-x-3 rounded-md">
									<HomeIcon className="w-5 h-5" />
									<span>Top</span>
								</Link>
							</li>
							<li className="rounded-lg p-1 dark:hover:bg-stone-200 transition duration-200">
								<Link to="/setting" className="flex items-center p-2 space-x-3 rounded-md">
									<AdjustmentsHorizontalIcon className="w-5 h-5" />
									<span>Setting</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;

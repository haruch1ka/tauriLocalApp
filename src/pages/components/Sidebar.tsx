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
					</div>
					<div className="flex-1 rounded-sm">
						<ul className="pt-2 pb-4 space-y-1 text-sm">
							<li>
								<Link to="/" className="flex items-center p-2 space-x-3 rounded-md">
									<HomeIcon className="w-5 h-5" />
									<span className="text-sm">スクリプトをそのまま実行</span>
								</Link>
							</li>
							<li className="rounded-lg p-1 dark:hover:bg-stone-200 transition duration-200">
								<Link to="/setting" className="flex items-center p-2 space-x-3 rounded-md">
									<AdjustmentsHorizontalIcon className="w-5 h-5" />
									<span>設定</span>
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

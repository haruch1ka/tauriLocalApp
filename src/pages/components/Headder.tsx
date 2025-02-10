import React, { useEffect, useState } from "react";
import "animate.css";
import { BoltIcon } from "@heroicons/react/24/outline";

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

const Header = () => {
	return (
		<>
			<div className="sticky top-0 z-10 min-h-[70px] items-center justify-center border-transparent pl-0 grid grid-cols-2 lg:grid-cols-3 bg-white shadow-md">
				<Delay delay={1000} giveClassName="animate__animated animate__fadeInDown animate__fast">
					<div className="flex cursor-pointer items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg px-3 py-1.5 text-lg font-semibold">
						<div className="text-token-text-secondary text-gray-700 flex-shrink-0">App</div>
						<BoltIcon className="h-6 w-6 text-amber-400 flex-shrink-0 animate-scale-up-ver-center" />
					</div>
				</Delay>
			</div>
		</>
	);
};

export default Header;

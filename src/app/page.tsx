import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="max-w-[500px] min-h-screen w-full bg-cover bg-no-repeat bg-[url(/img/background.png)] md:bg-[url(/img/background_website.png)]">
			<div className="flex items-center justify-center relative">
				<Image
					src="/img/upper_website.png"
					alt="upper"
					width={500}
					height={300}
					className="hidden md:block"
				/>
				<Image
					src="/img/upper_v3.png"
					alt="upper"
					width={500}
					height={140}
					className="block h-[140px] -mt-2 md:hidden"
				/>
				<div className="absolute inset-0 bg-black/60"></div>
				<div className="absolute md:bottom-20">
					<h1 className="text-center leading-5 mt-5 md:mt-0 md:leading-6">
						<span className="text-md font-bold drop-shadow-md text-[#fff69a] uppercase md:text-[#1a9e56] md:text-5xl md:font-extrabold md:drop-shadow-[2px_2px_0px_rgba(255,246,154,1)]">
							99 Free Spins
						</span>
						<br />
						<span className="text-sm drop-shadow-md font-bold text-white italic md:font-extrabold md:uppercase">
							Chance to win a huge jackpot!
						</span>
						<br />
						<span className="text-sm drop-shadow-md font-bold text-white italic md:font-extrabold md:uppercase ">
							Winnings will be instantly credited to your account.
						</span>
						<br />
						<span className="text-sm drop-shadow-md font-bold text-white italic md:font-extrabold md:uppercase">
							Seize this opportunity and play now!
						</span>
					</h1>
				</div>
			</div>

			{/* frame relative overflow-y-auto */}
			<div className="flex items-center justify-center  md:-mt-8 relative z-10">
				{/* <div className="absolute inset-0">
					<Image
						src="/img/sample-frame.jpg"
						width={500}
						height={800}
						alt="sample frame"
						className="md:h-[600px]"
					/>
				</div> */}
				<iframe
					src="https://api.g1388.makethatold.com/promobot/lobby?userType=guest&campaignName=DEMO%20KYC%200502&currency=demo_promobot_voucher_bdt"
					width="100%"
					height="500"
					className="rounded-lg h-[500px] md:h-[600px]"
					// allowFullScreen
				/>
			</div>

			{/* download */}
			<div className="flex items-center justify-center">
				<Link href="#">
					<Image
						src="/img/download_button.png"
						width={400}
						height={130}
						alt="Download button"
					/>
				</Link>
			</div>

			<div className="flex items-center justify-center">
				<Image
					src="/img/lower_website_v2.png"
					width={400}
					height={200}
					alt="Millionaire"
					className="hidden md:block"
				/>
				<Image
					src="/img/lower_v2.png"
					width={400}
					height={200}
					alt="Millionaire"
					className="block md:hidden"
				/>
			</div>
		</div>
	);
}

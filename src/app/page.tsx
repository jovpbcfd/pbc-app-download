import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="max-w-[500px] min-h-screen w-full bg-cover bg-no-repeat bg-[url(/img/background.png)] md:bg-[url(/img/background_website.png)]">
			<div className="flex items-center justify-center">
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
			</div>

			{/* frame */}
			<div className="flex items-center justify-center  md:-mt-8">
				<iframe
					src="https://api.g1388.makethatold.com/promobot/lobby?userType=guest&campaignName=DEMO%20KYC%200502&currency=demo_promobot_voucher_bdt"
					width="100%"
					height="500"
					className="rounded-lg"
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
					src="/img/lower_website.png"
					width={400}
					height={200}
					alt="Millionaire"
					className="hidden md:block"
				/>
				<Image
					src="/img/lower.png"
					width={400}
					height={200}
					alt="Millionaire"
					className="block md:hidden"
				/>
			</div>
		</div>
	);
}

import Image from "next/image";

export default function Home() {
	return (
		<div className="max-w-[500px] min-h-screen w-full bg-cover bg-no-repeat bg-[url(/img/background_website.png)]">
			<div className="flex items-center justify-center">
				<Image
					src="/img/upper_website.png"
					alt="upper"
					width={500}
					height={300}
				/>
			</div>

			{/* frame */}
			<div className="flex items-center justify-center mt-4">
				<iframe
					src="https://api.g1388.makethatold.com/promobot/lobby?userType=guest&campaignName=DEMO%20KYC%200502&currency=demo_promobot_voucher_bdt"
					width="80%"
					height="600"
					className="rounded-lg"
					// allowFullScreen
				/>
			</div>

			{/* div */}
			<div></div>
		</div>
	);
}

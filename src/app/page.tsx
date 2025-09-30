import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="max-w-[500px] min-h-screen w-full bg-cover bg-no-repeat bg-[url(/img/background.png)] md:bg-[url(/img/background_website.png)]">
			<div className="flex items-center justify-center relative z-5">
				<Image
					src="/img/upper_website.png"
					alt="upper"
					width={500}
					height={300}
					className="hidden md:block"
				/>
				<Image
					src="/img/upper_v2.png"
					alt="upper"
					width={500}
					height={300}
					className="block h-auto md:hidden"
				/>

				<div className="absolute bottom-[-110px]  md:bottom-[-80px]">
					<Image
						src="/img/pbc-textstyle.webp"
						width={300}
						height={300}
						alt="99 free spins"
						className=""
					/>
				</div>
			</div>

			{/* frame relative overflow-y-auto */}
			<div className="flex items-center justify-center mt-40 md:mt-30 relative z-10">
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
					className="rounded-lg h-[500px] md:h-[500px] md:w-[300px] border-0"
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
				{/* <Image
					src="/img/lower_website_v2.png"
					width={400}
					height={200}
					alt="Millionaire"
					className="hidden md:block"
				/> */}
				{/* <Image
					src="/img/lower_v2.png"
					width={400}
					height={200}
					alt="Millionaire"
					className="block md:hidden"
				/> */}
			</div>
		</div>
	);
}

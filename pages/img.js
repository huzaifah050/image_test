import Image from 'next/image';

function img() {
	return (
		<div>
			<h1>ujgkhbjn</h1>
			<Image
				src="/img.jpg"
				alt="test"
				width="400"
				height="400"
				layout="responsive"
			/>
			<div className="img">
				<Image
					src="https://source.unsplash.com/user/erondu/1600x900"
					alt="test"
					width="400"
					height="400"
					layout="responsive"
				/>
			</div>
		</div>
	);
}

export default img;

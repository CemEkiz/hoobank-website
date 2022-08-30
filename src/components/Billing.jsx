import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
	<section
		id='product'
		className={`${layout.sectionReverse} items-center text-center md:text-left gap-x-5`}
	>
		{/* Images */}
		<div
			className={`${layout.sectionImgReverse} items-center justify-center`}
		>
			<img
				src={bill}
				alt='billing'
				className='block w-[100%] sm:w-[80%] lg:w-[100%] relative z-5 mt-10 md:mt-0'
			/>
			{/* Gradient Start */}
			<div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
			<div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
			{/* Gradient End */}
		</div>

		{/* Description */}
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				Easily control your
				<br />
				billing &amp; invoicing
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Elit enim sed massa etiam. Mauris eu adipiscing ultrices
				ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
				integer platea placerat.
			</p>

			{/* Download App */}
			<div
				className={`flex flex-row flex-wrap sm:mt-10 mt-6 ${styles.marginCenter} md:ml-0 md:mr-0`}
			>
				<img
					src={apple}
					alt='apple store'
					className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
				/>
				<img
					src={google}
					alt='apple store'
					className='w-[128px] h-[42px] object-contain cursor-pointer'
				/>
			</div>
		</div>
	</section>
);

export default Billing;

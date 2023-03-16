import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
	<div
		className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer group`}
	>
		<div
			className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
		>
			<div className={`${styles.flexStart} text-gradient flex-row`}>
				<p className='font-poppins font-medium text-[18px] leading-[23px]'>
					<span className='mr-3'>Get</span>
				</p>
				<img
					src={arrowUp}
					className='w-[23px] h-[23px] object-contain'
					alt='arrow'
				/>
			</div>
			<p className='text-gradient font-poppins font-medium text-[18px] leading-[23px]'>
				<span>Started</span>
			</p>
		</div>
	</div>
);

export default GetStarted;

import { clients } from '../constants';
import styles from '../style';

const Clients = () => (
	<section
		className={`${styles.flexCenter} my-4 mb-20 md:mb-40`}
	>
		<div
			className={`${styles.flexCenter} flex-wrap w-full gap-x-10 gap-y-5 sm:gap-y-0`}
		>
			{clients.map((client) => (
				<div
					key={client.id}
					className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `}
				>
					<img
						src={client.logo}
						alt='client logo'
						className='sm:w-[192px] w-[100px] object-contain transition duration-300 cursor-pointer hover:brightness-200'
					/>
				</div>
			))}
		</div>
	</section>
);

export default Clients;

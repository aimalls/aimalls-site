import { IonGrid, IonRow, IonCol } from '@ionic/react'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Scrollbar, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import '@ionic/react/css/ionic-swiper.css';


import account from '../../assets/images/banners/account.png'
import addToCart from '../../assets/images/banners/add_to_cart.png'
import addToCart2 from '../../assets/images/banners/add_to_card_2.png'
import cart from '../../assets/images/banners/Cart.png'
import choice from '../../assets/images/banners/CHOICE.png'
import choice2 from '../../assets/images/banners/Choice-2.png'
import completed from '../../assets/images/banners/completed.png'
import confirm from '../../assets/images/banners/Confirm.png'
import done from '../../assets/images/banners/DONE.png'
import fillOut from '../../assets/images/banners/fill-out.png'
import forgotPassword from '../../assets/images/banners/FORGOT-PASSWORD.png'
import home from '../../assets/images/banners/HOME.png'
import login from '../../assets/images/banners/Login.png'
import login2 from '../../assets/images/banners/Login-2.png'
import ongoing from '../../assets/images/banners/Ongoing.png'
import orderPlace from '../../assets/images/banners/Order-place.png'
import otp from '../../assets/images/banners/OTP.png'
import paymentMethod from '../../assets/images/banners/payment-method.png'
import scan from '../../assets/images/banners/SCAN.png'
import scan2 from '../../assets/images/banners/SCAN-1.png'
import search from '../../assets/images/banners/Search.png'
import settings from '../../assets/images/banners/Settings.png'
import signUp from '../../assets/images/banners/Sign-up.png'
import trackOrder from '../../assets/images/banners/track-order.png'
import verify from '../../assets/images/banners/VERIFY.png'
import welcome from '../../assets/images/banners/WELCOME.png'


const HeroSlider: React.FC = () => {

	const slideContent = [
		{ title: 'Account', img: account },
		{ title: 'Add To Cart', img: addToCart },
		{ title: 'Add To Cart', img: addToCart2 },
		{ title: 'Checkout', img: cart },
		{ title: 'Choices', img: choice },
		{ title: 'Choices', img: choice2 },
		{ title: 'Completed Orders', img: completed },
		{ title: 'Confirm Order', img: confirm },
		{ title: 'Email Confirmation', img: done },
		{ title: 'Payment Methods', img: fillOut },
		{ title: 'Forgot Password', img: forgotPassword },
		{ title: 'Home', img: home },
		{ title: 'Login Account Save Account', img: login },
		{ title: 'Login', img: login2 },
		{ title: 'Ongoing Orders', img: ongoing },
		{ title: 'Order Placed', img: orderPlace },
		{ title: 'OTP', img: otp },
		{ title: 'Payment Method', img: paymentMethod },
		{ title: 'Scan', img: scan },
		{ title: 'Scan Results', img: scan2 },
		{ title: 'Search', img: search },
		{ title: 'Settings', img: settings },
		{ title: 'Sign Up', img: signUp },
		{ title: 'Track Order', img: trackOrder },
		{ title: 'Verified Member', img: verify },
		{ title: 'Sign up using mobile number', img: welcome },
	]

	return (
		<div id='hero-slider'>
			<IonGrid>
				<IonRow>
					<IonCol size="12" sizeSm="12" sizeMd="12">
						<Swiper modules={[Keyboard, Pagination, Scrollbar, Navigation]}
							keyboard={true}
							navigation={true}
							pagination={true}
							loop={true}
							className="mySwiper"
						>
							{ slideContent.map((slide, index) => (
								<SwiperSlide key={index}>
									<div>
										{slide.title}
									</div>
									<img src={slide.img} alt={slide.title} />
								</SwiperSlide>
							))}
						</Swiper>
					</IonCol>
				</IonRow>
			</IonGrid>
		</div>
	)
	}

export default HeroSlider

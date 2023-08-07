import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/react'
import React, { useEffect, useMemo, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Scrollbar, Navigation, Autoplay, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import '@ionic/react/css/ionic-swiper.css';

import signUp from '../../assets/images/banners/Sign-up.png'
import welcome from '../../assets/images/banners/WELCOME.png'

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
import trackOrder from '../../assets/images/banners/track-order.png'
import verify from '../../assets/images/banners/VERIFY.png'
import { useScreen } from '../../hooks/ScreenSize';
import { SocialButtons } from '../../components/SocialButtons';


const HeroSlider: React.FC = () => {
	
	const slideContent = [
		{ title: 'Sign Up', img: signUp },
		{ title: 'Sign up using your mobile number', img: welcome },
		{ title: 'OTP', img: otp },
		{ title: 'Mobile Number Verified', img: verify },
		{ title: 'Forgot Password', img: forgotPassword },
		{ title: 'Email Confirmation', img: done },
		{ title: 'Login', img: login2 },
		{ title: 'Home', img: home },
		{ title: 'Search', img: search },
		{ title: 'Scan', img: scan },
		{ title: 'Scan Results', img: scan2 },
		{ title: 'Choices', img: choice },
		{ title: 'Add To Cart', img: addToCart },
		{ title: 'Confirm Order', img: confirm },
		{ title: 'Checkout', img: cart },
		{ title: 'Payment Method', img: paymentMethod },
		{ title: 'Payment Methods', img: fillOut },
		{ title: 'Order Placed', img: orderPlace },
		{ title: 'Completed Orders', img: completed },
		{ title: 'Ongoing Orders', img: ongoing },
		{ title: 'Track Order', img: trackOrder },
		{ title: 'Account', img: account },
		{ title: 'Settings', img: settings },
		{ title: 'Login Save Account', img: login },
	]

	const [chunkedSlides, setChunkedSlides] = useState([]);
	const { screenWidth } = useScreen();

	useEffect(() => {
		let chunkSize = 4;
		if (screenWidth < 768 && screenWidth > 576 ) {
			chunkSize = 2
		} else if(screenWidth < 576) {
			chunkSize = 1
		}
		for (let i = 0; i < slideContent.length; i += chunkSize) {
			const chunk = slideContent.slice(i, i + chunkSize)
			setChunkedSlides((current) => {
				let curr = [...current, chunk] as any

				return curr;
			})
		}

	}, [])


	return (
		<Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			keyboard={true}
			pagination={true}
			zoom={true}
			loop={true}
		>
			<SwiperSlide>
				<IonGrid className="container" style={{ alignSelf: "center" }}>
					<IonRow className={screenWidth <= 768 ? `ion-justify-content-center` : ''}>
						<IonCol size="10" sizeMd="5" sizeLg="4" pushMd="1">
							<div className="hero-tagline">Experience the <span>Future of Shopping </span> with <span>AI</span></div>
							<div className="hero-caption">It is an AI-powered online mall, a platform and an app that uses intelligent algorithms.</div>
							<div className="hero-action-buttons">
								<IonButton color="primary" shape="round" href="#about-section">Get Started</IonButton>
								<IonButton color="primary" shape="round" href="https://cdn.aimalls.app/whitepaper.pdf" target="_blank">Whitepaper</IonButton>
							</div>
						</IonCol>
					</IonRow>
					<IonRow className="ion-justify-content-center ion-hide-md-up">
						<IonCol size="10" pushMd="1" className="hero-social-buttons">
							<SocialButtons />
						</IonCol>
					</IonRow>
				</IonGrid>
			</SwiperSlide>
			{chunkedSlides.map((chunkSlide: any, index) => (
				<SwiperSlide key={index}>
					<IonGrid className='container'>
						<IonRow className='ion-justify-content-center'>
							<IonCol size='10'>
								<div className="hero-tagline">AIMalls <span>App</span></div>
							</IonCol>
							<IonCol size='10' style={{ display: 'flex', justifyContent: 'center' }}>
								
							{chunkSlide?.map((slide: any, index: number) => (
								<div key={index}>
									<img style={{ maxHeight: 400, padding: '0px 20px' }} src={slide.img} alt={slide.title} />
								</div>
							))}
							</IonCol>
						</IonRow>
					</IonGrid>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default HeroSlider

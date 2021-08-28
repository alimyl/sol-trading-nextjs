// Layout component
import Layout from 'components/Layout'

// global styles
import '../styles/globals.scss'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Swiper styles
import "swiper/swiper.scss";
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import "swiper/components/thumbs/thumbs.min.css"

// REACT REDUX
import { Provider } from "react-redux";
// REDUX STORE
import appStore from 'redux/store/store'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={appStore}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default MyApp

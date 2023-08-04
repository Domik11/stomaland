import './global.scss';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage.jsx';
import DoctorsPage from './pages/DoctorsPage/DoctorsPage.jsx';
import SearchLine from './components/SearchLine/SearchLine.jsx'

import DoctorPersonalPage from './pages/DoctorPersonalPage/DoctorPersonalPage';

function App() {
	return (
		<BrowserRouter>
				<Header />
				{/* <SearchLine /> */}
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/doctors' element={<DoctorsPage />} />
            <Route exact path='/doctors/:path' element={<DoctorPersonalPage />} />
          </Routes>
				<Footer />
		</BrowserRouter>
	);
}

export default App;

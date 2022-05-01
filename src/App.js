import './assets/style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Entry, Footer, Home, About } from './components/index';

function App() {

	return (
			<BrowserRouter>
				<Header />
				<main>
				<div className='wrap'>
					<section>
						<div className='cts'>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route path="/news/:id" element={<Entry />} />
							<Route exact path="/about" element={<About />} />
						</Routes>
						</div>
					</section>
				</div>
				</main>
				<Footer />
			</BrowserRouter>
	);
}

export default App;

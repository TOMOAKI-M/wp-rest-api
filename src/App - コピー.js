import './assets/style.scss';
import { useContext, useState, useEffect } from 'react';
import { Header, PostList, Pager, Footer, Loading } from './components/index';
import { GlobalContextContext } from './components/providers/GlobalContext';

function App() {
	const [data, setData] = useState([]);
	//const [postHeader, setPostHeader] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const per_page = '5';

	//const getPostHeader = getPostHeader => setPostHeader(getPostHeader);
	const getPostHeader = useContext(GlobalContextContext);
	const getData = gettingData => setData(gettingData);
	const pagePrev = () => {
		return (
			setIsLoading(true),
			(page > 1) ? setPage(page - 1) : false
		)
	};
	const pageNext = () => {
		return (
			setIsLoading(true),
			(page < getPostHeader) ? setPage(page + 1) : false
		)
	}
	const pageGoTo = goto => {
		return (
			setIsLoading(true),
			setPage(goto)
		)
	}

	//console.log(getPostHeader)


	useEffect(() => {
		fetch(`https://onweb.work/api/wp-json/wp/v2/posts?per_page=${per_page}&page=${page}`)
			.then( response => response.json() )
			.then( responseJson => getData(responseJson) )
			.catch( err => console.log(err) )
			.finally(() => {
				setIsLoading(false)
			});
	}, [page, isLoading])

	// useEffect(() => {
	// 	fetch(`https://onweb.work/api/wp-json/wp/v2/posts?per_page=${per_page}`)
	// 		.then( response => response.headers.get('x-wp-totalpages') )
	// 		.then( responseJson => getPostHeader(responseJson) )
	// 		.catch( err => console.log(err) )
	// }, [])

	return (
		<>
			<Header />
			<main>
			<section>
				<div className='cts'>
					<h1>お知らせ</h1>
					{ isLoading ? (
						<Loading />
					) : (
						<>
							<PostList posts={data} />
							<Pager postHeader={getPostHeader} per_page={per_page} page={page} prev={pagePrev} next={pageNext} goto={pageGoTo} />
						</>
					)}
				</div>
			</section>
			</main>
			<Footer />
		</>
	);
}

export default App;

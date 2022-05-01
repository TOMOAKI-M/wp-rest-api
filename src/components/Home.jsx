import '../assets/style.scss';
import { useContext, useState, useEffect } from 'react';
import { PostList, Pager, Loading } from './index';
import { GlobalContextContext } from './providers/GlobalContext';

const Home = () => {

	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const per_page = '5';

	const getPostHeader = useContext(GlobalContextContext);
	// console.log(getPostHeader)
	const getData = gettingData => setData(gettingData);
	const pagePrev = () => {
		if (page > 1) {
			return (
				setIsLoading(true),
				setPage(page - 1)
			)
		} else {
			return false
		}
	};
	const pageNext = () => {
		if (page < getPostHeader) {
			return (
				setIsLoading(true),
				setPage(page + 1)
			)
		} else {
			return false
		}
	}
	const pageGoTo = goto => {
		return (
			setIsLoading(true),
			setPage(goto)
		)
	}

	useEffect(() => {
		fetch(`https://onweb.work/api/wp-json/wp/v2/posts?per_page=${per_page}&page=${page}`)
			.then( response => response.json() )
			.then( responseJson => getData(responseJson) )
			.catch( err => console.log(err) )
			.finally(() => {
				setIsLoading(false)
			});
	}, [page, isLoading])

	return (
		<>
			<h1>お知らせ</h1>
			{ isLoading ? (
				<Loading />
			) : (
				<>
					<PostList posts={data} />
					<Pager postHeader={getPostHeader} per_page={per_page} page={page} prev={pagePrev} next={pageNext} goto={pageGoTo} />
				</>
			)}
		</>
	)
}

export default Home
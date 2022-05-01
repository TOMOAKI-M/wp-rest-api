import { createContext, useState, useEffect } from "react";

export const GlobalContextContext = createContext({});

export const GlobalContextProvider = props => {
	const { children } = props;
	const per_page = '5';
	const [postHeader, setPostHeader] = useState('');

	const getPostHeader = gph => {
		return setPostHeader(gph);
	}

	useEffect(() => {
		fetch(`https://onweb.work/api/wp-json/wp/v2/posts?per_page=${per_page}`)
			.then( response => response.headers.get('x-wp-totalpages') )
			.then( responseJson => getPostHeader(responseJson) )
			.catch( err => console.log(err) )
	}, [])

	return (
		<GlobalContextContext.Provider value={postHeader}>
			{children}
		</GlobalContextContext.Provider>
	)
}
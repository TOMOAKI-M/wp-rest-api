import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from './index';
import sanitizeHtml from 'sanitize-html';

const Entry = (props) => {
	let { id } = useParams();
//console.log(props)
	//const id = props.match.params.id;
	//console.log(id)
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getData = gettingData => setData(gettingData);

	useEffect(() => {
		fetch(`https://onweb.work/api/wp-json/wp/v2/posts/${id}`)
			.then( response => response.json() )
			.then( jData => getData(jData) )
			.catch( err => console.log(err) )
			.finally(() => {
				setIsLoading(false)
			});
	}, [id, isLoading])

	return (
		<>
			{ isLoading ? (
				<Loading />
			) : (
				<>
					<h1>{data.title.rendered}</h1>
					<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.content.rendered) }}></div>
					<div className="btn-area"><a href="/">戻る</a></div>
				</>
			) }
		</>
	)
}

export default Entry
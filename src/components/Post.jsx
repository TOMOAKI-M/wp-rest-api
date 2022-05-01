const Post = (props) => {
	return (
		(props.posts.map((post, index) => {
			let catName = [];
			const catType = post.categories;
			catType.map((value) => {
				switch(true) {
					case (value === 3):
						catName.push('お知らせ');
						break;
					case (value === 4):
						catName.push('IR情報');
						break;
					case (value === 5):
						catName.push('CSR情報');
						break;
					default:
						catName.push('未分類');
						break;
				}
				return catName;
			})

			return (
				<li key={index.toString()}>
					<a href={'/news/'+post.id}>
						{post.date} / {post.title.rendered}
					</a>
					<ul className="catlist">{catName.map((value, index) => {
						return <li key={index.toString()}>{value}</li>
					})}</ul>
				</li>
			)
		}))
	)
}

export default Post
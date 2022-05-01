import Post from './Post'

const PostList = (props) => {
	return (
		<ul className='post-list'>
			<Post posts={props.posts} />
		</ul>
	)
}

export default PostList
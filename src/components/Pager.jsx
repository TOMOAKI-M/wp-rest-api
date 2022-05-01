import Page from './Page'

const Pager = (props) => {
	return (
		<>
			<ul className="pager">
				<li className="prev" onClick={props.prev}>＜</li>
				<Page page={props.page} postHeader={props.postHeader} goto={props.goto} />
				<li className="next" onClick={props.next}>＞</li>
			</ul>
		</>
	)
}

export default Pager
const Page = (props) => {
	return (
		<>
		{(() => {
			const items = [];
			for ( let i=1; props.postHeader >= i; i++) {
				items.push(<li page={i} onClick={() => {
					props.goto(i)
				}} key={i.toString()} className={(i === props.page) ? "current" : ""}>{i}</li>);
			}
			return items
		})()}
		</>
	)
}

export default Page
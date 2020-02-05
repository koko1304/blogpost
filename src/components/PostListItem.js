const React = require("react");

const PostListItem = props => {
	return (
		<li className="list-group-item">
			<h1 style={{ fontSize: "25px" }}>{props.post.title}</h1>
			<p>{props.post.body}</p>
			<div>{props.user.name}</div>
		</li>
	);
};

module.exports = PostListItem;

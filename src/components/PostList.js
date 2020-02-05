const React = require("react");
const { connect } = require("react-redux");

const { fetchPosts, fetchUsers } = require("../actions");
const PostListItem = require("./PostListItem");

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
		this.props.fetchUsers();
	}

	postListItems() {
		if (!this.props.posts.length || !this.props.users.length) return null;

		return this.props.posts.map(post => {
			const user = this.props.users.find(user => {
				return user.id === post.userId;
			});

			return <PostListItem key={post.id} post={post} user={user} />;
		});
	}

	render() {
		return <ul className="list-group list-group-flush">{this.postListItems()}</ul>;
	}
}

const mapStateToProps = state => {
	return { posts: state.posts, users: state.users };
};

module.exports = connect(mapStateToProps, { fetchPosts, fetchUsers })(PostList);

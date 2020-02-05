const postsReducer = (posts = [], actions) => {
	switch (actions.type) {
		case "FETCH_POSTS":
			return actions.payload;
		default:
			return posts;
	}
};

module.exports = postsReducer;

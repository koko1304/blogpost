const axios = require("axios");

const fetchPosts = () => async dispatch => {
	const res = await axios.get("https://jsonplaceholder.typicode.com/posts/");

	dispatch({
		type: "FETCH_POSTS",
		payload: res.data
	});
};

const fetchUsers = () => async dispatch => {
	const res = await axios.get("https://jsonplaceholder.typicode.com/users/");

	dispatch({
		type: "FETCH_USERS",
		payload: res.data
	});
}

module.exports = {
	fetchPosts,
	fetchUsers
};

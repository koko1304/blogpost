const { combineReducers } = require("redux");

const postsReducer = require("./postsReducer");
const usersReducer = require("./usersReducer");

const Reducers = combineReducers({
	posts: postsReducer,
	users: usersReducer
});

module.exports = Reducers;

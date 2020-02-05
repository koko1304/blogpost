const usersReducer = (users = [], actions) => {
	switch (actions.type) {
		case "FETCH_USERS":
			return actions.payload;
		default:
			return users;
	}
};

module.exports = usersReducer;

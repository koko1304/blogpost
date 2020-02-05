const React = require("react");
const ReactDOM = require("react-dom");
const { Provider } = require("react-redux");
const { createStore, applyMiddleware } = require("redux");
const reduxThunk = require("redux-thunk").default;

const App = require("./components/App");
const Reducers = require("./reducers");

const store = createStore(Reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);

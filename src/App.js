import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
const dummyList = [
	{
		id: 1,
		author: "박소연",
		content: "하이1",
		emotion: 5,
		created_date: new Date().getTime(),
	},
	{
		id: 2,
		author: "박소연2",
		content: "하이2",
		emotion: 3,
		created_date: new Date().getTime(),
	},
	{
		id: 3,
		author: "박소연3",
		content: "하이3",
		emotion: 1,
		created_date: new Date().getTime(),
	},
];
function App() {
	return (
		<div>
			<DiaryEditor />
			<DiaryList diaryList={dummyList} />
		</div>
	);
}

export default App;

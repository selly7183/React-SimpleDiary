import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

function App() {
	const [data, setData] = useState([]);

	const dataId = useRef(0);

	const onCreate = (author, content, emotion) => {
		const created_date = new Date().getTime();
		const newItem = {
			author,
			content,
			emotion,
			created_date,
			id: dataId.current,
		};
		dataId.current += 1;
		setData([newItem, ...data]);
	};

	const onRemove = (targetId) => {
		const newDiaryList = data.filter((item) => item.id !== targetId);
		setData(newDiaryList);
	};

	const onEdit = (targetId, newContent) => {
		setData(
			data.map((item) =>
				item.id === targetId ? { ...item, content: newContent } : item
			)
		);
	};

	return (
		<div>
			<DiaryEditor onCreate={onCreate} />
			<DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
		</div>
	);
}

export default App;

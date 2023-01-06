import React from "react";

export default function DiaryItem({ author, content, emotion, created_date }) {
	return (
		<div className="DiaryItem">
			<div className="info">
				<span>
					작성자 : {author} | 감정점수 : {emotion}
				</span>
				<br></br>
				<span className="date">{new Date(created_date).toLocaleString()}</span>
			</div>
			<div className="content">{content}</div>
		</div>
	);
}

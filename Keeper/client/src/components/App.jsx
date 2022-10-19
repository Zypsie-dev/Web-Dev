import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = useState([]);
	const [inputText, setInputText] = useState({
		title: "",
		content: "",
	});
	function deleteItem(id) {
		setNotes((prevValue) => {
			return prevValue.filter((item, index) => {
				return index !== id;
			});
		});
	}
	function clearInput() {
		setInputText({
			title: "",
			content: "",
		});
	}
	return (
		<div>
			<Header />
			<CreateArea
				setInputText={setInputText}
				notes={notes}
				setNotes={setNotes}
				inputText={inputText}
				clearInput={clearInput}
			/>
			{notes.map((note, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={note.title}
						content={note.content}
						deleteItem={deleteItem}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;

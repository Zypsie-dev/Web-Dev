import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
	const [expanded, setExpanded] = useState(false);
	function handleChange(event) {
		const { name, value } = event.target;
		props.setInputText((prevValue) => {
			return { ...prevValue, [name]: value };
		});
	}
	function handleExpand() {
		setExpanded(true);
	}
	function handleClick(event) {
		event.preventDefault();
		props.setNotes((prevValue) => {
			return [...prevValue, props.inputText];
		});
		props.clearInput();
	}
	return (
		<div>
			<form className='create-note'>
				<input
					name='title'
					placeholder={expanded ? "Title" : "Click to type notes"}
					onClick={handleExpand}
					onChange={handleChange}
					value={props.inputText.title}
				/>
				{expanded ? (
					<div>
						<textarea
							name='content'
							placeholder='Take a note...'
							rows={expanded ? "3" : "1"}
							onChange={handleChange}
							value={props.inputText.content}
						/>
						<Zoom in={true}>
							<Fab color='primary' onClick={handleClick}>
								<AddCircleIcon />
							</Fab>
						</Zoom>
					</div>
				) : null}
			</form>
		</div>
	);
}

export default CreateArea;

import { useState } from "react"

const AddBoard = ({ handleAddBoardOpen, handleAddBoardSubmit }) => {
	const [formActive, setFormActive] = useState(false)
	const [title, setTitle] = useState("")
	const [category, setCategory] = useState("")
	const [image, setImage] = useState("")
	const [author, setAuthor] = useState("")

	const handleSubmitPress = (e) => {
        e.preventDefault()
        handleAddBoardSubmit()
        if (title && category && image) {
            console.log({
                title,
                category,
                image,
                author,
            })
            // send to backend
            setFormActive(false)
        } else {
            return
        }
	}
	return (
		<div className="boards-list--add-board">
			<div
				className="btn boards-list--add-board-open-btn"
				onClick={() => setFormActive(true)}
			>
				Add Board
			</div>
			<form
				className={`boards-list--add-board-form${
					formActive ? " form-active" : " hidden"
				}`}
			>
				<input
					className="text-input boards-list--add-board-form-title"
					type="text"
					placeholder="Title (required)"
					name="title"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					required
				/>
				{/* <label htmlFor="category">Select a category: </label> */}
				<select
					name="category"
					className="text-input"
					onChange={(e) => setCategory(e.target.value)}
					value={category}
					required
				>
					<option value="">Category (required)</option>
					<option value="recent">Recent</option>
					<option value="celebration">Celebration</option>
					<option value="thanks">Thank You</option>
					<option value="inspiration">Inspiration</option>
				</select>
				<input
					className="text-input boards-list--add-board-form-image"
					type="text"
					placeholder="Image Url (required)"
					name="image"
					onChange={(e) => setImage(e.target.value)}
					value={image}
					required
				/>
				<input
					className="text-input boards-list--add-board-form-author"
					type="text"
					placeholder="Author"
					onChange={(e) => setAuthor(e.target.value)}
					value={author}
					name="author"
				/>
				<input
                    type='button'
                    value={'Submit'}
                    disabled={!title || !category || !image}
					className="btn boards-list--add-board-submit-btn"
					onClick={handleSubmitPress}
				/>
			</form>
		</div>
	)
}

export default AddBoard

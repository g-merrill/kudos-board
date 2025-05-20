import { useState } from "react"

const AddCard = ({ handleAddCardSubmit }) => {
	const [formActive, setFormActive] = useState(false)
	const [message, setMessage] = useState("")
	const [gif, setGif] = useState("")
	const [author, setAuthor] = useState("")

	const handleSubmitPress = async (e) => {
        e.preventDefault()
        if (message && gif) {
            await handleAddCardSubmit({
                message,
                gif,
                author,
            })
            setFormActive(false)
            setMessage('')
            setGif('')
            setAuthor('')
        } else {
            return
        }
	}
	return (
		<div className="boards-list--add-board">
			<div
				className="btn boards-list--add-board-open-btn"
				onClick={() => setFormActive(!formActive)}
			>
				Add Card
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
					name="message"
					onChange={(e) => setMessage(e.target.value)}
					value={message}
					required
				/>
				<input
					className="text-input boards-list--add-board-form-image"
					type="text"
					placeholder="Gif from giphy.com (required)"
					name="gif"
					onChange={(e) => setGif(e.target.value)}
					value={gif}
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
                    disabled={!message || !gif || !gif.includes('giphy.com')}
					className="btn boards-list--add-board-submit-btn"
					onClick={handleSubmitPress}
				/>
			</form>
		</div>
	)
}

export default AddCard

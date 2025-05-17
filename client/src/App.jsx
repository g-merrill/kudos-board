import { useState, useEffect } from "react"
import "./App.css"

function App() {
	const [boards, setBoards] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("http://localhost:3000/boards")
			const boardsData = await res.json()
			setBoards([...boardsData])
		}

		fetchData()
	}, [])

	const handleSearchSubmit = () => {
		console.log("handleSearchSubmit clicked")
	}

	const handleSearchClear = () => {
		console.log("handleSearchClear clicked")
	}

	const handleFilterSelect = (selectedFilter) => {
		console.log("handleFilterSelect clicked for " + selectedFilter)
	}

	const handleBoardSelect = (board_id) => {
		console.log("handleBoardSelect clicked for board " + board_id)
	}

	const handleDeleteBoard = (board_id) => {
		console.log("handleDeleteBoard clicked for board " + board_id)
	}

	const handleAddBoardOpen = () => {
		console.log("handleAddBoardOpen clicked")
	}

	const handleAddBoardSubmit = () => {
		console.log("handleAddBoardSubmit clicked")
	}

	return (
		<>
			<header className="header">KUDOS BOARDS</header>
			<section className="banner">
				<div className="searchbar">
					<input
						type="text"
						className="searchbar--input"
						placeholder="Search kudos boards..."
					/>
					<div className="searchbar--submit-btn" onClick={handleSearchSubmit}>
						Search
					</div>
					<div className="searchbar--clear-btn" onClick={handleSearchClear}>
						Clear
					</div>
				</div>
				<div className="filters">
					<div
						className="filters--btn"
						onClick={() => handleFilterSelect("all")}
					>
						All
					</div>
					<div
						className="filters--btn"
						onClick={() => handleFilterSelect("recent")}
					>
						Recent
					</div>
					<div
						className="filters--btn"
						onClick={() => handleFilterSelect("celebration")}
					>
						Celebration
					</div>
					<div
						className="filters--btn"
						onClick={() => handleFilterSelect("thanks")}
					>
						Thank you
					</div>
					<div
						className="filters--btn"
						onClick={() => handleFilterSelect("inspiration")}
					>
						Inspiration
					</div>
				</div>
			</section>
			<section className="boards-list">
				{boards.map((board) => (
					<div className="boards-list--card" key={board.id}>
						<div
							className="boards-list--card-main"
							onClick={() => handleBoardSelect(board.id)}
						>
							<img className="boards-list--board-img" src={board.image} />
							<p className="boards-list--board-title">{board.title}</p>
							<p className="boards-list--board-author">
								Created by: {board.author}
							</p>
						</div>
						<div className="boards-list--card-footer">
							<div
								onClick={() => handleDeleteBoard(board.id)}
								className="boards-list--delete-board"
							>
								Delete Board
							</div>
						</div>
					</div>
				))}
				<div className="boards-list--add-board">
					<div
						className="boards-list--add-board-btn"
						onClick={handleAddBoardOpen}
					>
						Add Board
					</div>
					<div className="boards-list--add-board-form">
						<input
							className="boards-list--add-board-form-title"
							type="text"
							placeholder="Title"
						/>
						<input
							className="boards-list--add-board-form-category"
							type="text"
							placeholder="Category"
						/>
						<input
							className="boards-list--add-board-form-image"
							type="text"
							placeholder="Image"
						/>
						<input
							className="boards-list--add-board-form-author"
							type="text"
							placeholder="Author"
						/>
						<div onClick={handleAddBoardSubmit}>Submit</div>
					</div>
				</div>
			</section>
			<footer className="footer">© Kudos Boards 2025</footer>
		</>
	)
}

export default App

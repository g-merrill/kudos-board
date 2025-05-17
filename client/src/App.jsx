import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { useEffect } from "react"

function App() {
	const [count, setCount] = useState(0)
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("http://localhost:3000/boards")
			const data = await res.json()
			console.log(data)
		}

		fetchData()
	}, [])

  const handleSearchSubmit = () => {
    console.log('handleSearchSubmit clicked')
  }

  const handleSearchClear = () => {
    console.log('handleSearchClear clicked')
  }

  const handleDeleteBoard = () => {
    console.log('handleDeleteBoard clicked')
  }

  const handleAddBoard = () => {
    console.log('handleAddBoard clicked')
  }

	return (
		<>
			<header className="header">Header</header>
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
			</section>
			<section className="boards-list">
				<div className="boards-list--card">
					<div className="boards-list--card-main"></div>
					<div className="boards-list--card-footer">
						<div
							onClick={handleDeleteBoard}
							className="boards-list--delete-board"
						>
							Delete Board
						</div>
					</div>
				</div>
				<div className="boards-list--card">
					<div className="boards-list--card-main"></div>
					<div className="boards-list--card-footer">
						<div
							onClick={handleDeleteBoard}
							className="boards-list--delete-board"
						>
							Delete Board
						</div>
					</div>
				</div>
				<div className="boards-list--add-board">
					<div className="boards-list--add-board-btn" onClick={handleAddBoard}>
						Add Board
					</div>
				</div>
			</section>
			<footer className="footer">Footer</footer>
		</>
	)
}

export default App

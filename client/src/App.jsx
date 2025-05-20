import { useState, useEffect } from "react"
import "./App.css"
import Header from "./Header"
import Banner from "./Banner"
import BoardsList from "./BoardsList"
import Footer from "./Footer"

function App() {
	const [boards, setBoards] = useState([])
	const [filterActive, setFilterActive] = useState("all")

	const fetchFreshData = async () => {
		const res = await fetch(`${import.meta.env.VITE_DB_URL}/boards`)
		const boardsData = await res.json()
		setBoards([...boardsData])
	}

	useEffect(() => {
		fetchFreshData()
	}, [])

	const handleSearchSubmit = (term) => {
		const searchedBoards = boards.filter(board => board.title.includes(term))
		setBoards(searchedBoards)
	}

	const handleSearchClear = (term) => {
		fetchFreshData()
	}

	const handleFilterSelect = async (selectedFilter) => {
		await fetchFreshData()
		setFilterActive(selectedFilter)
		if (selectedFilter === 'all') {
			return
		}
		const filteredBoards = boards.filter(board => board.category === selectedFilter)
		setBoards(filteredBoards)
	}

	const handleBoardSelect = (board_id) => {
		console.log("handleBoardSelect clicked for board " + board_id)
	}

	const handleDeleteBoard = async (board_id) => {
		await fetch(`${import.meta.env.VITE_DB_URL}/boards/${board_id}`, {
			method: "DELETE",
		})
		console.log("handleDeleteBoard clicked for board " + board_id)
		fetchFreshData()
	}

	const handleAddBoardSubmit = async ({ title, category, image, author }) => {
		const res = await fetch(`${import.meta.env.VITE_DB_URL}/boards`, {
			method: "POST",
			body: JSON.stringify({ title, category, image, author }),
			headers: {
				"Content-Type": "application/json",
			},
		})
		const data = await res.json()
		console.log(data);
		fetchFreshData()
	}

	return (
		<>
			<Header />
			<Banner
				handleSearchSubmit={handleSearchSubmit}
				handleSearchClear={handleSearchClear}
				handleFilterSelect={handleFilterSelect}
				filterActive={filterActive}
			/>
			<BoardsList
				boards={boards}
				handleBoardSelect={handleBoardSelect}
				handleDeleteBoard={handleDeleteBoard}
				handleAddBoardSubmit={handleAddBoardSubmit}
			/>
			<Footer />
		</>
	)
}

export default App

import { useState, useEffect } from "react"
import "./App.css"
import Header from "./Header"
import Banner from "./Banner"
import BoardsList from "./BoardsList"
import Footer from "./Footer"

function App() {
	const [boards, setBoards] = useState([])
	const [filterActive, setFilterActive] = useState('all')

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

	const handleFilterSelect = (selectedFilter) => {
		console.log("handleFilterSelect clicked for " + selectedFilter)
		// filter boards for new filter
		setFilterActive(selectedFilter)
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
			<Header />
			<Banner
				handleSearchSubmit={handleSearchSubmit}
				handleFilterSelect={handleFilterSelect}
				filterActive={filterActive}
			/>
			<BoardsList
				boards={boards}
				handleBoardSelect={handleBoardSelect}
				handleDeleteBoard={handleDeleteBoard}
				handleAddBoardOpen={handleAddBoardOpen}
				handleAddBoardSubmit={handleAddBoardSubmit}
			/>
			<Footer />
		</>
	)
}

export default App

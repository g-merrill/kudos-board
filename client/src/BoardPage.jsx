import { useState, useEffect } from "react"
import "./App.css"
import Header from "./Header"
import Banner from "./Banner"
import CardsList from "./CardsList"
import Footer from "./Footer"
import { Link, useParams } from "react-router"

const CATEGORIES = {
	'thanks': 'Thank You',
	'celebration': 'Celebration',
	'recent': 'Recent',
	'inspiration': 'Inspiration',
}

const BoardPage = () => {
	const params = useParams()
	const boardId = parseInt(params.id)

	const [board, setBoard] = useState({})
	const [cards, setCards] = useState([])
	const [filterActive, setFilterActive] = useState("all")

	const fetchFreshData = async () => {
		const rawBoard = await fetch(`${import.meta.env.VITE_DB_URL}/boards/${boardId}`)
		const boardData = await rawBoard.json()
		setBoard({ ...boardData })
		const rawCards = await fetch(`${import.meta.env.VITE_DB_URL}/cards`)
		const allCardsData = await rawCards.json()
		const cards = allCardsData.filter((card) => card.boardId === boardId)
		setCards([...cards])
	}

	useEffect(() => {
		fetchFreshData()
	}, [])

	const handleDeleteCard = async (card_id) => {
		await fetch(`${import.meta.env.VITE_DB_URL}/cards/${card_id}`, {
			method: "DELETE",
		})
		fetchFreshData()
	}

	const handleAddCardSubmit = async ({ message, gif, author }) => {
		await fetch(`${import.meta.env.VITE_DB_URL}/cards`, {
			method: "POST",
			body: JSON.stringify({ message, boardId, gif, author }),
			headers: {
				"Content-Type": "application/json",
			},
		})
		fetchFreshData()
	}

	const upvoteCard = async (cardId, upvotes) => {
		await fetch(`${import.meta.env.VITE_DB_URL}/cards/${cardId}`, {
			method: "PUT",
			body: JSON.stringify({ upvotes }),
			headers: {
				"Content-Type": "application/json",
			},
		})
		fetchFreshData()
	}

	return (
		<>
			<Header />
			<Link to={"/"} className="btn back-to-home-btn">
				Back to Home
			</Link>
			<h3>Selected Kudos Board:</h3>
			<div className="boards-list--card">
				<div
					className="boards-list--card-main"
				>
					<img className="boards-list--board-img" src={board?.image} />
					<p className="boards-list--board-title">{board?.title}</p>
					<p className="boards-list--board-title">
						Category: {CATEGORIES[board?.category]}
					</p>
					<p className="boards-list--board-author">
						Created by: {board?.author}
					</p>
				</div>
			</div>
			<CardsList
				cards={cards}
				handleDeleteCard={handleDeleteCard}
				handleAddCardSubmit={handleAddCardSubmit}
				upvoteCard={upvoteCard}
			/>
			<Footer />
		</>
	)
}

export default BoardPage

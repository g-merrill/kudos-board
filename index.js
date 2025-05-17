const cors = require("cors")
const express = require("express")
require("dotenv").config()

const app = express()

// Enable CORS for all routes
app.use(cors())
app.use(express.json())

const { PrismaClient } = require("./generated/prisma")
const prisma = new PrismaClient()
// // use `prisma` in your application to read and write data in your DB

let cards = [
	{
		id: 1,
		board_id: 1,
		message: "Card 1",
		author: "Me",
		upvoted: true,
		gif: "https://giphy.com/gifs/thepmc-dg0hVakNxI0LaIQDQm",
	},
	{
		id: 2,
		board_id: 2,
		message: "Card 2",
		author: "Me",
		upvoted: false,
		gif: "https://giphy.com/gifs/thepmc-dg0hVakNxI0LaIQDQm",
	},
	{
		id: 3,
		board_id: 2,
		message: "Card 3",
		author: "You",
		upvoted: true,
		gif: "https://giphy.com/gifs/thepmc-dg0hVakNxI0LaIQDQm",
	},
]

let boards = [
	{
		id: 1,
		title: "Finish coding assignment",
		category: "celebration",
		image: "https://picsum.photos/200/300",
		author: "Me",
	},
	{
		id: 2,
		title: "Read a chapter of a book",
		category: "inspiration",
		image: "https://picsum.photos/200/300",
		author: "You",
	},
]

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})

app.get("/", (req, res) => {
	res.send(`
    <html>
      <head>
        <title>Adopt-a-Pet</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <p>Welcome to my server.</p>
      </body>
    </html>
  `)
})

// CREATE
app.post("/boards", async (req, res) => {
	const { title, category, image, author = "No author" } = req.body

	const newBoard = {
		id: boards.length + 1,
		title,
		category,
		image,
		author,
	}

  // post to db
  // await prisma.board.create({
	// 	data: newBoard,
	// })

	boards.push(newBoard)
	res.status(201).json(newBoard)
})

// READ ALL
app.get("/boards", (req, res) => {
	res.json(boards)
})

// READ ONE
app.get("/boards/:boardId", (req, res) => {
	const boardId = parseInt(req.params.boardId)
	const board = boards.find((board) => board.id === boardId)

	if (board) {
		res.json(board)
	} else {
		res.status(404).send("Board not found")
	}
})

// UPDATE
app.put("/boards/:boardId", (req, res) => {
	const { boardId } = req.params
	const boardIndex = boards.findIndex((board) => board.id === parseInt(boardId))

	if (boardIndex !== -1) {
		const updatedBoardInfo = req.body
		boards[boardIndex] = { ...boards[boardIndex], ...updatedBoardInfo }
		res.json(boards[boardIndex])
	} else {
		res.status(404).send("Board not found")
	}
})

// DELETE
app.delete("/boards/:boardId", (req, res) => {
	const { boardId } = req.params
	const initialLength = boards.length
	boards = boards.filter((board) => board.id !== parseInt(boardId))

	if (boards.length < initialLength) {
		res.status(204).send()
	} else {
		res.status(404).send("Board not found")
	}
})

// CREATE
app.post("/cards", async (req, res) => {
	const { message, board_id, author = "No author", upvoted, gif } = req.body

	const newCard = {
		id: cards.length + 1,
		message,
		board_id,
		author,
		upvoted,
		gif,
	}

  // post to db
  // await prisma.card.create({
	// 	data: newCard,
	// })

	cards.push(newCard)
	res.status(201).json(newCard)
})

// READ ALL
app.get("/cards", (req, res) => {
	res.json(cards)
})

// READ ONE
app.get("/cards/:cardId", (req, res) => {
	const cardId = parseInt(req.params.cardId)
	const card = cards.find((card) => card.id === cardId)

	if (card) {
		res.json(card)
	} else {
		res.status(404).send("Card not found")
	}
})

// UPDATE
app.put("/cards/:cardId", (req, res) => {
	const { cardId } = req.params
	const cardIndex = cards.findIndex((card) => card.id === parseInt(cardId))

	if (cardIndex !== -1) {
		const updatedCardInfo = req.body
		cards[cardIndex] = { ...cards[cardIndex], ...updatedCardInfo }
		res.json(cards[cardIndex])
	} else {
		res.status(404).send("Card not found")
	}
})

// DELETE
app.delete("/cards/:cardId", (req, res) => {
	const { cardId } = req.params
	const initialLength = cards.length
	cards = cards.filter((card) => card.id !== parseInt(cardId))

	if (cards.length < initialLength) {
		res.status(204).send()
	} else {
		res.status(404).send("Card not found")
	}
})

// const createAlice = async () => {
// 	// run inside `async` function

// 	console.log(newUser)
// }

// const findUsers = async () => {
// 	const users = await prisma.user.findMany()
// 	return users
// }

// const runAllFuncs = async () => {
// 	await createAlice()
// 	const result = await findUsers()
//     console.log(result)
// }

// runAllFuncs()

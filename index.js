const cors = require("cors")
const express = require("express")
require("dotenv").config()
const { PrismaClient } = require("./generated/prisma")

const app = express()
// // use `prisma` in your application to read and write data in your DB
const prisma = new PrismaClient()

// Enable CORS for all routes
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})

app.get("/", (req, res) => {
	res.status(404).send("Page not found")
})

// CREATE
app.post("/boards", async (req, res) => {
	console.log(req.body)
	let { title, category, image, author } = req.body

	if (!author) {
		author = "Unknown"
	}
	// post to db
	const board = await prisma.board.create({
		data: {
			title,
			category,
			image,
			author,
		},
	})

	res.status(201).json(board)
})

// READ ALL
app.get("/boards", async (req, res) => {
	const boards = await prisma.board.findMany()
	res.json(boards)
})

// READ ONE
app.get("/boards/:boardId", async (req, res) => {
	const board = await prisma.board.findUnique({
		where: {
			id: parseInt(req.params.boardId),
		},
	})

	if (board) {
		res.json(board)
	} else {
		res.status(404).send("Board not found")
	}
})

// UPDATE
app.put("/boards/:boardId", async (req, res) => {
	const board = await prisma.board.update({
		where: {
			id: parseInt(req.params.boardId),
		},
		data: {
			...req.body,
		},
	})

	if (board) {
		res.json(board)
	} else {
		res.status(422).send("Board not updated")
	}
})

// DELETE
app.delete("/boards/:boardId", async (req, res) => {
	const boardId = parseInt(req.params.boardId)
	const deleteCards = prisma.card.deleteMany({
		where: {
			boardId,
		},
	})

	const deleteBoard = prisma.board.delete({
		where: {
			id: boardId,
		},
	})

	const transaction = await prisma.$transaction([deleteCards, deleteBoard])

	if (transaction) {
		res.json(transaction)
	} else {
		res.status(422).send("Board not deleted")
	}
})

// CREATE
app.post("/cards", async (req, res) => {
	let { message, boardId, gif, author } = req.body

	if (!author) {
		author = "Unknown"
	}
	// post to db
	const card = await prisma.card.create({
		data: {
			message,
			boardId,
			author,
			gif,
		},
	})

	res.status(201).json(card)
})

// READ ALL
app.get("/cards", async (req, res) => {
	const cards = await prisma.card.findMany()
	res.json(cards)
})

// READ ONE
app.get("/cards/:cardId", async (req, res) => {
	const card = await prisma.card.findUnique({
		where: {
			id: parseInt(req.params.cardId),
		},
	})

	if (card) {
		res.json(card)
	} else {
		res.status(404).send("Card not found")
	}
})

// UPDATE
app.put("/cards/:cardId", async (req, res) => {
	const card = await prisma.card.update({
		where: {
			id: parseInt(req.params.cardId),
		},
		data: {
			...req.body,
		},
	})

	if (card) {
		res.json(card)
	} else {
		res.status(422).send("Card not updated")
	}
})

// DELETE
app.delete("/cards/:cardId", async (req, res) => {
	const card = await prisma.card.delete({
		where: {
			id: parseInt(req.params.cardId),
		},
	})

	if (card) {
		res.json(card)
	} else {
		res.status(422).send("Card not deleted")
	}
})

const findBoards = async () => {
	const boards = await prisma.board.findMany()
	return boards
}

const findCards = async () => {
	const cards = await prisma.card.findMany()
	return cards
}

const logExistingData = async () => {
	const boards = await findBoards()
	console.log("Boards:")
	console.log(boards)
	const cards = await findCards()
	console.log("Cards:")
	console.log(cards)
}

logExistingData()

// const clearExistingData = async () => {
// 	await prisma.card.deleteMany()
// 	await prisma.board.deleteMany()
// }
// clearExistingData()

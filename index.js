const cors = require('cors')
const express = require("express")
require("dotenv").config()

const app = express()

// Enable CORS for all routes
app.use(cors())
app.use(express.json())

let tasks = [
  { id: 1, description: "Finish coding assignment", completed: false },
  { id: 2, description: "Read a chapter of a book", completed: true }
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
app.post('/tasks', (req, res) => {
	const { description, completed } = req.body

	const newTask = {
    	id: tasks.length + 1,
    	description,
    	completed
	}

	tasks.push(newTask)
	res.status(201).json(newTask)
})

// READ ALL
app.get('/tasks', (req, res) => {
	res.json(tasks)
})

// READ ONE
app.get('/tasks/:taskId', (req, res) => {
	const taskId = parseInt(req.params.taskId)
	const task = tasks.find(task => task.id === taskId)

	if (task) {
    	res.json(task)
	} else {
    	res.status(404).send('Task not found')
	}
})

// UPDATE
app.put('/tasks/:taskId', (req, res) => {
  const { taskId } = req.params
  const taskIndex = tasks.findIndex(task => task.id === parseInt(taskId))

  if (taskIndex !== -1) {
    const updatedTaskInfo = req.body
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTaskInfo }
    res.json(tasks[taskIndex])
  } else {
    res.status(404).send('Task not found')
  }
})

// DELETE

// const { PrismaClient } = require("./generated/prisma")

// const prisma = new PrismaClient()
// // use `prisma` in your application to read and write data in your DB

// const createAlice = async () => {
// 	// run inside `async` function
// 	const newUser = await prisma.user.create({
// 		data: {
// 			name: "Alice",
// 			email: `alice@prisma.io+${Date.now()}`,
// 		},
// 	})
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

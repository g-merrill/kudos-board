const { PrismaClient } = require("./generated/prisma")

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

const createAlice = async () => {
	// run inside `async` function
	const newUser = await prisma.user.create({
		data: {
			name: "Alice",
			email: `alice@prisma.io+${Date.now()}`,
		},
	})
	console.log(newUser)
}

const findUsers = async () => {
	const users = await prisma.user.findMany()
	return users
}

const runAllFuncs = async () => {
	await createAlice()
	const result = await findUsers()
    console.log(result)
}

runAllFuncs()

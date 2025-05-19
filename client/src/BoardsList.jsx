import AddBoard from "./AddBoard"
import BoardCard from "./BoardCard"

const BoardsList = ({
	boards,
	handleBoardSelect,
	handleDeleteBoard,
	handleAddBoardOpen,
	handleAddBoardSubmit,
}) => {
	return (
		<section className="boards-list">
			{boards.map((board) => (
				<BoardCard
                    key={board.id}
					board={board}
					handleBoardSelect={handleBoardSelect}
					handleDeleteBoard={handleDeleteBoard}
				/>
			))}
			<AddBoard
				handleAddBoardOpen={handleAddBoardOpen}
				handleAddBoardSubmit={handleAddBoardSubmit}
			/>
		</section>
	)
}

export default BoardsList

import AddBoard from "./AddBoard"
import BoardTile from "./BoardTile"

const BoardsList = ({
	boards,
	handleBoardSelect,
	handleDeleteBoard,
	handleAddBoardSubmit,
}) => {
	return (
		<section className="boards-list">
			{boards.map((board) => (
				<BoardTile
                    key={board.id}
					board={board}
					handleBoardSelect={handleBoardSelect}
					handleDeleteBoard={handleDeleteBoard}
				/>
			))}
			<AddBoard
				handleAddBoardSubmit={handleAddBoardSubmit}
			/>
		</section>
	)
}

export default BoardsList

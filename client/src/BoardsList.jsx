import AddBoard from "./AddBoard"
import BoardTile from "./BoardTile"

const BoardsList = ({
	boards,
	handleDeleteBoard,
	handleAddBoardSubmit,
}) => {
	return (
		<section className="boards-list">
			{boards.map((board) => (
				<BoardTile
                    key={board.id}
					board={board}
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

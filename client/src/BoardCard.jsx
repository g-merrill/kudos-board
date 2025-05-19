const BoardCard = ({ board, handleBoardSelect, handleDeleteBoard }) => {
	return (
		<div className="boards-list--card">
			<div
				className="boards-list--card-main"
				onClick={() => handleBoardSelect(board.id)}
			>
				<img className="boards-list--board-img" src={board.image} />
				<p className="boards-list--board-title">{board.title}</p>
				<p className="boards-list--board-author">Created by: {board.author}</p>
			</div>
			<div className="boards-list--card-footer">
				<div
					onClick={() => handleDeleteBoard(board.id)}
					className="btn boards-list--delete-board-btn"
				>
					Delete Board
				</div>
			</div>
		</div>
	)
}

export default BoardCard

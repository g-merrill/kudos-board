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
				<div className="boards-list--card" key={board.id}>
					<div
						className="boards-list--card-main"
						onClick={() => handleBoardSelect(board.id)}
					>
						<img className="boards-list--board-img" src={board.image} />
						<p className="boards-list--board-title">{board.title}</p>
						<p className="boards-list--board-author">
							Created by: {board.author}
						</p>
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
			))}
			<div className="boards-list--add-board">
				<div
					className="btn boards-list--add-board-open-btn"
					onClick={handleAddBoardOpen}
				>
					Add Board
				</div>
				<div className="boards-list--add-board-form">
					<input
						className="text-input boards-list--add-board-form-title"
						type="text"
						placeholder="Title"
					/>
					<input
						className="text-input boards-list--add-board-form-category"
						type="text"
						placeholder="Category"
					/>
					<input
						className="text-input boards-list--add-board-form-image"
						type="text"
						placeholder="Image"
					/>
					<input
						className="text-input boards-list--add-board-form-author"
						type="text"
						placeholder="Author"
					/>
					<div
						onClick={handleAddBoardSubmit}
						className="btn boards-list--add-board-submit-btn"
					>
						Submit
					</div>
				</div>
			</div>
		</section>
	)
}

export default BoardsList

import { Link } from "react-router"

const CATEGORIES = {
	thanks: "Thank You",
	celebration: "Celebration",
	recent: "Recent",
	inspiration: "Inspiration",
}

const BoardTile = ({ board, handleDeleteBoard }) => {
	return (
		<div className="boards-list--card">
			<Link to={`/boards/${board.id}`}>
				<div className="boards-list--card-main">
					<img className="boards-list--board-img" src={board.image} />
					<p className="boards-list--board-title">{board.title}</p>
					<p className="boards-list--board-title">
						Category: {CATEGORIES[board.category]}
					</p>
					<p className="boards-list--board-author">
						Created by: {board.author}
					</p>
				</div>
			</Link>
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

export default BoardTile

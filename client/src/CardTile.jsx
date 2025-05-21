const CardTile = ({ card, handleDeleteCard, upvoteCard }) => {
	return (
		<div className="boards-list--card">
			<div className="boards-list--card-main">
				<img className="boards-list--board-img" src={card.gif} />
				<p className="boards-list--board-title">{card.message}</p>
				<div className="boards-list--board-upvote-ctnr">
					<div
						onClick={() => upvoteCard(card.id, card.upvotes + 1)}
						className="btn boards-list--board-upvote"
					>
						👍
					</div>
					<p className="boards-list--board-upvotes">
						Total Upvotes: {card.upvotes}
					</p>
				</div>
				<p className="boards-list--board-author">Created by: {card.author}</p>
			</div>
			<div className="boards-list--card-footer">
				<div
					onClick={() => handleDeleteCard(card.id)}
					className="btn boards-list--delete-board-btn"
				>
					Delete Card
				</div>
			</div>
		</div>
	)
}

export default CardTile

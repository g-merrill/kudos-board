import AddCard from "./AddCard"
import CardTile from "./CardTile"

const CardsList = ({
	cards,
	handleCardSelect,
	handleDeleteCard,
	handleAddCardSubmit,
	upvoteCard
}) => {
	return (
		<section className="cards-list">
			{cards.map((card) => (
				<CardTile
                    key={card.id}
					card={card}
					handleCardSelect={handleCardSelect}
					handleDeleteCard={handleDeleteCard}
					upvoteCard={upvoteCard}
				/>
			))}
			<AddCard
				handleAddCardSubmit={handleAddCardSubmit}
			/>
		</section>
	)
}

export default CardsList

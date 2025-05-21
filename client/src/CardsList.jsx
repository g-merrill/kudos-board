import AddCard from "./AddCard"
import CardTile from "./CardTile"

const CardsList = ({
	cards,
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

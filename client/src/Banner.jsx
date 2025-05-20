import { useState } from "react"

const Banner = ({
	handleSearchSubmit,
    handleSearchClear,
	handleFilterSelect,
    filterActive
}) => {
	const [searchTerm, setSearchTerm] = useState("")

	const handleSearch = (e) => setSearchTerm(e.target.value)

    const handleClear = () => {
        handleSearchClear('')
        setSearchTerm('')
    }

	return (
		<section className="banner">
			<div className="searchbar">
				<input
					value={searchTerm}
					onChange={handleSearch}
					type="text"
					className="text-input searchbar--input"
					placeholder="Search for a kudos board..."
				/>
				<div className="btn searchbar--submit-btn" onClick={() => handleSearchSubmit(searchTerm)}>
					Search
				</div>
				<div className="btn searchbar--clear-btn" onClick={handleClear}>
					Clear
				</div>
			</div>
			<div className="filters">
				<div
					className={`btn filters--btn${filterActive === 'all' ? ' filters--btn-active' : ''}`}
					onClick={() => handleFilterSelect("all")}
				>
					All
				</div>
				<div
					className={`btn filters--btn${filterActive === 'recent' ? ' filters--btn-active' : ''}`}
					onClick={() => handleFilterSelect("recent")}
				>
					Recent
				</div>
				<div
					className={`btn filters--btn${filterActive === 'celebration' ? ' filters--btn-active' : ''}`}
					onClick={() => handleFilterSelect("celebration")}
				>
					Celebration
				</div>
				<div
					className={`btn filters--btn${filterActive === 'thanks' ? ' filters--btn-active' : ''}`}
					onClick={() => handleFilterSelect("thanks")}
				>
					Thank you
				</div>
				<div
					className={`btn filters--btn${filterActive === 'inspiration' ? ' filters--btn-active' : ''}`}
					onClick={() => handleFilterSelect("inspiration")}
				>
					Inspiration
				</div>
			</div>
		</section>
	)
}

export default Banner

import { Restaurant } from '../api'

interface Props {
  restaurant: Restaurant
  onRatingChange: (id: string, rating: number) => void
}

export const RestaurantCard = ({
  restaurant,
  onRatingChange,
}: Props) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-card__image"
        src={restaurant.url}
        alt={restaurant.name}
      />

      <div className="restaurant-card__content">
        <h3>{restaurant.name}</h3>

        <p>
          {restaurant.description}, {restaurant.raiting.toFixed(1)} stars
        </p>

        <div className="restaurant-card__stars">
          {stars.map((star) => {
            const filled = star <= Math.round(restaurant.raiting)

            return (
              <span
                key={star}
                className={`star ${filled ? 'star--filled' : ''}`}
                onClick={() =>
                  onRatingChange(restaurant.id, star)
                }
              >
                ★
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
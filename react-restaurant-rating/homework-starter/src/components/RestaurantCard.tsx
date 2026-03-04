import { Restaurant } from "../api";

interface Props {
  restaurant: Restaurant;
}

export const RestaurantCard = ({ restaurant }: Props) => {
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
      </div>
    </div>
  );
};

import { RestaurantCard } from "../components/RestaurantCard";
import { SearchInput } from "../components/SearchInput";

export const RestaurantsPage = () => {
  const mockRestaurants = [
    {
      id: "1",
      name: "Mama's Kitchen",
      description: "American, 4.7 stars",
      raiting: 4,
      url: "/mamas-kitchen.png",
    },
  ];

  return (
    <div>
      <SearchInput value="" onChange={() => {}} />

      <div className="restaurants-grid">
        {mockRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
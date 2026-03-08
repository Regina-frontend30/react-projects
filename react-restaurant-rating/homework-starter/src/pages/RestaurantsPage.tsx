import { useEffect, useState } from 'react'
import {
  getRestaurants,
  updateRestaurantRating,
  Restaurant,
} from '../api'
import { RestaurantCard } from '../components/RestaurantCard'
import { SearchInput } from '../components/SearchInput'

export const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getRestaurants()
      .then((data) => setRestaurants(data))
      .finally(() => setLoading(false))
  }, [])

  const handleRatingChange = (
    id: Restaurant['id'],
    raiting: Restaurant['raiting']
  ) => {
    updateRestaurantRating({ id, raiting }).then((updated) => {
      setRestaurants((prev) =>
        prev.map((r) => (r.id === id ? updated : r))
      )
    })
  }

  const filtered = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <div>Загрузка...</div>

  return (
    <div>
      <SearchInput value={search} onChange={setSearch} />

      <div className="restaurants-grid">
        {filtered.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onRatingChange={handleRatingChange}
          />
        ))}
      </div>
    </div>
  )
}
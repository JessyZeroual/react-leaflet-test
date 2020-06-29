export const getCities = () => {
  return fetch(`/cities.json`)
    .then((res) => res.json())
    .then((data) =>
      data.map((city) => ({
        ...city,
        growth_from_2000_to_2013: Number(
          city.growth_from_2000_to_2013.replace("%", "")
        ),
        population: Number(city.population),
        rank: Number(city.rank),
      }))
    );
};

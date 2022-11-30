export function sortByName(data) {
  return data.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    return 0;
  });
}

export function sortByPrice(data) {
  return data.sort((a, b) => a.preco - b.preco);
}

export function searchByPrice(data, minPrice, maxPrice) {
  return data.filter(
    (item) => item.preco >= minPrice && item.preco <= maxPrice,
  );
}

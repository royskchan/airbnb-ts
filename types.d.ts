interface ExploreData {
  img: string;
  location: string;
  distance: string;
}

interface CardData {
  img: string;
  title: string;
}

export interface SearchResult {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

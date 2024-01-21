export interface detailTypePopular {
  categories: Category[]
  popular: Popular[]
  settings: Settings
}

export interface Category {
  items: Item[]
  slug: string
  name: string
  displayType: string
  displayImage: any
  itemsCount: number
}

export interface Item {
  slug: string
  name: string
  imageUrl: string
  popularity: number
  rating: Rating
  updatedAt: string
}

export interface Rating {
  average: number
  votes: number
}

export interface Popular {
  id: number
  item: Item2
  slug: string
  name: string
  imageUrl: string
  rating: Rating3
  popularity: number
  flags: any[]
  updatedAt: string
  price: number
  steamUrl: string
}

export interface Item2 {
  slug: string
  name: string
  imageUrl: string
  category: Category2
  popularity: number
  rating: Rating2
  updatedAt: string
}

export interface Category2 {
  slug: string
  name: string
  displayType: string
  displayImage: any
}

export interface Rating2 {
  average: number
  votes: number
}

export interface Rating3 {
  average: number
  votes: number
}

export interface Settings {}

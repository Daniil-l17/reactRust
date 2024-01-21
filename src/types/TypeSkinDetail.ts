export interface detailSkins {
  skins: Skin[]
  slug: string
  name: string
  imageUrl: string
  category: Category
  info: Info
  popularity: number
  rating: Rating2
  updatedAt: string
  description: any
  article: string
}

export interface Skin {
  id: number
  prices: Price[]
  slug: string
  name: string
  imageUrl: string
  rating: Rating
  popularity: number
  flags: any[]
  updatedAt: string
  price: number
  steamUrl: string
}

export interface Price {
  price: number
  updatedAt: string
  name: string
  url: string
}

export interface Rating {
  average: number
  votes: number
}

export interface Category {
  slug: string
  name: string
  displayType: string
  displayImage: any
}

export interface Info {
  id: number
  details: Details
  statistics: Statistics
  misc: Misc
}

export interface Details {
  loot: Loot[]
  mods: Mod[]
  craft: Craft[]
  damage: Damage[]
  repair: Repair[]
  recycle: Recycle[]
  blueprint: Blueprint2[]
}

export interface Loot {
  chance: string
  amount: string
  condition: string
  container: Container
}

export interface Container {
  name: string
  type: string
  slug: string
  imageUrl: string
  blueprint: boolean
  quantity: any
  category: Category2
}

export interface Category2 {
  name: string
  slug: string
}

export interface Mod {
  damage?: string
  recoil?: string
  aimCone?: string
  aimSway?: string
  velocity?: string
  hipAimCone?: string
  rateOfFire?: string
  modifications: Modifications
}

export interface Modifications {
  type: string
  name: string
  slug: string
  imageUrl: string
  blueprint: boolean
  category: Category3
}

export interface Category3 {
  name: string
  slug: string
}

export interface Craft {
  time: string
  blueprint: Blueprint
  ingredients: Ingredient[]
  workbenchLevel: WorkbenchLevel
}

export interface Blueprint {
  type: string
  name: string
  slug: string
  imageUrl: string
  blueprint: boolean
  category: Category4
}

export interface Category4 {
  name: string
  slug: string
}

export interface Ingredient {
  type: string
  name: string
  slug: string
  imageUrl: string
  blueprint: boolean
  details: any[]
  quantity?: string
  category: Category5
}

export interface Category5 {
  name: string
  slug: string
}

export interface WorkbenchLevel {
  type: string
  name: string
  slug: string
  imageUrl: string
  blueprint: boolean
  details: string[]
  category: Category6
}

export interface Category6 {
  name: string
  slug: string
}

export interface Damage {
  dps: string
  damage: string
  aimCone: string
  headshot: string
  velocity: string
  tool: Tool
}

export interface Tool {
  type: string
  name: string
  slug: string
  imageUrl: string
  blueprint: boolean
  category: Category7
}

export interface Category7 {
  name: string
  slug: string
}

export interface Repair {
  tool: Tool2
  bpRequired: string
  conditionLoss: string
  maxRepairCost: MaxRepairCost[]
}

export interface Tool2 {
  type: string
  name: string
  slug: string
  imageUrl: string
  blueprint: boolean
  category: Category8
}

export interface Category8 {
  name: string
  slug: string
}

export interface MaxRepairCost {
  type: string
  name: string
  slug: string
  imageUrl: string
  blueprint: boolean
  details: any[]
  quantity: string
  category: Category9
}

export interface Category9 {
  name: string
  slug: string
}

export interface Recycle {
  yield: Yield[][]
  recycler: string
}

export interface Yield {
  type: string
  name: string
  slug: string
  imageUrl: string
  blueprint: boolean
  category: Category10
  quantity?: string
}

export interface Category10 {
  name: string
  slug: string
}

export interface Blueprint2 {
  tool: Tool3
  scrapTotal: string
  requirements: Requirement[][]
}

export interface Tool3 {
  type: string
  name: string
  slug: string
  imageUrl: string
  blueprint: boolean
  category: Category11
}

export interface Category11 {
  name: string
  slug: string
}

export interface Requirement {
  type: string
  name: string
  slug: string
  imageUrl: string
  blueprint: boolean
  category: Category12
  quantity?: string
}

export interface Category12 {
  name: string
  slug: string
}

export interface Statistics {
  draw: string
  damage: string
  reload: string
  "aim cone": string
  capacity: string
  "rate of fire": string
}

export interface Misc {
  Identifier: string
  "Stack Size": string
  "Despawn Time": string
}

export interface Rating2 {
  average: number
  votes: number
}

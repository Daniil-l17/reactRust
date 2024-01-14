export interface detail {
  data: Data
  included: Included[]
}

export interface Data {
  type: string
  id: string
  attributes: Attributes
  relationships: Relationships
}

export interface Attributes {
  id: string
  name: string
  address: string
  ip: string
  port: number
  players: number
  maxPlayers: number
  rank: number
  location: number[]
  status: string
  details: Details
  createdAt: string
  updatedAt: string
  portQuery: number
  country: string
  queryStatus: string
}

export interface Details {
  tags: string[]
  official: boolean
  rust_type: string
  map: string
  environment: string
  rust_build: string
  rust_ent_cnt_i: number
  rust_fps: number
  rust_fps_avg: number
  rust_gc_cl: number
  rust_gc_mb: number
  rust_hash: string
  rust_headerimage: string
  rust_mem_pv: any
  rust_mem_ws: any
  pve: boolean
  rust_uptime: number
  rust_url: string
  rust_world_seed: number
  rust_world_size: number
  rust_world_levelurl: string
  rust_maps: RustMaps
  rust_description: string
  rust_modded: boolean
  rust_queued_players: number
  rust_gamemode: string
  rust_born: string
  rust_last_ent_drop: string
  rust_last_seed_change: string
  rust_last_wipe: string
  rust_last_wipe_ent: number
  serverSteamId: string
}

export interface RustMaps {
  seed: number
  size: number
  url: string
  thumbnailUrl: string
  monuments: number
  barren: boolean
  updatedAt: string
  mapUrl: string
}

export interface Relationships {
  game: Game
}

export interface Game {
  data: Data2
}

export interface Data2 {
  type: string
  id: string
}

export interface Included {
  type: string
  id: string
  attributes: Attributes2
  relationships: Relationships2
}

export interface Attributes2 {
  firstTime?: boolean
  start?: string
  stop: any
  name?: string
  timestamp?: string
  eventType?: string
  value?: number
  revision?: number
  position?: number
  createdAt?: string
  approvedAt?: string
  rejectedAt: any
  publishedAt?: string
  public?: boolean
  description?: string
  feedback: any
  descLinks?: DescLink[]
}

export interface DescLink {
  link: string
  name: string
}

export interface Relationships2 {
  player?: Player
  server: Server
  session?: Session
  organization?: Organization
  orgGroup?: OrgGroup
}

export interface Player {
  data: Data3
}

export interface Data3 {
  type: string
  id: string
}

export interface Server {
  data: Data4
}

export interface Data4 {
  type: string
  id: string
}

export interface Session {
  data: Data5
}

export interface Data5 {
  type: string
  id: string
}

export interface Organization {
  data: Data6
}

export interface Data6 {
  type: string
  id: string
}

export interface OrgGroup {
  data: Data7
}

export interface Data7 {
  type: string
  id: string
}

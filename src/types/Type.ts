export interface Root {
  data: Daum[]
  links: Links
  included: any[]
}

export interface Daum {
  type: string
  id: string
  attributes: Attributes
  relationships: Relationships
}

export interface Attributes {
  name: string
  address?: string
  ip: string
  port: number
  players: number
  maxPlayers: number
  rank: number
  location: number[]
  status: string
  details: Details
  country: string
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
  rust_world_levelurl?: string
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
  rust_settings_source?: string
  rust_settings?: RustSettings
  rust_wipes?: RustWipe[]
  rust_next_wipe?: string
  rust_next_wipe_map?: string
  serverSteamId: string
  rust_map_size_ent_count?: string
  rust_next_wipe_bp?: string
  rust_next_wipe_full?: string
  lastRestart?: string
}

export interface RustMaps {
  seed: number
  size: number
  url: string
  thumbnailUrl: string
  monuments: number
  barren: boolean
  updatedAt?: string
  mapUrl?: string
}

export interface RustSettings {
  version: number
  teamUILimit: number
  groupLimit: number
  timeZone: string
  rates: Rates
  blueprints: boolean
  kits: boolean
  decay: boolean
  decayScale: number
  forceWipeType: string
  wipes: Wipe[]
}

export interface Rates {
  gather: number
  craft: number
  component: number
  scrap: number
}

export interface Wipe {
  weeks: number[]
  days: string[]
  type: string
  hour: number
  minute: number
}

export interface RustWipe {
  type: string
  timestamp: string
}

export interface Relationships {
  game: Game
}

export interface Game {
  data: Data
}

export interface Data {
  type: string
  id: string
}

export interface Links {
  prev: string
  next: string
}

//


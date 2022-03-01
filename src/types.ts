export type EclipseLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null

export interface RunReport {
  version: number
  difficulty: Difficulty
  eclipse: EclipseLevel
  gameEnding: GameEnding
  gameMode: GameMode
  runTime: number
  playerInfos: PlayerInfo[]
  artifacts: Artifact[]
}

export interface PlayerInfo {
  name: string
  bodyName: BodyName
  equipment: string
  items: ItemData[]
  killerBodyName: BodyName
  statSheet: StatSheet
}

export interface ItemData {
  name: Item
  count: number
}

export interface StatSheet {
  highestDamageDealt: number
  highestLevel: number
  highestStagesCompleted: number
  totalDamageDealt: number
  totalDamageTaken: number
  totalDistanceTravelled: number
  totalDronesPurchased: number
  totalEliteKills: number
  totalGoldCollected: number
  totalGoldPurchases: number
  totalHealthHealed: number
  totalItemsCollected: number
  totalKills: number
  totalLunarPurchases: number
  totalMinionDamageDealth: number
  totalMinionKills: number
  totalPurchases: number
  totalTurretPurchased: number
}

export interface RuleBook {
  difficulty: Difficulty
  eclipse: EclipseLevel
  artifacts: Artifact[]
}

export enum Difficulty {
  Easy = 'Drizzle',
  Normal = 'Rainstorm',
  Hard = 'Monsoon',
  Eclipse = 'Eclipse'
}

export enum GameMode {
  EclipseRun = 'Eclipse',
  ClassicRun = 'Classic'
}

export enum GameEnding {
  MainEnding,
  ObliterationEnding,
  StandardLoss
}

export enum Artifact {
  Bomb = 'Spite',
  Command = 'Command',
  EliteOnly = 'Honor',
  Enigma = 'Enigma',
  FriendlyFire = 'Chaos',
  Glass = 'Glass',
  MixEnemy = 'Dissonance',
  MonsterTeamGainsItems = 'Evolution',
  RandomSurvivorOnRespawn = 'Metamorphosis',
  Sacrifice = 'Sacrifice',
  ShadowClone = 'Vengeance',
  SingleMonsterType = 'Kin',
  Swarms = 'Swarms',
  TeamDeath = 'Death',
  WeakAssKnees = 'Fraility',
  WispOnDeath = 'Soul'
}

export enum Item {}

export enum Equipment {}

export enum BodyName {}

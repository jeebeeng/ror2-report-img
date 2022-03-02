export type EclipseLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export interface RunReport {
  version: number
  difficulty: Difficulty
  eclipseLevel: EclipseLevel
  gameEnding: GameEnding
  gameMode: GameMode
  runTime: number
  playerInfo: PlayerInfo
  artifacts: Artifact[]
}

export interface PlayerInfo {
  name: string
  survivor: BodyName
  equipment: Equipment
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
  totalDistanceTraveled: number
  totalDronesPurchased: number
  totalEliteKills: number
  totalGoldCollected: number
  totalGoldPurchases: number
  totalHealthHealed: number
  totalItemsCollected: number
  totalKills: number
  totalLunarPurchases: number
  totalMinionDamageDealt: number
  totalMinionKills: number
  totalPurchases: number
  totalTurretsPurchased: number
}

export interface RuleBook {
  difficulty: Difficulty
  eclipseLevel: EclipseLevel
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

export enum Item {
  ParentEgg = 'Panula',
  FlatHealth = 'Bison Steak',
  Syringe = "Soldier's Syringe",
  Bear = 'Tougher Times',
  Behemoth = 'Brilliant Behemoth',
  Missile = 'AtG Missile Mk. 1',
  ExplodeOnDeath = "Will-o'-the-wisp",
  Dagger = 'Ceremonial Dagger',
  Tooth = 'Monster Tooth',
  CritGlasses = "Lens-Maker's Glasses",
  Hoof = "Paul's Goat Hoof",
  Feather = 'Hopoo Feather',
  AACannon = 'ITEM_AACANNON_NAME',
  ChainLightning = 'Ukulele',
  PlasmaCore = 'ITEM_PLASMACORE_NAME',
  Seed = 'Leeching Seed',
  Icicle = 'Frost Relic',
  GhostOnKill = 'Happiest Mask',
  Mushroom = 'Bustling Fungus',
  Crowbar = 'Crowbar',
  LevelBonus = 'ITEM_LEVELBONUS_NAME',
  AttackSpeedOnCrit = 'Predatory Instincts',
  BleedOnHit = 'Tri-Tip Dagger',
  SprintOutOfCombat = 'Red Whip',
  FallBoots = 'H3AD-5T v2',
  CooldownOnCrit = 'Wicked Ring',
  WardOnLevel = 'Warbanner',
  Phasing = 'Old War Stealthkit',
  HealOnCrit = "Harvester's Scythe",
  HealWhileSafe = 'Cautious Slug',
  TempestOnKill = 'ITEM_TEMPESTONKILL_NAME',
  PersonalShield = 'Personal Shield Generator',
  EquipmentMagazine = 'Fuel Cell',
  NovaOnHeal = "N'kuhana's Opinion",
  ShockNearby = 'Unstable Tesla Coil',
  Infusion = 'Infusion',
  WarCryOnCombat = 'ITEM_WARCRYONCOMBAT_NAME',
  Clover = '57 Leaf Clover',
  Medkit = 'Medkit',
  Bandolier = 'Bandolier',
  BounceNearby = 'Sentient Meat Hook',
  IgniteOnKill = 'Gasoline',
  PlantOnHit = 'ITEM_PLANTONHIT_NAME',
  StunChanceOnHit = 'Stun Grenade',
  Firework = 'Bundle of Fireworks',
  LunarDagger = 'Shaped Glass',
  GoldOnHit = 'Brittle Crown',
  MageAttunement = 'ITEM_MAGEATTUNEMENT_NAME',
  WarCryOnMultiKill = "Berzerker's Pauldron",
  BoostHp = 'ITEM_BOOSTHP_NAME',
  BoostDamage = 'ITEM_BOOSTDAMAGE_NAME',
  ShieldOnly = 'Transcendence',
  AlienHead = 'Alien Head',
  Talisman = 'Soulbound Catalyst',
  Knurl = 'Titanic Knurl',
  BeetleGland = "Queen's Gland",
  BurnNearby = 'ITEM_BURNNEARBY_NAME',
  CritHeal = 'ITEM_CRITHEAL_NAME',
  CrippleWardOnLevel = 'ITEM_CRIPPLEWARDONLEVEL_NAME',
  SprintBonus = 'Energy Drink',
  SecondarySkillMagazine = 'Backup Magazine',
  StickyBomb = 'Sticky Bomb',
  TreasureCache = 'Rusted Key',
  BossDamageBonus = 'Armor-Piercing Rounds',
  SprintArmor = 'Rose Buckler',
  IceRing = "Runald's Band",
  FireRing = "Kjaro's Band",
  SlowOnHit = 'Chronobauble',
  ExtraLife = "Dio's Best Friend",
  ExtraLifeConsumed = "Dio's Best Friend (Consumed)",
  UtilitySkillMagazine = 'Hardlight Afterburner',
  HeadHunter = 'Wake of Vultures',
  KillEliteFrenzy = 'Brainstalks',
  RepeatHeal = 'Corpsebloom',
  Ghost = 'ITEM_GHOST_NAME',
  HealthDecay = 'ITEM_HEALTHDECAY_NAME',
  AutoCastEquipment = 'Gesture of the Drowned',
  IncreaseHealing = 'Rejuvenation Rack',
  JumpBoost = 'Wax Quail',
  DrizzlePlayerHelper = 'ITEM_DRIZZLEPLAYERHELPER_NAME',
  ExecuteLowHealthElite = 'Old Guillotine',
  EnergizedOnEquipmentUse = 'War Horn',
  BarrierOnOverHeal = 'Aegis',
  TonicAffliction = 'Tonic Affliction',
  TitanGoldDuringTP = 'Halcyon Seed',
  SprintWisp = 'Little Disciple',
  BarrierOnKill = 'Topaz Brooch',
  ArmorReductionOnHit = 'Shattering Justice',
  TPHealingNova = 'Lepton Daisy',
  NearbyDamageBonus = 'Focus Crystal',
  LunarUtilityReplacement = 'Strides of Heresy',
  MonsoonPlayerHelper = 'ITEM_MONSOONPLAYERHELPER_NAME',
  Thorns = 'Razorwire',
  RegenOnKill = 'Fresh Meat',
  Pearl = 'Pearl',
  ShinyPearl = 'Irradiant Pearl',
  BonusGoldPackOnKill = "Ghor's Tome",
  LaserTurbine = 'Resonance Disc',
  LunarPrimaryReplacement = 'Visions of Heresy',
  NovaOnLowHealth = 'Genesis Loop',
  LunarTrinket = 'Beads of Fealty',
  InvadingDoppelganger = 'ITEM_INVADINGDOPPELGANGER_NAME',
  CutHp = 'ITEM_CUTHP_NAME',
  ArtifactKey = 'Artifact Key',
  ArmorPlate = 'Repulsion Armor Plate',
  Squid = 'Squid Polyp',
  DeathMark = 'Death Mark',
  Plant = 'Interstellar Desk Plant',
  Incubator = 'Ancestral Incubator',
  FocusConvergence = 'Focused Convergence',
  BoostAttackSpeed = 'ITEM_BOOSTATTACKSPEED_NAME',
  AdaptiveArmor = 'ITEM_ADAPTIVEARMOR_NAME',
  CaptainDefenseMatrix = 'Defensive Microbots',
  FireballsOnHit = 'Molten Perforator',
  BleedOnHitAndExplode = 'Shatterspleen',
  SiphonOnLowHealth = 'Mired Urn',
  MonstersOnShrineUse = 'Defiant Gouge',
  RandomDamageZone = 'Mercurial Rachis',
  ScrapWhite = 'Item Scrap, White',
  ScrapGreen = 'Item Scrap, Green',
  ScrapRed = 'Item Scrap, Red',
  ScrapYellow = 'Item Scrap, Yellow',
  LunarBadLuck = 'Purity'
}

export enum Equipment {
  CommandMissile = 'Disposable Missile Launcher',
  Fruit = 'Foreign Fruit',
  Meteor = 'Glowing Meteorite',
  SoulJar = 'Jar of Souls',
  AffixRed = "Ifrit's Distinction",
  AffixBlue = 'Silence Between Two Strikes',
  AffixYellow = 'nan',
  AffixGold = 'Coven of Gold',
  AffixWhite = 'Her Biting Embrace',
  AffixPoison = "N'kuhana's Retort",
  Blackhole = 'Primordial Cube',
  GhostGun = "Reaper's Remorse",
  CritOnUse = 'Ocular HUD',
  DroneBackup = 'The Back-up',
  OrbitalLaser = 'EQUIPMENT_ORBITALLASER_NAME',
  BFG = 'Preon Accumulator',
  Enigma = 'EQUIPMENT_ENIGMA_NAME',
  Jetpack = 'Milky Chrysalis',
  Lightning = 'Royal Capacitor',
  GoldGat = 'The Crowdfunder',
  PassiveHealing = 'Gnarled Woodsprite',
  LunarPotion = 'EQUIPMENT_LUNARPOTION_NAME',
  BurnNearby = 'Helfire Tincture',
  SoulCorruptor = 'EQUIPMENT_SOULCORRUPTOR_NAME',
  Scanner = 'Radar Scanner',
  CrippleWard = 'Effigy of Grief',
  Gateway = 'Eccentric Vase',
  Tonic = 'Spinel Tonic',
  QuestVolatileBattery = 'Fuel Array',
  Cleanse = 'Blast Shower',
  FireBallDash = 'Volcanic Egg',
  AffixHaunted = 'Spectral Circlet',
  GainArmor = 'Jade Elephant',
  Saw = 'Sawmerang',
  Recycle = 'Recycler',
  LifestealOnHit = 'Super Massive Leech',
  TeamWarCry = "Gorag's Opus",
  DeathProjectile = 'Forgive Me Please'
}

export enum BodyName {
  Test = 'TEST'
}

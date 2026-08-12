export const FRONTIERS = [
  {
    id: 'deep-space',
    index: '01',
    name: 'Deep Space',
    code: 'ORBITAL / EXTRAPLANETARY',
    description: 'Propulsion, in-situ resources, and machines built to outlive their makers.',
    metric: '10⁻⁹ Pa',
    unit: 'operating vacuum',
    color: '#b8f45d',
  },
  {
    id: 'deep-ocean',
    index: '02',
    name: 'Deep Ocean',
    code: 'HADAL / SUBSEA',
    description: 'Pressure-tolerant systems for the least observed habitats on Earth.',
    metric: '1,100 bar',
    unit: 'ambient pressure',
    color: '#5eead4',
  },
  {
    id: 'deep-crust',
    index: '03',
    name: 'Deep Crust',
    code: 'GEOTHERMAL / SUBSURFACE',
    description: 'Tools, materials, and sensing architectures for kilometers of hot rock.',
    metric: '500 °C',
    unit: 'tool survival',
    color: '#fb923c',
  },
  {
    id: 'fusion-energy',
    index: '04',
    name: 'Fusion Energy',
    code: 'PLASMA / MAGNETICS',
    description: 'The industrial stack behind confined stars and abundant process heat.',
    metric: '150 MK',
    unit: 'plasma regime',
    color: '#f472b6',
  },
  {
    id: 'cryo-quantum',
    index: '05',
    name: 'Cryo-Quantum Infrastructure',
    code: 'MILLIKELVIN / CONTROL',
    description: 'Infrastructure that makes fragile quantum states repeatable at scale.',
    metric: '10 mK',
    unit: 'base temperature',
    color: '#93c5fd',
  },
] as const;

export type FrontierName = (typeof FRONTIERS)[number]['name'];

export const frontierByName = new Map(FRONTIERS.map((frontier) => [frontier.name, frontier]));

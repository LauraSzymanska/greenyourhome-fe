export interface FilterCategory {
  name: string;
  translationKey: string;
  options: string[];
}

export interface PageFilters {
  categories: FilterCategory[];
}

export const FILTERS_CONFIG = {
  plants: {
    categories: [
      {
        name: 'Species',
        translationKey: 'Species',
        options: ['Species.Calathea_Maranta', 'Species.Pilea', 'Species.Philodendron', 'Species.Monstera', 'Species.Hoya']
      },
      {
        name: 'Size',
        translationKey: 'Size',
        options: ['Size.Big', 'Size.Medium', 'Size.Small', 'Size.Mini']
      },
      {
        name: 'Other',
        translationKey: 'Other',
        options: ['Other.Safe_For_Pets', 'Other.Easy_Care']
      }
    ],
  },
  pots_planters: {
    categories: [
      {
        name: 'Pots Planters',
        translationKey: 'Pots_Planters',
        options: ['Pots_Planters.All_Pots_Planters', 'Pots.Pots', 'Planters.Planters']
      },
      {
        name: 'Size',
        translationKey: 'Size',
        options: ['Size.Big', 'Size.Medium', 'Size.Small', 'Size.Mini']
      },
      {
        name: 'Material',
        translationKey: 'Material',
        options: ['Material.Plastic', 'Material.Ceramic', 'Material.Clay']
      }
    ],
  },
  accessories: {
    categories: [
      {
        name: 'Watering Cans',
        translationKey: 'Watering_Cans',
        options: ['All_Watering_Cans', 'Watering_Cans.Plastic', 'Watering_Cans.Metal']
      },
      {
        name: 'Gardening Accessories',
        translationKey: 'Gardening_Accessories',
        options: ['All_Gardening_Accessories', 'Gardening_Accessories.Tools', 'Gardening_Accessories.Gloves']
      },
      {
        name: 'Decorations',
        translationKey: 'Decorations',
        options: ['All_Decorations', 'Decorations.Plant_Stands', 'Decorations.Hanging_Holders_Macrame_Hangers']
      },
      {
        name: 'Fertilizers',
        translationKey: 'Fertilizers',
        options: ['Fertilizers.All_Fertilizers']
      }
    ],
  }
};
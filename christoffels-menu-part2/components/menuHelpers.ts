import { MenuItem } from './MenuItem';

export const courseOptions = ['Starter', 'Main Course', 'Dessert'] as const;

export type CourseFilter = 'All courses' | (typeof courseOptions)[number];

export type MenuStatistics = {
  totalItems: number;
  averagePrice: number;
  starterCount: number;
  mainCourseCount: number;
  dessertCount: number;
};

export function filterMenuItems(
  menuItems: MenuItem[],
  searchText: string,
  courseFilter: CourseFilter,
): MenuItem[] {
  const search = searchText.trim().toLowerCase();

  return menuItems.filter((item) => {
    const matchesSearch = search === '' ||
      item.dishName.toLowerCase().includes(search);
    const matchesCourse = courseFilter === 'All courses' ||
      item.course === courseFilter;

    return matchesSearch && matchesCourse;
  });
}

export function calculateMenuStatistics(menuItems: MenuItem[]): MenuStatistics {
  const totalItems = menuItems.length;
  const totalPrice = menuItems.reduce((sum, item) => sum + item.price, 0);

  return {
    totalItems,
    averagePrice: totalItems === 0 ? 0 : totalPrice / totalItems,
    starterCount: menuItems.filter((item) => item.course === 'Starter').length,
    mainCourseCount: menuItems.filter((item) => item.course === 'Main Course').length,
    dessertCount: menuItems.filter((item) => item.course === 'Dessert').length,
  };
}

export function formatRand(amount: number): string {
  return `R${amount.toFixed(2)}`;
}

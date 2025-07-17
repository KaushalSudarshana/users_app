// routes.ts
export type RouteKey = 'home' | 'users' ;

export type Route = {
  path: string;
  label: string;
  title: string;
};

export const routes: Record<RouteKey, Route> = {
  home: {
    path: '/',
    label: 'Home',
    title: 'Users App'
  },
  users: {
    path: '/users',
    label: 'Users',
    title: 'All Users'
  }

};

// Helper function to get route by key
export const getRoute = (key: RouteKey): Route => routes[key];

// Helper function to get all routes as array
export const getAllRoutes = () => Object.values(routes);

// Helper function to get navigation routes (excluding home)
export const getNavRoutes = () => 
  Object.entries(routes)
    .filter(([key]) => key !== 'home')
    .map(([key, route]) => ({ key, ...route }));
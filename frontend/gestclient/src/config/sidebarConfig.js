// src/config/sidebarConfig.js
export const sidebarConfig = {
    admin: [
      { name: 'All Clients', path: '/clients' },
      { name: 'Add Client', path: '/add-client' },
      { name: 'Notifications', path: '/notifications' },
      { name: 'Laptops Repaired', path: '/laptops-repaired' },
    ],
    technician: [
      { name: 'All Laptops', path: '/laptops' },
      { name: 'Créer Fiche Réparation', path: '/create-repair' },
      { name: 'Laptops Not Repaired', path: '/laptops-not-repaired' },
      { name: 'Notifications', path: '/notifications' },
    ],
  };
  
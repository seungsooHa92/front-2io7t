export const queryKeys = {
  getUsers: ['users'] as const,
  getVans: ['vans'] as const,
  getVan: (id: string) => ['van', id] as const,
}

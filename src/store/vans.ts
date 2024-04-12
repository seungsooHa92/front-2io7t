import { create } from 'zustand'
import { Vans } from '../types'

interface VanState {
  vans: Vans.Van[]
  addVan: (van: Vans.Van) => void
  removeVan: (id: string) => void
  setVans: (_vans: Vans.Van[]) => void
}

const useVanStore = create<VanState>((set) => ({
  vans: [],
  addVan: (van) => set((state) => ({ vans: [...state.vans, van] })),
  removeVan: (id) =>
    set((state) => ({ vans: state.vans.filter((v) => v.id !== id) })),
  setVans: (vans) => set({ vans }),
}))

export default useVanStore

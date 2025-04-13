import { create } from "zustand"
import createThemeSlice from "./themeSlice"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

const useStore = create()(
    persist(
        (set)=>({
            ...createThemeSlice(set),
        }),
        {
            name: 'persisted-store',
            storage: createJSONStorage(()=> AsyncStorage),
            partialize: (state=>({
                theme: state.theme,
            }))
        }
    )
)

export default useStore
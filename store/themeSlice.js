const createThemeSlice = (set)=>({
    theme: "dark",
    toggleTheme: () => set((state)=>({
        theme: state.theme === "dark" ? "light" : "dark"
    })),
})

export default createThemeSlice
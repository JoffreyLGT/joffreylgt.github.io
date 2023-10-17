/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            colors:{
                accent:{
                    light: "rgb(var(--accent-light)/<alpha-value>)",
                    regular: "rgb(var(--accent-regular)/<alpha-value>)",
                    dark: "rgb(var(--accent-dark)/<alpha-value>)",
                    overlay: "rgb(var(--accent-overlay)/<alpha-value>)",
                    subtleOverlay: "rgb(var(--accent-subtle-overlay)/<alpha-value>)",
                    textOver: "rgb(var(--accent-text-over)/<alpha-value>)",

                },
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "accent": {
                    light: "var(--accent-light)",
                    regular: "var(--accent-regular)",
                }
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
}

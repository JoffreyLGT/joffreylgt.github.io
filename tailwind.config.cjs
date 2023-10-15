/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "accent": {
                    light: "var(--accent-light)",
                    regular: "var(--accent-regular)",
                    textover: "var(--accent-text-over)",
                }
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
}

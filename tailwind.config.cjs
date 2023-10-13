/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        fontSize: {
            sm: "0.875rem",
            base: "1rem",
            md: "1.125rem",
            lg: "1.25rem",
            xl: "1.625rem",
            "2xl": "2.125rem",
            "3xl": "2.625rem",
            "4xl": "3.5rem",
            "5xl": "4.5rem",
        },
        extend: {
            // Important notice: the styles directly declared in the website
            // are using hard coded values (50em and 60em) due to css limitation
            // with @media queries not being able to use css variables.
            // Those CSS styles will be removed incrementaly in the future.
            screens: {
                "laptop": "50em",
                "desktop": "60em",
            },
            colors: {
                "t-gray": {
                    0: "rgb(var(--gray-0)/<alpha-value>)",
                    50: "rgb(var(--gray-50)/<alpha-value>)",
                    100: "rgb(var(--gray-100)/<alpha-value>)",
                    200: "rgb(var(--gray-200)/<alpha-value>)",
                    300: "rgb(var(--gray-300)/<alpha-value>)",
                    400: "rgb(var(--gray-400)/<alpha-value>)",
                    500: "rgb(var(--gray-500)/<alpha-value>)",
                    600: "rgb(var(--gray-600)/<alpha-value>)",
                    700: "rgb(var(--gray-700)/<alpha-value>)",
                    800: "rgb(var(--gray-800)/<alpha-value>)",
                    900: "rgb(var(--gray-900)/<alpha-value>)",
                    "999-basis": "rgb(var(--gray-999-basis)/<alpha-value>)",
                    "999_40": "rgb(var(--gray-999_40)/<alpha-value>)",
                    999: "rgb(var(--gray-999)/<alpha-value>)",
                },
                accent: {
                    light: "rgb(var(--accent-light)/<alpha-value>)",
                    regular: "rgb(var(--accent-regular)/<alpha-value>)",
                    dark: "rgb(var(--accent-dark)/<alpha-value>)",
                    overlay: "rgb(var(--accent-overlay)/<alpha-value>)",
                    subtleOverlay: "rgb(var(--accent-subtle-overlay)/<alpha-value>)",
                    textOver: "rgb(var(--accent-text-over)/<alpha-value>)",
                },
                link: "rgb(var(--link-color)/<alpha-value>)"
            },
            backgroundImage: {
                "gradient-subtle": "var(--gradient-subtle)",
                "gradient-accent": "var(--gradient-accent)",
                "gradient-accent-orange": "var(--gradient-accent-orange)",
                "gradient-stroke": "var(--gradient-stroke)",
            },
            boxShadow: {
                "t-sm": "var(--shadow-sm)",
                "t-md": "var(--shadow-md)",
                "t-lg": "var(--shadow-lg)",
            },
            fontFamily: {
                system: ["var(--font-system)"],
                body: ["var(--font-body)"],
                brand: ["var(--font-brand)"],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

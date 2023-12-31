/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        fontSize: {
            xs: "var(--text-xs)",
            sm: "var(--text-sm)",
            base: "var(--text-base)",
            md: "var(--text-md)",
            lg: "var(--text-lg)",
            xl: "var(--text-xl)",
            "2xl": "var(--text-2xl)",
            "3xl": "var(--text-3xl)",
            "4xl": "var(--text-4xl)",
            "5xl": "var(--text-5xl)",
        },
        extend: {
            // Important notice: the styles directly declared in the website
            // are using hard coded values (50em and 60em) due to css limitation
            // with @media queries not being able to use css variables.
            // Those CSS styles will be removed incrementaly in the future.
            screens: {
                "2xl": "83em",    // Override default, used to specify container max-width 
                "laptop": "50em", // Original theme default breakpoint
                "desktop": "60em",// Original theme extended breakpoint
            },
            colors: {
                "t_gray": {
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
                    "subtle-overlay": "rgb(var(--accent-subtle-overlay)/<alpha-value>)",
                    "text-over": "rgb(var(--accent-text-over)/<alpha-value>)",
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
                "t_sm": "var(--shadow-sm)",
                "t_md": "var(--shadow-md)",
                "t_lg": "var(--shadow-lg)",
            },
            fontFamily: {
                system: ["var(--font-system)"],
                body: ["var(--font-body)"],
                brand: ["var(--font-brand)"],
            },
            maxWidth: {
                "theme": "83rem",
            }
        },
        transitionDuration:{
            "theme": "var(--transition-duration)",
        },
        transitionTimingFunction:{
            "theme": "var(--transition-timing-function)"
        }
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
}

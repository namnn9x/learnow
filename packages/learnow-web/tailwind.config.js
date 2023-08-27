const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,page,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  rippleui: {
    themes: [
			{
				themeName: "light",
				colorScheme: "light",
				colors: {
					primary: "#FFA54F",
          secondary: '#1973E8',
          neutral: '#ffc06c'
				},
			},
		],
	},
  plugins: [require("rippleui")],
};

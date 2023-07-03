
import defaultTheme from 'rma-ui/dist/tailwind.config.js';

const p = {
    ...defaultTheme,
    content: ['./src/**/*.{js,jsx,ts,tsx}' ,'./node_modules/rma-ui/dist/ui.js']
}

export default p

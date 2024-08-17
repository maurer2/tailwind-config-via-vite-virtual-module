// import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from '../tailwind.config';
// const tailwindConfigResolved = resolveConfig(tailwindConfig);

// Import whole config
// import tailwindConfigResolved from 'virtual:tailwind-config';
// const { theme } = tailwindConfigResolved;

// Import only the theme
import theme from 'virtual:tailwind-theme';

console.log(theme);

function App() {
  return (
    <h1 className='text-xl'>Test</h1>
  )
}

export default App

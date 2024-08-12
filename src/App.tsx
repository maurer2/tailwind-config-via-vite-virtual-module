// import resolveConfig from 'tailwindcss/resolveConfig';
// import tailwindConfig from '../tailwind.config';
// const tailwindConfigResolved = resolveConfig(tailwindConfig);

import { tailwindConfigResolved } from 'virtual:tailwind-config';

const { theme } = tailwindConfigResolved;
console.log(theme);

function App() {
  return (
    <h1 className='text-xl'>Test</h1>
  )
}

export default App

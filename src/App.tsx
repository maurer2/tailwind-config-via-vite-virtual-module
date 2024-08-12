import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

const tailwindConfigResolved = resolveConfig(tailwindConfig);
const { red } = tailwindConfigResolved.theme.colors;

console.log(red[500]);

function App() {
  return (
    <h1 className='text-xl'>Test</h1>
  )
}

export default App

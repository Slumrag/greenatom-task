import { createRoot } from 'react-dom/client';
import App from './App';

const rootNode = document.querySelector('#root');
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(<App />);
} else {
  console.error("Can't load root element");
}

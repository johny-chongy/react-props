
import ReactDOM from 'react-dom/client';

import { choice, remove } from './helpers';
import fruits from './foods';


const chosenFruit = choice(fruits);
console.log(`I'd like one ${chosenFruit}, please.`);
console.log(`Here you go: ${chosenFruit}`);
console.log(`Delicious! May I have another?`);
remove(fruits, chosenFruit);
console.log(`I'm sorry, we're all out. We have ${fruits} left.`);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
);



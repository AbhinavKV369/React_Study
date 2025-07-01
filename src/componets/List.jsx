
function List() {
    
    const fruits = [
      { id: 1, name: "Apple", calories: 45 },
      { id: 2, name: "Mango", calories: 47 },
      { id: 3, name: "Orange", calories: 44 },
      { id: 4, name: "Banana", calories: 89 },
      { id: 5, name: "Grapes", calories: 105},
      { id: 6, name: "Pineapple", calories: 524 },
      { id: 7, name: "Strawberry", calories: 33 },
      { id: 8, name: "Watermelon", calories: 300 },
      { id: 9, name: "Papaya", calories: 43 },
      { id: 10, name: "Blueberry", calories: 57 },
    ];
      
          
           // fruits.sort((a, b) => a.name.localeCompare(b.name));
           // fruits.sort((a,b)=>b.name.localeCompare(a.name));
           // fruits.sort((a,b)=>b.calories-a.calories)
          // fruits.sort((a,b)=>a.calories - b.calories);

   //const listItems = fruits.map(fruit=> <li key={fruit.id}>{fruit.name}- {fruit.calories}</li> ) 
    
    const lowCalFruits = fruits.filter(fruit=> fruit.calories > 100)
    
    const listItems = lowCalFruits.map((fruit)=><li>{fruit.name}-{fruit.calories}</li>)
  return (
    <div>
      
       <ol>{listItems}</ol>
    </div>
  );
}

export default List
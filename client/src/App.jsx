import React,{useState, useEffect} from 'react'

function App() {

  const [state, setState] = useState();
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch('/api/people');
        const data = await response.json();
        setState(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPeople();
  }, []);

  console.log(state)

  return (
    <div>
      <p>Clean React App</p>
    </div>
  )
}

export default App
import Button from "./components/Button";
import IsActive from "./components/IsActive";
import List from "./components/List";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
     <Button></Button>
     <Product title='teste' description='hsuhaushuahsuhua' value={55}/>
     <List nomeAluno= 'Alex'/>
     <List nomeAluno= 'Elena'/>
     <List nomeAluno= 'Alex'/>
     <List nomeAluno= 'Elena'/>

     <IsActive isActive={true} />
     <IsActive isActive={false} />
    </div>
  );
}

export default App;

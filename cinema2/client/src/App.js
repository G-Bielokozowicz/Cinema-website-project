import './App.css';
import SerachBar from './components/SearchBar';
import NavigationBar from './components/NavigationBar';
import Pages from './pages/Pages';
import Header from './components/Header';




function App() {
  return (
    <div>
        {/* <SerachBar /> */}
        <Header/>
        <NavigationBar />
        <Pages />
    </div>
  );
}

export default App;

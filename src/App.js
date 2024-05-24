import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more';
import TreeView from './components/tree-view';
import {menus} from './components/tree-view/data';
import ThemeChange from './components/theme-change';
import ScrollProgress from './components/scroll-progress';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numberOfStars={8} /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={5} /> */}
      {/* <LoadMore url={'https://dummyjson.com/products'} limit={20} /> */}
      {/* <TreeView items={menus}></TreeView> */}
      {/* <ThemeChange></ThemeChange> */}
      <ScrollProgress url={'https://dummyjson.com/products?limit=100'}></ScrollProgress>

    </div>
  );
}

export default App;

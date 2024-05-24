import MenuList from "./menu-list";
import "./style.css";

const TreeView = ({ items = [] }) => {
    console.log(items);

  return (
    <div className="tree-view-contianer">
        <MenuList list={items} />
    </div>
  );
};

export default TreeView;

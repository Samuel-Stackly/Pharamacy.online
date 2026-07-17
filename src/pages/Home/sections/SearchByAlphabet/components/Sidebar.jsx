import Categories from "./Categories";
import Filters from "./Filters";
import BestSellers from "./BestSellers";

function Sidebar() {
  return (
    <aside className="space-y-8">
      <Categories />

      <Filters />

      <BestSellers />
    </aside>
  );
}

export default Sidebar;
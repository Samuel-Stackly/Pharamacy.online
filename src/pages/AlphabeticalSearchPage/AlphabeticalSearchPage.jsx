import Breadcrumb from "../../components/common/Breadcrumb";
import AlphabeticalSearch from "../Home/sections/AlphabeticalSearch/AlphabeticalSearch";

function AlphabeticalSearchPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Alphabetical Search" },
        ]}
      />

      <AlphabeticalSearch />
    </>
  );
}

export default AlphabeticalSearchPage;
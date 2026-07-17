


import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Breadcrumb from "../../../../components/common/Breadcrumb";
import Container from "../../../../components/common/Container";
import HealthBlog from "../../HealthBlog/HealthBlog";

function SearchByAlphabet() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Search by Alphabet" },
        ]}
      />

      <section className="py-10">
        <Container className="max-w-[1500px]">
          <h1 className="mb-8 text-5xl font-bold text-[#24325B]">
            Medicines
          </h1>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <Sidebar />

            <Content />
          </div>
        </Container>
        <HealthBlog />
      </section>
    </>
  );
}

export default SearchByAlphabet;
import { Link } from "react-router-dom";
import Container from "./Container";

function Breadcrumb({ items }) {
  return (
    <section className="border-b border-gray-200 bg-[#F8FCFC] py-4">
      <Container className="max-w-[1500px]">
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.path ? (
                <Link
                  to={item.path}
                  className="hover:text-[#31D4B5]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-[#24325B]">
                  {item.label}
                </span>
              )}

              {index !== items.length - 1 && (
                <span className="text-[#9CA3AF]">&gt;</span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Breadcrumb;
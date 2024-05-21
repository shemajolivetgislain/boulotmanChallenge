import { useNavigate } from "react-router-dom";
import Button from "../../compontents/Button";
import ContainerHolder from "../../compontents/ContainerHolder";
import ProductTable from "../../compontents/Table";
import { products } from "../../constants/product";
import { IoIosAddCircle } from "react-icons/io";

const ProductPage = () => {
  const navigate = useNavigate();
  return (
    <ContainerHolder>
      <div className="flex flex-col gap-4">
        <header className="flex justify-between">
          <h1 className="font-bold text-xl">List of products</h1>
          <Button
            value={
              <span className="flex items-center gap-3">
                <IoIosAddCircle size={20} />
                <p>Add product</p>
              </span>
            }
            onClick={() => {
              navigate("/products/newProducts");
            }}
          />
        </header>
        <ProductTable Products={products} />
      </div>
    </ContainerHolder>
  );
};

export default ProductPage;

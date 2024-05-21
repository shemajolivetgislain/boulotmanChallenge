import ContainerHolder from "../../compontents/ContainerHolder";
import ProductTable from "../../compontents/Table";
import { products } from "../../constants/product";

const ProductPage = () => {
  return (
    <ContainerHolder>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">List of products</h1>
        <ProductTable Products={products} />
      </div>
    </ContainerHolder>
  );
};

export default ProductPage;

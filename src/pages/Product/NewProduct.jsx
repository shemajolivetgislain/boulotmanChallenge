import ContainerHolder from "../../compontents/ContainerHolder";
import AddProductForm from "./child/AddProductForm";

const NewProduct = () => {
  return (
    <div>
      <ContainerHolder className={""}>
        <header className="pb-5">
          <h1 className="font-bold text-xl">Add product</h1>
          <p className="text-sm">Fill below input to add your product</p>
        </header>
        <main>
          <AddProductForm />
        </main>
      </ContainerHolder>
    </div>
  );
};

export default NewProduct;

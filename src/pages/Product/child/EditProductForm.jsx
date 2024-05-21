import Modal from "../../../compontents/Modal";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import Input from "../../../compontents/Input";
import TextArea from "../../../compontents/Input/TextArea";
import SelectInput from "../../../compontents/Input/Select";
import { categories } from "../../../constants/categories";
import { toast } from "react-toastify";

const EditProductForm = ({ closeModal, productData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProductSubmit = (data) => {
    toast.success(`Product ${data.name} Edited successfully`, {
      autoClose: 2000,
      hideProgressBar: true,
      position: "top-center",
    });
    closeModal();
  };

  return (
    <Modal title={"Edit Product"} toggleFunction={closeModal}>
      <form
        action=""
        onSubmit={handleSubmit(handleProductSubmit)}
        className="flex flex-col gap-3 justify-start "
      >
        <Controller
          name="name"
          control={control}
          defaultValue={productData?.product_name}
          render={({ field }) => (
            <label className="flex flex-col gap-1">
              <p className="text-[14px]">Product Name</p>
              <Input
                error={errors.name}
                type="text"
                placeholder="Enter product Name"
                defaultValue={productData?.product_name}
                name="name"
                {...field}
              />
              {errors.name && (
                <p className="text-red-600 text-[13px]">
                  {errors.name.message}
                </p>
              )}
            </label>
          )}
        />
        <Controller
          name="category"
          control={control}
          defaultValue={productData.category}
          render={({ field }) => (
            <label className="flex flex-col gap-1">
              <p className="text-[14px]">Category</p>
              <SelectInput
                error={errors.category}
                name="category"
                id="category"
                options={categories}
                {...field}
              />
              {errors.category && (
                <p className="text-red-600 text-[13px]">
                  {errors.category.message}
                </p>
              )}
            </label>
          )}
        />
        <Controller
          name="price"
          control={control}
          defaultValue={productData?.price}
          render={({ field }) => (
            <label className="flex flex-col gap-1">
              <p className="text-[14px]">Product Price</p>
              <Input
                error={errors.price}
                type="text"
                placeholder="Enter product price"
                name="price"
                defaultValue={productData?.price}
                {...field}
              />
              {errors.name && (
                <p className="text-red-600 text-[13px]">
                  {errors.price.message}
                </p>
              )}
            </label>
          )}
        />
        <Controller
          name="product-details"
          control={control}
          defaultValue={productData.description}
          render={({ field }) => {
            return (
              <>
                <label className="flex flex-col gap-1">
                  <p className="text-[14px]">Product description</p>
                  <TextArea
                    {...field}
                    defaultValue={productData.description}
                    placeholder={`Product description`}
                    className={"!border-whiteTheme-subPrimaryColor"}
                  />
                </label>
              </>
            );
          }}
        />
        <button
          type="submit"
          className="bg-whiteTheme-primaryColor text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};

EditProductForm.propTypes = {
  closeModal: PropTypes.func,
  productData: PropTypes.object,
};

export default EditProductForm;

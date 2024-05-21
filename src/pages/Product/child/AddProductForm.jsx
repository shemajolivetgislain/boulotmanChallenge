import { Controller, useForm } from "react-hook-form";
import Input from "../../../compontents/Input";
import TextArea from "../../../compontents/Input/TextArea";
import SelectInput from "../../../compontents/Input/Select";
import { categories } from "../../../constants/categories";

const AddProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProductSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="mr-32">
      <form
        action=""
        onSubmit={handleSubmit(handleProductSubmit)}
        className="flex flex-col gap-3 justify-start pr-36"
      >
        <div className="grid grid-cols-2 gap-4">
          {" "}
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "product name is required" }}
            render={({ field }) => (
              <label className="flex flex-col gap-1">
                <p className="text-[14px]">Product Name</p>
                <Input
                  error={errors.name}
                  type="text"
                  placeholder="Enter product Name"
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
            defaultValue=""
            rules={{ required: "Please select a category" }}
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
        </div>
        <Controller
          name="price"
          control={control}
          defaultValue=""
          rules={{ required: "product price is required" }}
          render={({ field }) => (
            <label className="flex flex-col gap-1">
              <p className="text-[14px]">Product Price</p>
              <Input
                error={errors.price}
                type="text"
                placeholder="Enter product price"
                name="name"
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
          defaultValue=""
          render={({ field }) => {
            return (
              <>
                <label className="flex flex-col gap-1">
                  <p className="text-[14px]">Product description</p>
                  <TextArea
                    {...field}
                    placeholder={`Product description`}
                    className={"!border-whiteTheme-subPrimaryColor"}
                  />
                </label>
              </>
            );
          }}
        />

        {/* Add other input fields as needed */}

        <button
          type="submit"
          className="bg-whiteTheme-primaryColor text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddProductForm;

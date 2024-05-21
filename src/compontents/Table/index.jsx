import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import EditProductForm from "../../pages/Product/child/EditProductForm";
import { useState } from "react";

const ProductTable = ({ Products }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [dataEdit, setEditData] = useState("");
  console.log(dataEdit);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className={`px-6 py-3 `}>
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Products?.length > 0 ? (
              <>
                {Products?.map((product, index) => (
                  <tr className="bg-white border-b" key={index}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap capitalize"
                    >
                      {index + 1}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap capitalize"
                    >
                      {product?.product_name}
                    </th>
                    <td className="px-6 py-4 text-whiteTheme-primaryColor capitalize">
                      {product?.category}
                    </td>
                    <td className="px-6 py-4 text-whiteTheme-primaryColor capitalize">
                      {product?.price}
                    </td>
                    <td className="px-6 py-4 ">
                      <span
                        className={`${
                          product.status === "active"
                            ? "px-2 py-2 bg-blue-100 text-blue-900 capitalize"
                            : "px-2 py-2 bg-red-100 text-red-700 capitalize"
                        } rounded-md`}
                      >
                        {product?.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-whiteTheme-primaryColor capitalize">
                      {product?.created_date}
                    </td>
                    <td className="px-6 py-4 ">
                      <span className="flex items-start gap-2">
                        <div
                          className="text-green-700 cursor-pointer bg-green-100 p-2 rounded-md"
                          onClick={() => {
                            setOpenEditModal(true);
                            setEditData(product);
                          }}
                        >
                          <FiEdit size={18} />
                        </div>
                        <div
                          className="text-red-700 cursor-pointer bg-red-100 p-2 rounded-md"
                          onClick={() => {
                            setOpenEditModal(true);
                          }}
                        >
                          <RiDeleteBinLine size={18} />
                        </div>
                      </span>
                    </td>
                  </tr>
                ))}
                {openEditModal && (
                  <EditProductForm
                    closeModal={() => {
                      setOpenEditModal(false);
                    }}
                    productData={dataEdit}
                  />
                )}
              </>
            ) : (
              <div className="flex p-8 items-center">
                <p className="text-center font-semibold">
                  {"No product available"}
                </p>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

ProductTable.propTypes = {
  Products: PropTypes.array.isRequired,
};
export default ProductTable;

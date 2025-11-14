import Image from "next/image";

const ProductRow = ({ product }) => {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
      <td className="py-4 pl-4 flex items-center gap-3">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-gray-400 dark:border-gray-600"
        />
        <div className="flex items-center gap-3">
          <Image
            src={product.image}
            className="w-12 h-12 rounded-md object-cover"
            alt={product.name}
            width={48}
            height={48}
          />
          <span className="text-gray-900 dark:text-gray-200 font-medium">
            {product.name}
          </span>
        </div>
      </td>

      <td className="text-gray-900 dark:text-gray-200">{product.views}</td>
      <td className="text-gray-900 dark:text-gray-200">${product.price}</td>
      <td className="text-gray-900 dark:text-gray-200">${product.revenue}</td>

      <td>
        <button className="px-3 py-1.5 text-xs bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md mr-2 hover:bg-gray-300 dark:hover:bg-gray-600">
          Edit
        </button>
        <button className="px-3 py-1.5 text-xs bg-red-600 text-white rounded-md hover:bg-red-700">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;

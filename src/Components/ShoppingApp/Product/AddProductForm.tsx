"use client";

import { useForm } from "react-hook-form";
import { IProducts } from "@/types/product.interaface";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/lib/store/store";
import { addProduct } from "@/lib/features/product/ProductSlice";

interface AddProductFormProps {
  onAddProduct?: (data: IProducts) => void;
  onCancel?: () => void;
}

const AddProductForm = ({onCancel }: AddProductFormProps) => {

  const dispatch = useDispatch<AppDispatch>()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProducts>({
    defaultValues: {
      title: "",
      price: 0,
      image: "",
      quantity: 0,
      description: "",
      category: "",
    },
  });

  const onSubmit = (data: IProducts) => {
    dispatch(addProduct(data))
    reset();
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-foreground mb-6">Add New Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter product title"
            {...register("title", { required: "Title is required" })}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          {errors.title && (
            <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Price & Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Price
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="0.00"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price must be positive" },
                valueAsNumber: true,
              })}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            {errors.price && (
              <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Quantity
            </label>
            <input
              type="number"
              placeholder="0"
              {...register("quantity", {
                required: "Quantity is required",
                min: { value: 0, message: "Quantity must be positive" },
                valueAsNumber: true,
              })}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            {errors.quantity && (
              <p className="text-sm text-red-500 mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Category
          </label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          >
            <option value="">Select a category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Sports">Sports</option>
            <option value="Unisex">Unisex</option>
            <option value="Accessories">Accessories</option>
          </select>
          {errors.category && (
            <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Image URL
          </label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            {...register("image", {
              required: "Image URL is required",
            })}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
          {errors.image && (
            <p className="text-sm text-red-500 mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Description
          </label>
          <textarea
            placeholder="Enter product description"
            rows={4}
            {...register("description", { required: "Description is required" })}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
          />
          {errors.description && (
            <p className="text-sm text-red-500 mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Form Actions */}
        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            className="flex-1 bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition"
          >
            Add Product
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-muted transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;

"use client";

import ProductCard from '@/Components/ShoppingApp/Product/ProductCard'
import AddProductForm from '@/Components/ShoppingApp/Product/AddProductForm'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/lib/features/product/ProductSlice';
import type { AppDispatch, RootState } from '@/lib/store/store';


const ProductListView = () => {
  const dispatch = useDispatch<AppDispatch>()

  const products = useSelector((state: RootState) => state.products.products)

  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => setShowForm((prev) => !prev)


  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])

  return (
    <div className='w-full mx-auto px-10 py-20'>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">Products</h1>
        <button
          type="button"
          onClick={toggleForm}
          className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition"
        >
          <Plus size={20} />
          {showForm ? 'Hide Form' : 'Add Product'}
        </button>
      </div>

      {/* Add Product Form (Card) */}
      {showForm && (
        <div className="mb-10">
          <AddProductForm  onCancel={toggleForm} />
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductListView

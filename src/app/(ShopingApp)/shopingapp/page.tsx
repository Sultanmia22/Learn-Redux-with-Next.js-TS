import React from 'react'

const ShopingApp = () => {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero/Banner */}
      <section className="bg-cyan-600 text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-xl">Discover amazing products at great prices</p>
        <button className="mt-6 bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>

      {/* Section 2: Featured Categories */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Shop by Category</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Men', 'Women', 'Sports', 'Accessories'].map((category) => (
            <div key={category} className="text-center p-8 bg-white rounded-lg hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-cyan-600">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: About/Features */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Free Shipping', desc: 'On orders over $50' },
            { title: 'Quality Products', desc: 'Guaranteed satisfaction' },
            { title: '24/7 Support', desc: 'Always here to help' }
          ].map((item) => (
            <div key={item.title} className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-600 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'John Doe', review: 'Great products and excellent service!' },
            { name: 'Jane Smith', review: 'Fast delivery and quality items. Highly recommend!' }
          ].map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
              <p className="text-cyan-600 font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Newsletter */}
      <section className="bg-cyan-600 text-white py-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get the latest updates and exclusive offers</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-gray-800"
            />
            <button className="bg-white text-cyan-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopingApp
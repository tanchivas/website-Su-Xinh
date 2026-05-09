import { ShoppingBag } from 'lucide-react'

const products = [
  { name: "Set Áo Váy Chấm Bi Hè", price: "195.000đ", image: "/san-pham-1.jpg" },
  { name: "Combo Son Phấn Rạng Rỡ", price: "120.000đ", image: "/san-pham-2.jpg" },
  { name: "Túi Da Phối Màu Hiện Đại", price: "185.000đ", image: "/san-pham-3.jpg" },
  { name: "Áo Sơ Mi Bèo Nhún Tiểu Thư", price: "220.000đ", image: "/san-pham-4.jpg" },
]

export function Products() {
  return (
    <section className="w-full max-w-[1400px] mx-auto mt-20 mb-20">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#0a1b33]">Bộ Sưu Tập Chào Hè</h2>
          <p className="text-slate-500 mt-2">Bắt trọn ánh nắng rực rỡ với những item tươi mát và xu hướng nhất mùa này</p>
        </div>
        <a 
          href="https://www.facebook.com/xiaohahathaixuyen/photos?locale=vi_VN" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block text-[#0a1b33] font-medium hover:underline"
        >
          Xem tất cả
        </a>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {products.map((product, i) => (
          <div key={i} className="min-w-[280px] md:min-w-[320px] snap-start group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden mb-4 h-[400px]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <button className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all hover:bg-[#0a1b33] hover:text-white">
                <ShoppingBag size={20} />
              </button>
            </div>
            <h3 className="font-medium text-lg text-[#0a1b33]">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const categories = [
  { 
    title: "Quần áo", 
    subtitle: "Mặc đẹp mỗi ngày",
    hoverText: "Khám phá 500+ mẫu mới",
    link: "https://www.facebook.com/media/set/?set=a.122099767869308329&type=3",
    images: [
      "/quan-ao-1.jpg",
      "/quan-ao-2.jpg",
      "/quan-ao-3.jpg"
    ], 
    span: "md:col-span-2 md:row-span-2" 
  },
  { 
    title: "Mỹ phẩm", 
    subtitle: "Chăm sóc toàn diện",
    hoverText: "Tôn vinh nét đẹp",
    link: "https://www.facebook.com/media/set/?set=a.122098081401308329&type=3",
    images: [
      "/my-pham-1.png",
      "/my-pham-2.png",
      "/my-pham-3.png"
    ], 
    span: "md:col-span-1 md:row-span-1" 
  },
  { 
    title: "Phụ kiện", 
    subtitle: "Điểm nhấn tinh tế",
    hoverText: "Hoàn thiện phong cách",
    link: "https://www.facebook.com/media/set/?set=a.122098309353308329&type=3",
    images: [
      "/phu-kien-1.png",
      "/phu-kien-2.png",
      "/phu-kien-3.png"
    ], 
    span: "md:col-span-1 md:row-span-1" 
  },
]

function CategoryCard({ cat }: { cat: typeof categories[0] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cat.images.length)
    }, 3500) // Change image every 3.5 seconds
    return () => clearInterval(timer)
  }, [cat.images.length])

  return (
    <motion.a 
      href={cat.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer block ${cat.span}`}
    >
      {/* Auto-slider Backgrounds */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={cat.images[currentIndex]}
            alt={cat.title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-[center_25%] transition-transform duration-[2000ms] group-hover:scale-110"
          />
        </AnimatePresence>
      </div>

      {/* Dark Overlay Gradient from bottom to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b33]/90 via-[#0a1b33]/40 to-transparent group-hover:from-[#0a1b33]/95 transition-colors duration-500 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-end">
        <span className="bg-[#e84e1b] text-white px-3 py-1 rounded-md text-[11px] font-bold mb-3 uppercase tracking-widest w-fit shadow-lg">{cat.subtitle}</span>
        <h3 className="text-3xl font-display font-bold text-white mb-5">{cat.title}</h3>
        
        {/* Dynamic Hover Button */}
        <div className="w-fit overflow-hidden bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-[#0a1b33] transition-all duration-300 flex items-center group/btn border border-white/10">
          <span>Xem ngay</span>
          {/* Hidden text that expands on hover */}
          <div className="max-w-0 overflow-hidden opacity-0 group-hover/btn:max-w-xs group-hover/btn:opacity-100 group-hover/btn:ml-2 group-hover/btn:mr-1 transition-all duration-500 whitespace-nowrap flex items-center">
            <span className="mr-1">-</span> {cat.hoverText} <ArrowRight size={14} className="ml-1" />
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export function Categories() {
  return (
    <section id="categories" className="w-full max-w-[1400px] mx-auto mt-24 scroll-mt-10 px-4 md:px-0 mb-24">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0a1b33]">Định hình phong cách cùng Su Xinh</h2>
        <p className="text-slate-500 mt-6 text-lg">Từ những bộ cánh thời thượng đến bí quyết chăm sóc da rạng rỡ, chúng tôi có mọi thứ bạn cần.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-[800px] md:h-[650px]">
        {categories.map((cat, i) => (
          <CategoryCard key={i} cat={cat} />
        ))}
      </div>
    </section>
  )
}

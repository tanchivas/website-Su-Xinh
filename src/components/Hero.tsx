import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronRight, Smile, X } from 'lucide-react'

export function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          {/* Lớp phủ màu cam đỏ đặc trưng của Xiao haha */}
          <div className="absolute inset-0 bg-[#e84e1b]/30 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 blur-[2px]"
            src="/store-bg.jpg"
            alt="Su Xinh Store"
          />
        </div>

        <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20"
          >
            <h1 className="font-display text-[42px] md:text-[56px] font-medium tracking-tight text-white leading-tight" dangerouslySetInnerHTML={{ __html: 'Su Xinh - Đẹp tự tin,<br />tỏa sáng khí chất' }} />
            <p className="font-sans text-[14px] md:text-[15px] text-slate-200 font-medium max-w-xl mt-4">
              Nâng tầm phong cách, kế thừa tinh hoa làm đẹp từ Xiao haha Thái Xuyên. Vẫn là chúng tôi, nhưng xinh đẹp và chuyên nghiệp hơn.
            </p>
            <motion.button 
              onClick={scrollToCategories}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#e84e1b] text-white px-6 py-3 rounded-full font-medium shadow-xl hover:bg-[#d84315] transition-colors"
            >
              Mua sắm ngay
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-[90%] md:w-auto">
          <motion.nav 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-between md:justify-center gap-2 bg-white/95 backdrop-blur-2xl px-2 py-2 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
          >
            <div className="flex items-center pl-2 pr-4 md:pr-8 border-r border-slate-200">
              <div className="w-10 h-10 bg-[#e84e1b]/10 text-[#e84e1b] rounded-full flex items-center justify-center mr-3">
                <Smile size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-[16px] text-[#0a1b33] leading-none">Su Xinh</span>
                <span className="text-[10px] text-[#e84e1b] font-medium mt-0.5">Tiền thân: Xiao haha Thái Xuyên</span>
              </div>
            </div>

            <div className="hidden md:flex items-center px-4">
              <button 
                onClick={scrollToAbout}
                className="px-4 text-[13px] font-semibold text-slate-600 hover:text-[#e84e1b] transition-colors"
              >
                Câu chuyện
              </button>
              <button 
                onClick={scrollToCategories}
                className="px-4 text-[13px] font-semibold text-slate-600 hover:text-[#e84e1b] transition-colors"
              >
                Sản phẩm
              </button>
            </div>

            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#e84e1b] px-5 py-2 rounded-full text-[13px] font-semibold text-white shadow-sm hover:bg-[#d84315] transition-all flex items-center gap-1 shrink-0"
            >
              Liên hệ
              <ChevronRight size={14} />
            </button>
          </motion.nav>
        </div>
      </div>

      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsContactModalOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[32px] p-8 shadow-2xl overflow-hidden z-10"
            >
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 transition-colors"
              >
                <X size={18} />
              </button>
              
              <div className="flex flex-col items-center text-center mt-2">
                <div className="w-16 h-16 bg-[#e84e1b]/10 text-[#e84e1b] rounded-2xl flex items-center justify-center mb-4">
                  <Smile size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0a1b33]">Thông tin liên hệ</h3>
                <p className="text-slate-500 text-sm mt-2">Hãy kết nối với chúng tôi qua các nền tảng dưới đây</p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a href="https://zalo.me/0879539882" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors group">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    Zalo
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-800">Zalo & Điện thoại</span>
                    <span className="text-sm text-blue-600 font-medium">0879 539 882</span>
                  </div>
                </a>

                <a href="https://www.facebook.com/xiaohahathaixuyen/?locale=vi_VN" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                  <div className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center">
                    <img src="https://cdn.simpleicons.org/facebook/white" alt="Facebook" className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-800">Facebook</span>
                    <span className="text-sm text-slate-500 group-hover:text-slate-800 transition-colors">Xiao haha Thái Xuyên</span>
                  </div>
                </a>

                <a href="https://www.instagram.com/suxinh.official?igsh=MXR2Yzdxd2dhOWNsOA==" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors group">
                  <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center">
                    <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-800">Instagram</span>
                    <span className="text-sm text-slate-500 group-hover:text-slate-800 transition-colors">suxinh.official</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

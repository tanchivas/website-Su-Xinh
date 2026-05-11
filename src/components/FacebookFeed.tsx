import { useEffect } from 'react'

export function FacebookFeed() {
  useEffect(() => {
    // Tải script của Behold khi component được mount
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://w.behold.so/widget.js'
    document.head.append(script)
    
    return () => {
      // Clean up nếu cần
    }
  }, [])

  return (
    <section className="w-full max-w-[1400px] mx-auto mt-24 mb-24 px-4 md:px-0">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0a1b33]">Mẫu mới mỗi ngày</h2>
        <p className="text-slate-500 mt-4">Cập nhật những bộ cánh mới nhất trực tiếp từ Fanpage Su Xinh</p>
      </div>
      
      <div className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-4 md:p-8 bg-white">
        {/* Widget Behold tự động lấy ảnh từ Facebook */}
        {/* @ts-ignore */}
        <behold-widget feed-id="sCtYaTmvSA2D4qtMAEky"></behold-widget>
      </div>
      
      <div className="mt-8 text-center">
        <a 
          href="https://www.facebook.com/xiaohahathaixuyen" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 bg-[#e84e1b] text-white rounded-full font-medium hover:bg-[#cf4418] transition-all duration-300 shadow-lg shadow-orange-200"
        >
          Xem thêm trên Facebook
        </a>
      </div>
    </section>
  )
}

// Khai báo kiểu dữ liệu cho custom element để tránh lỗi TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'behold-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'feed-id': string }, HTMLElement>;
    }
  }
}

import { motion } from 'motion/react'
import { Gem, LayoutGrid, Star } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="w-full max-w-[1400px] mx-auto mt-24 mb-20 px-4 md:px-0 scroll-mt-20">
      {/* 1. Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-[#0a1b33] mb-4"
        >
          Câu chuyện của Su Xinh
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-500 font-medium"
        >
          Từ niềm đam mê tại Thái Xuyên đến hành trình nâng tầm phong cách.
        </motion.p>
      </div>

      {/* 2. Zig-zag Story */}
      <div className="flex flex-col gap-24 mb-24">
        {/* Khối 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-2xl"
          >
            <div className="absolute inset-0 bg-[#e84e1b]/10 z-10 mix-blend-overlay" />
            <img src="/anh-cu.jpg" alt="Xiao haha days" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 px-4 md:px-0"
          >
            <h3 className="text-3xl font-display font-bold text-[#0a1b33] mb-6">Cội nguồn từ Xiao haha</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Bắt đầu từ những ngày đầu tiên với tên gọi <strong>Xiao haha Thái Xuyên</strong>, chúng tôi đã may mắn được đồng hành cùng hàng nghìn khách hàng trong việc định hình phong cách cá nhân. Mỗi bộ trang phục, mỗi món phụ kiện hay sản phẩm mỹ phẩm trao đến tay bạn đều gói trọn tâm huyết và sự tận tâm của đội ngũ chúng tôi.
            </p>
          </motion.div>
        </div>

        {/* Khối 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-2xl"
          >
            <div className="absolute inset-0 bg-[#e84e1b]/10 z-10 mix-blend-overlay" />
            <img src="/store-bg.jpg" alt="Su Xinh upgrade" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 px-4 md:px-0"
          >
            <h3 className="text-3xl font-display font-bold text-[#e84e1b] mb-6">Sự chuyển mình sang Su Xinh</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Thời gian trôi qua, mong muốn mang lại một không gian mua sắm hiện đại, tinh tế và chuyên nghiệp hơn đã thôi thúc chúng tôi thay đổi. <strong>Su Xinh</strong> ra đời không chỉ là một cái tên mới, mà là một lời khẳng định về sự hoàn thiện. Chúng tôi hiểu rằng, vẻ đẹp của bạn xứng đáng được tôn vinh trong một diện mạo mới mẻ và đẳng cấp hơn.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3. Lời cam kết (Grid) */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 mb-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0a1b33]">Tại Su Xinh, chúng tôi cam kết</h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Tập trung mang lại giá trị thực tế nhất cho khách hàng thông qua sản phẩm chất lượng, giá cả phải chăng và dịch vụ tận tâm.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#e84e1b]/10 text-[#e84e1b] rounded-2xl flex items-center justify-center mb-6">
              <Gem size={32} />
            </div>
            <h4 className="text-xl font-bold text-[#0a1b33] mb-4">Chất lượng vượt giá thành</h4>
            <p className="text-slate-600 leading-relaxed">Chúng tôi chọn lọc kỹ lưỡng từng sản phẩm, đảm bảo chất lượng cao nhất trong tầm giá để bạn luôn an tâm mua sắm.</p>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#e84e1b]/10 text-[#e84e1b] rounded-2xl flex items-center justify-center mb-6">
              <LayoutGrid size={32} />
            </div>
            <h4 className="text-xl font-bold text-[#0a1b33] mb-4">Thế giới lựa chọn đa dạng</h4>
            <p className="text-slate-600 leading-relaxed">Từ mỹ phẩm đến thời trang, danh mục sản phẩm luôn được cập nhật mới mỗi ngày, đáp ứng mọi phong cách bạn theo đuổi.</p>
          </motion.div>

          {/* Item 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 hover:bg-slate-100 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#e84e1b]/10 text-[#e84e1b] rounded-2xl flex items-center justify-center mb-6">
              <Star size={32} />
            </div>
            <h4 className="text-xl font-bold text-[#0a1b33] mb-4">Nâng tầm trải nghiệm</h4>
            <p className="text-slate-600 leading-relaxed">Không chỉ là mua sắm, mỗi không gian và dịch vụ tại Su Xinh đều hướng tới sự thoải mái và tự tin tuyệt đối cho khách hàng.</p>
          </motion.div>
        </div>
      </div>

      {/* 4. Banner Tri ân */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[300px] md:h-[400px] rounded-[40px] overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[#0a1b33]/70 z-10 mix-blend-multiply" />
        <img src="/anh-tri-an.jpg" alt="Thank you" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 text-center px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
            Cảm ơn bạn đã là một phần<br />trong hành trình của chúng tôi.
          </h2>
          <div className="w-24 h-1 bg-[#e84e1b] mx-auto mt-6 md:mt-8 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

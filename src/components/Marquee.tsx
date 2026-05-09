import { cn } from '../lib/utils'

const socialLinks = [
  { name: 'Facebook', src: 'https://cdn.simpleicons.org/facebook', gradient: 'from-blue-500/20 to-blue-600/20', url: 'https://www.facebook.com/xiaohahathaixuyen/?locale=vi_VN' },
  { name: 'Instagram', src: 'https://cdn.simpleicons.org/instagram', gradient: 'from-pink-500/20 to-orange-500/20', url: 'https://www.instagram.com/suxinh.official?igsh=MXR2Yzdxd2dhOWNsOA==' },
  { name: 'Zalo', src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg', gradient: 'from-blue-400/20 to-blue-500/20', url: 'https://zalo.me/0879539882' },
  { name: 'TikTok', src: 'https://cdn.simpleicons.org/tiktok', gradient: 'from-slate-800/20 to-black/20', url: 'https://tiktok.com/' },
]

const repeatedLinks = [...socialLinks, ...socialLinks, ...socialLinks]

export function Marquee() {
  return (
    <div className="mt-10 overflow-hidden w-full max-w-[1400px] mx-auto py-4" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div className="flex w-fit animate-scroll hover:[animation-play-state:paused] gap-4 pr-4">
        {[...repeatedLinks, ...repeatedLinks].map((link, index) => (
          <a href={link.url} target="_blank" rel="noreferrer" key={index} className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-pointer">
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 scale-150 group-hover:scale-100 transition-all duration-500 z-0", link.gradient)} />
            <img src={link.src} alt={link.name} className="h-10 object-contain relative z-10 transition-all duration-300 group-hover:scale-110" />
          </a>
        ))}
      </div>
    </div>
  )
}

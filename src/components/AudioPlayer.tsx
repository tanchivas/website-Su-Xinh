import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(e => console.error("Autoplay prevented:", e))
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Tự động phát nhạc khi người dùng tương tác lần đầu tiên (click vào bất cứ đâu)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {}) // Bỏ qua lỗi nếu trình duyệt vẫn chặn
      }
      document.removeEventListener('click', handleFirstInteraction)
    }
    
    document.addEventListener('click', handleFirstInteraction)
    return () => document.removeEventListener('click', handleFirstInteraction)
  }, [isPlaying])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio 
        ref={audioRef} 
        loop 
        src="https://cdn.pixabay.com/download/audio/2022/11/22/audio_feb6305a41.mp3?filename=aesthetic-lofi-126207.mp3" 
      />
      <button 
        onClick={(e) => {
          e.stopPropagation()
          togglePlay()
        }}
        className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-[#0a1b33] border border-slate-200 hover:scale-110 transition-all duration-300 group"
      >
        {isPlaying ? (
          <Volume2 size={20} className="animate-pulse text-[#0a1b33]" />
        ) : (
          <VolumeX size={20} className="text-slate-400 group-hover:text-[#0a1b33]" />
        )}
      </button>
    </div>
  )
}

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, SkipForward } from 'lucide-react'

const playlist = [
  '/nhac-1.mp3',
  '/nhac-2.mp3',
  '/nhac-3.mp3'
]

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Chọn một bài hát ngẫu nhiên khi bắt đầu
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * playlist.length)
    setCurrentTrackIndex(randomIndex)
  }, [])

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

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length)
    setIsPlaying(true)
  }

  // Tự động chuyển bài khi kết thúc bài cũ
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      handleNextTrack()
    }

    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [])

  // Tự động phát khi đổi bài (nếu đang bật)
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false))
    }
  }, [currentTrackIndex])

  // Tự động phát nhạc khi người dùng tương tác lần đầu tiên
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {}) 
      }
      document.removeEventListener('click', handleFirstInteraction)
    }
    
    document.addEventListener('click', handleFirstInteraction)
    return () => document.removeEventListener('click', handleFirstInteraction)
  }, [isPlaying])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <audio 
        ref={audioRef} 
        src={playlist[currentTrackIndex]} 
      />
      
      {isPlaying && (
        <button 
          onClick={handleNextTrack}
          className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-[#0a1b33] border border-slate-200 hover:scale-110 transition-all duration-300 group"
          title="Bài tiếp theo"
        >
          <SkipForward size={16} />
        </button>
      )}

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

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'

const stats = [
  { value: '1.0', label: '산가 기준', unit: '이하' },
  { value: '0.1', label: '산패 지수', unit: '%' },
  { value: '24/7', label: 'IoT 모니터링', unit: '' },
]

const carouselItems = [
  {
    image: '/heroBackground.png',
    title: 'IoT 기반 실시간 모니터링',
    description: '센서 데이터로 신선도를 실시간으로 확인하고 산패를 예측합니다',
  },
  {
    image: '/heroBackground.png',
    title: '산패 알고리즘 품질 보증',
    description: '산가 1.0 이하의 신선한 커피오일만을 선별하여 제공합니다',
  },
  {
    image: '/heroBackground.png',
    title: '초임계 CO₂ 추출',
    description: '고기능성 성분이 풍부한 순수한 오일을 추출합니다',
  },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1: left, 1: right

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }
  return (
    <section id="hero" className="relative h-screen w-full flex items-center overflow-hidden snap-start snap-always" style={{ background: 'linear-gradient(135deg, rgba(75, 54, 33, 0.05) 0%, rgba(224, 192, 89, 0.08) 50%, rgba(255, 255, 255, 0.95) 100%)' }}>
      <div className="w-full h-full relative flex">
        {/* 왼쪽: 텍스트 영역 - 배경이 우측 절반 전체를 차지 */}
        <div className="relative z-10 h-full flex items-center lg:w-1/2 w-full">
          {/* 배경 박스 - 우측 절반 전체를 차지 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute inset-0 right-0 h-full backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(75, 54, 33, 0.15) 0%, rgba(224, 192, 89, 0.2) 50%, rgba(255, 255, 255, 0.95) 100%)',
              boxShadow: '0 8px 32px rgba(75, 54, 33, 0.1)'
            }}
          />
          {/* 텍스트 콘텐츠 - 좌우 패딩만 적용 */}
          <div className="relative z-10 w-full px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-[600px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-left py-2 sm:py-4 md:py-6 lg:py-12"
              >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-1 sm:mb-2 md:mb-3 text-white lg:text-coffee"
              >
                PURECOFFOIL®
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white lg:text-coffee mb-1.5 sm:mb-2 md:mb-3 font-normal"
              >
                데이터가 증명하는 신선함
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-[10px] sm:text-xs md:text-sm text-white/90 lg:text-coffee-dark mb-1 sm:mb-1.5 md:mb-2 font-normal"
              >
                IoT 기반 실시간 모니터링으로 신선도를 보장하는 커피박 업사이클링 오일
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-[9px] sm:text-[10px] md:text-xs text-white/90 lg:text-coffee-dark mb-1 sm:mb-1.5 md:mb-2 font-normal leading-tight sm:leading-relaxed"
              >
                산패 알고리즘을 통해 산가 1.0 이하의 신선한 커피오일만을 사용합니다.
                실시간 센서 데이터로 온도, 습도, 가스를 모니터링하여 품질을 보증합니다.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-[9px] sm:text-[10px] md:text-xs text-white/90 lg:text-coffee-dark mb-2 sm:mb-3 md:mb-5 font-normal leading-tight sm:leading-relaxed"
              >
                초임계 CO₂ 추출 공법으로 디테르펜 등 고기능성 성분이 풍부한 원료를 제공합니다.
              </motion.div>

              {/* 통계 카드들 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="border-l-2 border-white/50 lg:border-coffee pl-1.5 sm:pl-2 md:pl-3 lg:pl-4"
                  >
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white lg:text-coffee mb-0.5 sm:mb-1">
                      {stat.value}
                      {stat.unit && <span className="text-xs sm:text-sm md:text-base"> {stat.unit}</span>}
                    </h2>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-white/80 lg:text-coffee-dark font-normal">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex justify-start mt-6"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown size={14} className="text-coffee-medium" />
                </motion.div>
              </motion.div>
            </motion.div>
            </div>
          </div>
        </div>

        {/* 오른쪽: 캐러셀 (화면 오른쪽을 꽉 채움) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-0 top-0 w-1/2 h-full lg:block hidden"
        >
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              {carouselItems.map((item, index) => {
                if (index !== currentIndex) return null
                return (
                  <motion.div
                    key={index}
                    custom={direction}
                    initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ 
                      x: direction > 0 ? '-100%' : '100%',
                      transition: { duration: 0.5, ease: 'easeInOut' }
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-coffee/50 to-transparent flex items-end pb-24">
                        <div className="w-full px-6 lg:px-8">
                          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                            {item.title}
                          </h1>
                          <div className="text-base sm:text-lg text-white/95 drop-shadow-md">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>

            {/* 네비게이션 버튼 (하단 중앙) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-11 h-11 flex items-center justify-center bg-transparent hover:bg-coffee/20 border border-white/50 hover:border-white rounded-full transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              
              {/* Dots 인디케이터 */}
              <div className="flex gap-2 items-center">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative transition-all ${
                      index === currentIndex 
                        ? 'w-8 h-2' 
                        : 'w-2 h-2'
                    } rounded-full ${
                      index === currentIndex
                        ? 'bg-coffee'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {index === currentIndex && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute inset-0 bg-coffee rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-11 h-11 flex items-center justify-center bg-transparent hover:bg-coffee/20 border border-white/50 hover:border-white rounded-full transition-all"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 모바일: 캐러셀 (전체 화면) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute inset-0 w-full h-full lg:hidden"
        >
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              {carouselItems.map((item, index) => {
                if (index !== currentIndex) return null
                return (
                  <motion.div
                    key={index}
                    custom={direction}
                    initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ 
                      x: direction > 0 ? '-100%' : '100%',
                      transition: { duration: 0.5, ease: 'easeInOut' }
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-coffee/90 via-coffee/50 to-transparent flex items-end pb-16 sm:pb-20 md:pb-24">
                        <div className="w-full px-4 sm:px-6">
                          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">
                            {item.title}
                          </h1>
                          <div className="text-xs sm:text-sm md:text-base text-white/95 drop-shadow-md">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>

            {/* 네비게이션 버튼 (하단 중앙) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-11 h-11 flex items-center justify-center bg-transparent hover:bg-coffee/20 border border-white/50 hover:border-white rounded-full transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              
              {/* Dots 인디케이터 */}
              <div className="flex gap-2 items-center">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative transition-all ${
                      index === currentIndex 
                        ? 'w-8 h-2' 
                        : 'w-2 h-2'
                    } rounded-full ${
                      index === currentIndex
                        ? 'bg-coffee'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {index === currentIndex && (
                      <motion.div
                        layoutId="activeDotMobile"
                        className="absolute inset-0 bg-coffee rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-11 h-11 flex items-center justify-center bg-transparent hover:bg-coffee/20 border border-white/50 hover:border-white rounded-full transition-all"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

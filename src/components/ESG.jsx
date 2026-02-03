import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Leaf, Users, TrendingUp, Heart } from 'lucide-react'

const esgValues = [
  {
    icon: Leaf,
    title: 'Environmental',
    description: '커피박 업사이클링을 통한 자원 순환 및 폐기물 감소',
    color: 'text-coffee',
    bgColor: 'bg-coffee-light',
  },
  {
    icon: Users,
    title: 'Social',
    description: '지역 커뮤니티와의 협력 및 지속가능한 생산 체계 구축',
    color: 'text-coffee',
    bgColor: 'bg-gold-light',
  },
  {
    icon: TrendingUp,
    title: 'Governance',
    description: '투명한 공급망 관리 및 데이터 기반 품질 보증',
    color: 'text-coffee',
    bgColor: 'bg-coffee-medium',
  },
  {
    icon: Heart,
    title: 'Value Creation',
    description: '고기능성 원료 제공으로 산업 전반의 가치 창출',
    color: 'text-coffee',
    bgColor: 'bg-gold-medium',
  },
]

function ESGCard({ icon: Icon, title, description, color, bgColor, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  
  // 양옆에서 번갈아가며 오도록
  const xDirection = index % 2 === 0 ? -100 : 100

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xDirection, y: 20 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: xDirection, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`${bgColor} rounded-xl p-2.5 sm:p-3 md:p-4 lg:p-5 shadow-lg hover:shadow-xl transition-shadow border-2 border-coffee-light`}
    >
      <div className={`${color} mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5`}>
        <Icon size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </div>
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-coffee mb-1 sm:mb-1.5 md:mb-2">{title}</h3>
      <p className="text-coffee-dark text-xs sm:text-sm md:text-base leading-relaxed font-normal">{description}</p>
    </motion.div>
  )
}

export default function ESG() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section ref={ref} id="esg" className="relative h-screen w-full flex items-center justify-center snap-start snap-always" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 192, 89, 0.08) 50%, rgba(75, 54, 33, 0.05) 100%)' }}>
      <div className="w-full max-w-[1920px] mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-5 md:mb-7"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 sm:mb-2.5 text-coffee relative inline-block w-full">
              ESG
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[36px] h-0.5 bg-gradient-to-r from-coffee to-coffee-dark rounded"></span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-coffee-dark max-w-2xl mx-auto font-normal">
              우리가 추구하는 가치와 우리로부터 생기는 가치
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {esgValues.map((value, index) => (
              <ESGCard key={index} {...value} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

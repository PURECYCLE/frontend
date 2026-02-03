import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle, XCircle, FileX } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: '높은 산패 위험',
    description: '수입산 커피 오일은 운송 및 보관 과정에서 산패가 발생할 위험이 높습니다.',
    color: 'text-coffee',
    borderColor: 'border-coffee',
    bgColor: 'bg-coffee-light',
  },
  {
    icon: FileX,
    title: '이력 확인 불가',
    description: '원료의 출처와 처리 과정에 대한 투명한 이력 추적이 어렵습니다.',
    color: 'text-coffee',
    borderColor: 'border-gold',
    bgColor: 'bg-gold-light',
  },
  {
    icon: XCircle,
    title: '품질 불안정',
    description: '산패로 인한 품질 저하로 일관된 제품 생산이 어렵습니다.',
    color: 'text-coffee',
    borderColor: 'border-coffee-dark',
    bgColor: 'bg-coffee-medium',
  },
]

function ProblemCard({ icon: Icon, title, description, color, borderColor, bgColor, index }) {
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
      className={`bg-white border-2 ${borderColor} rounded-xl p-2.5 sm:p-3 md:p-4 lg:p-5 shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className={`${bgColor} w-8 h-8 sm:w-10 md:w-12 rounded-full flex items-center justify-center mb-1.5 sm:mb-2 md:mb-2.5`}>
        <Icon size={16} className={`sm:w-5 sm:h-5 md:w-6 md:h-6 ${color}`} />
      </div>
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-coffee mb-1 sm:mb-1.5 md:mb-2">{title}</h3>
      <p className="text-coffee-dark text-xs sm:text-sm md:text-base leading-relaxed font-normal">{description}</p>
    </motion.div>
  )
}

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section ref={ref} id="problem" className="relative h-screen w-full flex items-center justify-center snap-start snap-always" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(224, 192, 89, 0.05) 50%, rgba(75, 54, 33, 0.03) 100%)' }}>
      <div className="w-full max-w-[1920px] mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-5 md:mb-7"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 sm:mb-2.5 text-coffee relative inline-block w-full">
              Problem
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[36px] h-0.5 bg-gradient-to-r from-coffee to-coffee-dark rounded"></span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-coffee-dark max-w-2xl mx-auto font-normal">
              기존 수입산 커피 오일의 문제점
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {problems.map((problem, index) => (
              <ProblemCard key={index} {...problem} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

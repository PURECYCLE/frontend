import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Package, Cpu, FlaskConical, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Package,
    title: '커피박 수거',
    description: '신선한 커피박을 체계적으로 수거합니다',
    step: '01',
  },
  {
    icon: Cpu,
    title: 'IoT 모니터링',
    description: '실시간 센서로 온도, 습도, 가스를 모니터링합니다',
    step: '02',
  },
  {
    icon: FlaskConical,
    title: '초임계 CO₂ 추출',
    description: '고온고압 초임계 상태에서 순수한 오일을 추출합니다',
    step: '03',
  },
  {
    icon: Sparkles,
    title: '고기능성 원료 탄생',
    description: '디테르펜 등 고기능성 성분이 풍부한 원료가 완성됩니다',
    step: '04',
  },
]

function ProcessStep({ icon: Icon, title, description, step, index }) {
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
      className="relative"
    >
      <div className="bg-white rounded-xl p-2.5 sm:p-3 md:p-4 lg:p-5 shadow-lg hover:shadow-xl transition-shadow border-2 border-gold-light">
        <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 md:w-12 bg-gold-light rounded-full flex items-center justify-center mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5 border-2 border-coffee-light">
              <Icon size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-coffee" />
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gold opacity-50">{step}</div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-coffee mb-1 sm:mb-1.5 md:mb-2">{title}</h3>
            <p className="text-xs sm:text-sm md:text-base text-coffee-dark leading-relaxed font-normal">{description}</p>
          </div>
        </div>
      </div>
      
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 left-full w-14 h-0.5 bg-gold-light transform translate-x-0">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
            className="h-full bg-gold origin-left"
          />
        </div>
      )}
    </motion.div>
  )
}

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  return (
    <section ref={ref} id="process" className="relative h-screen w-full flex items-center justify-center snap-start snap-always" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(224, 192, 89, 0.05) 50%, rgba(75, 54, 33, 0.03) 100%)' }}>
      {/* 1920:1080 비율 컨테이너 */}
      <div className="w-full max-w-[1920px] mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-5 md:mb-7"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 sm:mb-2.5 text-coffee relative inline-block w-full">
              Process
              <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[36px] h-0.5 bg-gradient-to-r from-coffee to-coffee-dark rounded"></span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-coffee-dark max-w-2xl mx-auto font-normal">
              커피박에서 고기능성 원료까지의 4단계 여정
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {steps.map((step, index) => (
                <ProcessStep key={index} {...step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

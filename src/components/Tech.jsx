import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Database, Shield, Award } from 'lucide-react'

const techFeatures = [
  {
    icon: Cpu,
    title: 'IoT 센싱 기술',
    description: '실시간 산패 모니터링을 위한 고정밀 센서 시스템',
    color: 'text-coffee',
  },
  {
    icon: Database,
    title: '산패 예찰 알고리즘',
    description: '특허 출원된 데이터 기반 예측 모델로 신선도 보장',
    color: 'text-coffee',
  },
  {
    icon: Shield,
    title: '품질 보증 시스템',
    description: '수입산 오일의 산패 문제를 근본적으로 해결',
    color: 'text-coffee',
  },
  {
    icon: Award,
    title: '데이터 기반 품질 관리',
    description: '투명하고 검증 가능한 품질 데이터 제공',
    color: 'text-coffee',
  },
]

function TechCard({ icon: Icon, title, description, color, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-pastel-cream backdrop-blur-sm border border-coffee-light rounded-xl p-6 hover:border-coffee-medium transition-all shadow-sm"
    >
      <div className={`${color} mb-4`}>
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-coffee">{title}</h3>
      <p className="text-coffee-dark">{description}</p>
    </motion.div>
  )
}

export default function Tech() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="tech" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-pastel-coffee">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-coffee">
            핵심 기술력
          </h2>
          <p className="text-xl text-coffee-dark max-w-2xl mx-auto">
            IoT 센서 기반 산패 예찰 알고리즘으로 신선도를 보장하는 혁신적인 시스템
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techFeatures.map((feature, index) => (
            <TechCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

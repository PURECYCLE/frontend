import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Droplet, Leaf, Zap, Award } from 'lucide-react'

const productFeatures = [
  {
    icon: Droplet,
    title: '초임계 추출 공법',
    description: '고온고압의 초임계 상태에서 추출하여 순도 높은 오일을 얻습니다.',
    highlight: '99.9% 순도',
  },
  {
    icon: Leaf,
    title: '디테르펜 함유',
    description: '화장품 성분으로 검증된 디테르펜 등 고기능성 성분을 풍부하게 함유합니다.',
    highlight: '고기능성',
  },
  {
    icon: Zap,
    title: '신선도 보증',
    description: 'IoT 기반 산패 예찰 알고리즘으로 산패를 예측하고 신선도를 보장합니다.',
    highlight: '데이터 기반',
  },
  {
    icon: Award,
    title: '글로벌 표준',
    description: 'K-뷰티 브랜드 및 OEM/ODM 제조사가 신뢰하는 품질 기준을 충족합니다.',
    highlight: '인증 완료',
  },
]

function ProductCard({ icon: Icon, title, description, highlight, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-pastel-cream backdrop-blur-sm border border-coffee-light rounded-xl p-8 hover:border-coffee-medium transition-all group shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-coffee-light rounded-lg group-hover:bg-coffee-medium transition-colors">
          <Icon size={28} className="text-coffee" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold text-coffee">{title}</h3>
            <span className="px-2 py-1 bg-coffee-light text-coffee text-xs font-semibold rounded">
              {highlight}
            </span>
          </div>
          <p className="text-coffee-dark leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Product() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="product" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-coffee">
            <span className="text-gradient">PURECOFFOIL®</span>
          </h2>
          <p className="text-xl text-coffee-dark max-w-2xl mx-auto mb-4">
            PuReCycle의 첫 번째 아이템
          </p>
          <p className="text-lg text-coffee-dark max-w-2xl mx-auto">
            초임계 추출 공법으로 탄생한 혁신적인 화장품 원료
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {productFeatures.map((feature, index) => (
            <ProductCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Problem & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">문제점</h3>
            <ul className="space-y-3 text-coffee-dark">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>수입산 오일의 산패 문제로 품질 불안정</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>신선도 검증 시스템 부재</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">✗</span>
                <span>데이터 기반 품질 관리의 한계</span>
              </li>
            </ul>
          </div>

          <div className="bg-coffee-light border border-coffee-medium rounded-xl p-8">
            <h3 className="text-2xl font-bold text-coffee mb-4">해결책</h3>
            <ul className="space-y-3 text-coffee-dark">
              <li className="flex items-start gap-3">
                <span className="text-coffee mt-1">✓</span>
                <span>IoT 센싱 기반 산패 예찰 알고리즘</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coffee mt-1">✓</span>
                <span>데이터로 보장하는 신선도 관리</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coffee mt-1">✓</span>
                <span>투명하고 검증 가능한 품질 시스템</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

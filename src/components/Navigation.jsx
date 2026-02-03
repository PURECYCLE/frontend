import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Package, ChevronDown } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navigation() {
  const [logoError, setLogoError] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showProductsMenu, setShowProductsMenu] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const products = [
    { name: 'PURECOFFOIL®', path: '/purecoffoil' }
  ]

  // 스크롤 컨테이너 찾기
  const findScrollContainer = () => {
    const container = document.querySelector('.h-screen.overflow-y-scroll')
    return container || window
  }

  // 섹션으로 스크롤하는 함수
  const scrollToSection = (sectionId, container) => {
    const element = document.getElementById(sectionId)
    if (!element) {
      console.warn(`Section with id "${sectionId}" not found`)
      return
    }

    const navbarHeight = 80

    if (container === window) {
      // window 스크롤
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      // div 컨테이너 스크롤
      const containerRect = container.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()
      const scrollTop = container.scrollTop
      const offsetPosition = elementRect.top - containerRect.top + scrollTop - navbarHeight
      container.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      })
    }
  }

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      // 해시 없이 메인 페이지로 이동, state에 섹션 ID 전달
      navigate('/', { state: { scrollTo: sectionId } })
    } else {
      // 같은 페이지에서는 즉시 스크롤
      const scrollContainer = findScrollContainer()
      scrollToSection(sectionId, scrollContainer)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProductsMenu(false)
      }
    }

    if (showProductsMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showProductsMenu])

  useEffect(() => {
    // location state가 없을 때만 해시 처리 (뒤로가기 등)
    if (location.hash && location.pathname === '/' && !location.state?.scrollTo) {
      const sectionId = location.hash.substring(1)
      const scrollContainer = findScrollContainer()
      setTimeout(() => {
        scrollToSection(sectionId, scrollContainer)
      }, 300)
    }
  }, [location.hash, location.pathname, location.state])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all border-b ${
        isScrolled 
          ? 'shadow-md' 
          : ''
      }`}
      style={{
        backgroundColor: '#E0C059',
        borderColor: 'rgba(75, 54, 33, 0.3)',
        opacity: 1
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault()
                handleSectionClick('hero')
              } else {
                e.preventDefault()
                navigate('/', { state: { scrollTo: 'hero' } })
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="PuReCycle" 
                  className="h-16 w-auto"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-2xl font-bold text-coffee">
                  PuReCycle
                </span>
              )}
            </motion.div>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <Link to="/#problem" onClick={(e) => { e.preventDefault(); handleSectionClick('problem'); }} className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-coffee rounded-lg transition-colors"
                style={{ 
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(224, 192, 89, 0.15)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Problem
              </motion.button>
            </Link>
            <Link to="/#solution" onClick={(e) => { e.preventDefault(); handleSectionClick('solution'); }} className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-coffee rounded-lg transition-colors"
                style={{ 
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(224, 192, 89, 0.15)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Solution
              </motion.button>
            </Link>
            <Link to="/#process" onClick={(e) => { e.preventDefault(); handleSectionClick('process'); }} className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-coffee rounded-lg transition-colors"
                style={{ 
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(224, 192, 89, 0.15)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Process
              </motion.button>
            </Link>
            <Link to="/#esg" onClick={(e) => { e.preventDefault(); handleSectionClick('esg'); }} className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-coffee rounded-lg transition-colors"
                style={{ 
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(224, 192, 89, 0.15)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                ESG
              </motion.button>
            </Link>
            <Link to="/#contact" onClick={(e) => { e.preventDefault(); handleSectionClick('contact'); }} className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-coffee rounded-lg transition-colors"
                style={{ 
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(224, 192, 89, 0.15)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Contact
              </motion.button>
            </Link>
                <div 
                  ref={menuRef}
                  className="relative"
                  onMouseEnter={() => setShowProductsMenu(true)}
                  onMouseLeave={() => setShowProductsMenu(false)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 text-white rounded-lg transition-colors shadow-lg cursor-pointer"
                    style={{ 
                      background: 'linear-gradient(135deg, #4B3621 0%, rgba(75, 54, 33, 0.9) 100%)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #E0C059 0%, rgba(224, 192, 89, 0.9) 100%)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #4B3621 0%, rgba(75, 54, 33, 0.9) 100%)'}
                  >
                    <Package size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="hidden sm:inline text-xs sm:text-sm font-medium">Products</span>
                    <ChevronDown size={14} className="sm:w-4 sm:h-4" />
                  </motion.div>

              <AnimatePresence>
                {showProductsMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-coffee-light overflow-hidden z-50"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(224, 192, 89, 0.05) 100%)',
                    }}
                  >
                    {products.map((product, index) => (
                      <Link
                        key={index}
                        to={product.path}
                        className="block px-4 py-3 text-sm text-coffee hover:bg-coffee-light transition-colors border-b border-coffee-light last:border-b-0"
                        onClick={() => setShowProductsMenu(false)}
                      >
                        <div className="font-semibold">{product.name}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

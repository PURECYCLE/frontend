import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Process from './components/Process'
import ESG from './components/ESG'
import Contact from './components/Contact'
import PURECOFFOIL from './pages/PURECOFFOIL'

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

function Home() {
  const location = useLocation()
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    // location state에서 scrollTo 확인
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo
      const scrollContainer = scrollContainerRef.current || findScrollContainer()
      
      setTimeout(() => {
        scrollToSection(sectionId, scrollContainer)
        // state 초기화하여 URL 깔끔하게 유지
        window.history.replaceState({}, '', '/')
      }, 300)
    }
  }, [location.state])

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <ESG />
      <Contact />
    </div>
  )
}

function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purecoffoil" element={<PURECOFFOIL />} />
      </Routes>
    </Router>
  )
}

export default App

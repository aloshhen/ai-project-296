import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart, Star, Play, Users, Music, Sun, ChevronRight, Mail, Phone, MapPin } from 'lucide-react'

// VK Icon Component (Russian Social Network)
const VKIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.042-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.72c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.15-3.574 2.15-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
  </svg>
)

// Yandex Icon Component (Russian Search Engine)
const YandexIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.013 0C5.417 0 0 5.417 0 12.013s5.417 12.013 12.013 12.013 12.013-5.417 12.013-12.013S18.609 0 12.013 0zm3.695 17.5h-2.1v-5.1c0-1.5-.6-2-1.7-2-1.1 0-1.8.6-1.8 2v5.1h-2.1V6.5h2.1v4.3c.6-.9 1.5-1.4 2.7-1.4 1.9 0 3.1 1.2 3.1 3.6v4.5h-.2z"/>
  </svg>
)

// Russian Coat of Arms SVG
const RussianCoatOfArms = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 5 L55 20 L70 20 L58 30 L63 45 L50 35 L37 45 L42 30 L30 20 L45 20 Z" />
    <path d="M50 50 C30 50 20 65 20 80 C20 90 35 95 50 95 C65 95 80 90 80 80 C80 65 70 50 50 50 Z" />
    <path d="M35 60 L40 75 L50 65 L60 75 L65 60" stroke="currentColor" strokeWidth="3" fill="none"/>
  </svg>
)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const characters = [
    {
      name: 'Тинки-Винки',
      color: 'bg-purple-500',
      description: 'Самый высокий и старший из телепузиков. Любит нести красную сумочку.',
      traits: ['Высокий', 'Заботливый', 'Лидер']
    },
    {
      name: 'Дипси',
      color: 'bg-green-500',
      description: 'Второй по высоте телепузик. Носит черно-белую шляпу и любит танцевать.',
      traits: ['Веселый', 'Танцор', 'Модник']
    },
    {
      name: 'Ля-Ля',
      color: 'bg-yellow-400',
      description: 'Желтый телепузик с оранжевым мячом. Самая игривая и жизнерадостная.',
      traits: ['Игривая', 'Веселая', 'Спортивная']
    },
    {
      name: 'По',
      color: 'bg-red-500',
      description: 'Самый маленький и младший телепузик. Любит кататься на самокате.',
      traits: ['Маленькая', 'Быстрая', 'Любопытная']
    }
  ]

  const features = [
    { icon: 'sun', title: 'Солнечное детство', desc: 'Яркие приключения под солнцем с улыбающимся малышом' },
    { icon: 'music', title: 'Веселые песенки', desc: 'Запоминающиеся мелодии и танцы, которые любят дети' },
    { icon: 'users', title: 'Дружба и teamwork', desc: 'Учим детей дружбе, взаимопомощи и заботе' },
    { icon: 'heart', title: 'Позитив и радость', desc: 'Только добрые истории и позитивные эмоции' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-red-50 overflow-x-hidden">
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-russian-blue to-russian-red flex items-center justify-center">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-russian-blue to-russian-red bg-clip-text text-transparent">
                ТЕЛЕПУЗИКИ
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-russian-blue font-semibold transition-colors">
                О телепузиках
              </button>
              <button onClick={() => scrollToSection('characters')} className="text-gray-700 hover:text-russian-blue font-semibold transition-colors">
                Герои
              </button>
              <button onClick={() => scrollToSection('watch')} className="text-gray-700 hover:text-russian-blue font-semibold transition-colors">
                Смотреть
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-russian-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105">
                Контакты
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-russian-blue/10 hover:bg-russian-blue/20 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-russian-blue" /> : <Menu className="w-6 h-6 text-russian-blue" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="p-4 space-y-3">
                  <button onClick={() => scrollToSection('about')} className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 font-semibold">
                    О телепузиках
                  </button>
                  <button onClick={() => scrollToSection('characters')} className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 font-semibold">
                    Герои
                  </button>
                  <button onClick={() => scrollToSection('watch')} className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 font-semibold">
                    Смотреть
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="w-full text-left px-4 py-3 rounded-lg bg-russian-red text-white font-bold">
                    Контакты
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-russian-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-russian-red/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-russian-blue/10 text-russian-blue px-4 py-2 rounded-full font-semibold text-sm mb-6">
                <Star className="w-4 h-4" />
                Любимый детский сериал в России
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Добро пожаловать в мир{' '}
                <span className="bg-gradient-to-r from-russian-blue via-purple-600 to-russian-red bg-clip-text text-transparent">
                  Телепузиков!
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Яркие приключения четырех веселых друзей в волшебной стране.
                Пойте, танцуйте и учитесь вместе с Тинки-Винки, Дипси, Ля-Ля и По!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('watch')}
                  className="bg-russian-red hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-russian-red/30"
                >
                  <Play className="w-5 h-5" />
                  Смотреть серии
                </button>
                <button
                  onClick={() => scrollToSection('characters')}
                  className="bg-white hover:bg-gray-50 text-russian-blue border-2 border-russian-blue px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2"
                >
                  Познакомиться
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Russian Flag Badge */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-1">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200"></div>
                  <div className="w-8 h-8 rounded-full bg-russian-blue border-2 border-gray-200"></div>
                  <div className="w-8 h-8 rounded-full bg-russian-red border-2 border-gray-200"></div>
                </div>
                <span className="text-sm text-gray-500 font-medium">Официальный сайт для России</span>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 rounded-3xl blur-2xl opacity-30 transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=800&q=80"
                  alt="Телепузики"
                  className="relative rounded-3xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]"
                />
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-6 -right-6 bg-yellow-400 text-yellow-900 p-4 rounded-2xl shadow-lg"
                >
                  <Sun className="w-8 h-8" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-russian-blue text-white p-4 rounded-2xl shadow-lg"
                >
                  <Heart className="w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Почему дети <span className="text-russian-red">любят</span> Телепузиков?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Образовательный развлекательный сериал, который учит дружбе,
              любви к окружающему миру и развивает воображение
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:border-russian-blue/30 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-russian-blue to-russian-red flex items-center justify-center mb-6">
                  {feature.icon === 'sun' && <Sun className="w-8 h-8 text-white" />}
                  {feature.icon === 'music' && <Music className="w-8 h-8 text-white" />}
                  {feature.icon === 'users' && <Users className="w-8 h-8 text-white" />}
                  {feature.icon === 'heart' && <Heart className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHARACTERS SECTION */}
      <section id="characters" className="py-16 md:py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Познакомьтесь с <span className="text-russian-blue">героями</span>
            </h2>
            <p className="text-xl text-gray-600">Четыре уникальных друга, каждый со своим характером</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {characters.map((char, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`h-32 ${char.color} relative`}>
                  <div className="absolute -bottom-12 left-8">
                    <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg">
                      <div className={`w-full h-full rounded-full ${char.color} flex items-center justify-center text-white text-2xl font-black`}>
                        {char.name[0]}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-16 pb-8 px-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{char.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{char.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {char.traits.map((trait, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WATCH SECTION */}
      <section id="watch" className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-russian-blue via-purple-800 to-russian-red"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                Начните приключение прямо сейчас!
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                Смотрите любимые серии Телепузиков на российских платформах.
                Доступно на Яндекс.Эфире, VK Видео и других сервисах.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="https://yandex.ru/efir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-russian-blue hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <YandexIcon className="w-6 h-6" />
                  Смотреть на Яндекс.Эфире
                </a>
                <a
                  href="https://vk.com/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3"
                >
                  <VKIcon className="w-6 h-6" />
                  VK Видео
                </a>
              </div>

              {/* Platform badges */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Доступно бесплатно
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  HD качество
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Без рекламы для детей
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Свяжитесь с <span className="text-russian-red">нами</span>
            </h2>
            <p className="text-xl text-gray-600">Есть вопросы? Мы всегда рады помочь!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-russian-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-russian-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@telepuziki.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-russian-red/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-russian-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Телефон</h3>
                  <p className="text-gray-600">8 (800) 555-35-35</p>
                  <p className="text-sm text-gray-500">Бесплатно для РФ</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Телепузиков, д. 1</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Мы в соцсетях</h3>
                <div className="flex gap-4">
                  <a
                    href="https://vk.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-[#4A76A8] hover:bg-[#3d6391] flex items-center justify-center transition-colors"
                  >
                    <VKIcon className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://dzen.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-[#000000] hover:bg-gray-800 flex items-center justify-center transition-colors"
                  >
                    <YandexIcon className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Отправить сообщение</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-russian-blue focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-russian-blue focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Сообщение"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-russian-blue focus:outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-russian-red hover:bg-red-700 text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02]"
                >
                  Отправить
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-4 telegram-safe-bottom">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo and Coat of Arms */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-russian-blue to-russian-red flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black">ТЕЛЕПУЗИКИ</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <RussianCoatOfArms className="w-6 h-6 text-russian-red" />
                <span>Сделано с любовью в России</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">О нас</button>
              <button onClick={() => scrollToSection('characters')} className="text-gray-400 hover:text-white transition-colors">Герои</button>
              <button onClick={() => scrollToSection('watch')} className="text-gray-400 hover:text-white transition-colors">Смотреть</button>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
            </div>

            {/* Russian Flag */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-10 rounded overflow-hidden shadow-lg">
                <div className="h-1/3 bg-white"></div>
                <div className="h-1/3 bg-russian-blue"></div>
                <div className="h-1/3 bg-russian-red"></div>
              </div>
              <span className="text-xs text-gray-500">© 2024 Телепузики. Все права защищены.</span>
            </div>
          </div>

          {/* Yandex.Metrika Notice */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
            <p>Сайт использует Яндекс.Метрику для анализа посещаемости. Продолжая использовать сайт, вы соглашаетесь с обработкой данных.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
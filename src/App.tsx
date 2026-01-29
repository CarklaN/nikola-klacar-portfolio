import { useState, useEffect } from 'react';
import {
  Mail, Github, Linkedin, Download, ChevronDown,
  Code, Server, Database, TestTube, Award, Briefcase,
  CheckCircle2, ExternalLink, Moon, Sun, Menu, X
} from 'lucide-react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-cyan-500 transition-all"
            >
              Nikola Klacar
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {['about', 'experience', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="px-4 py-4 space-y-3">
              {['about', 'experience', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 opacity-50" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] dark:opacity-10 opacity-40" />

          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <CheckCircle2 size={16} />
              Open to Remote Opportunities
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-cyan-700 dark:from-slate-100 dark:via-blue-200 dark:to-cyan-200 bg-clip-text text-transparent leading-tight">
              QA Automation Engineer
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Building scalable test automation frameworks and integrating quality into CI/CD pipelines for fast-moving engineering teams across Europe and the US.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30"
              >
                <Download size={18} />
                Download CV
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-medium rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Mail size={18} />
                Get in Touch
              </button>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/carklan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikolaklacar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-blue-600 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </section>

        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">About Me</h2>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                I am a QA Automation Engineer specializing in building reliable and maintainable test systems for complex platforms, including data processing systems, management dashboards, and online service platforms.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I work closely with developers and DevOps teams to ensure testing is integrated throughout the engineering lifecycle, not treated as a final checkpoint. My focus is on early collaboration, risk-based prioritization, and creating automation frameworks that scale with product growth.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">QA Automation Engineer</h3>
                      <p className="text-slate-600 dark:text-slate-400">Tech Company</p>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">2022 - Present</span>
                  </div>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="mt-0.5 text-blue-600 flex-shrink-0" />
                      <span>Designed and implemented API automation framework using Pytest for data processing platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="mt-0.5 text-blue-600 flex-shrink-0" />
                      <span>Validated Kafka to UI to S3 data pipelines, ensuring data integrity across systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="mt-0.5 text-blue-600 flex-shrink-0" />
                      <span>Integrated regression tests into Jenkins CI pipeline, reducing deployment time by 40%</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">QA Engineer</h3>
                      <p className="text-slate-600 dark:text-slate-400">Software Solutions</p>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">2020 - 2022</span>
                  </div>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="mt-0.5 text-blue-600 flex-shrink-0" />
                      <span>Built UI automation with Playwright and WebDriverIO for attendance management platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="mt-0.5 text-blue-600 flex-shrink-0" />
                      <span>Implemented API tests and visual regression testing using Applitools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="mt-0.5 text-blue-600 flex-shrink-0" />
                      <span>Reduced defect escape rate by 60% through comprehensive test coverage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Skills & Tech Stack</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <TestTube className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Test Automation</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Pytest</li>
                  <li>• Playwright</li>
                  <li>• WebDriverIO</li>
                  <li>• Applitools</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Server className="text-cyan-600 dark:text-cyan-400" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">API Testing</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• REST APIs</li>
                  <li>• Swagger/OpenAPI</li>
                  <li>• Postman</li>
                  <li>• API Automation</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Languages</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Python</li>
                  <li>• JavaScript</li>
                  <li>• TypeScript</li>
                  <li>• SQL</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Database className="text-orange-600 dark:text-orange-400" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">CI/CD & Cloud</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>• Jenkins</li>
                  <li>• GitHub Actions</li>
                  <li>• AWS (S3, Redshift)</li>
                  <li>• Kafka</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Briefcase size={24} />
                Testing Approach
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Shift-Left Strategy</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Define testability and edge cases during feature design phase</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Risk-Based Testing</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Prioritize critical user flows and integration points</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Architecture-First</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Build modular, reusable test frameworks that scale</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Metrics-Driven</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Track flaky rate, defect escape rate, and pipeline stability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Featured Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Data Processing Platform
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Designed API automation in Pytest, validated Kafka → UI → S3 data pipelines, and integrated regression tests into Jenkins CI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-xs rounded-md">Python</span>
                  <span className="px-2 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-xs rounded-md">Pytest</span>
                  <span className="px-2 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-xs rounded-md">Kafka</span>
                  <span className="px-2 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-xs rounded-md">AWS</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <TestTube className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Attendance Platform
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Built UI automation with Playwright and WebDriverIO, implemented API tests, and added visual regression testing using Applitools.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 text-xs rounded-md">JavaScript</span>
                  <span className="px-2 py-1 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 text-xs rounded-md">Playwright</span>
                  <span className="px-2 py-1 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 text-xs rounded-md">Jenkins</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Server className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Management Dashboards
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Validated real-time data flow from Kafka topics to frontend dashboards and supported nightly regression pipelines.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 text-xs rounded-md">TypeScript</span>
                  <span className="px-2 py-1 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 text-xs rounded-md">Selenium</span>
                  <span className="px-2 py-1 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300 text-xs rounded-md">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Certifications</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">ISTQB Certified Tester</h3>
                  <a href="https://atsqa.org/certified-testers/profile/aff74e8fdcdc43bda1d5908eb68a6cc1" className="text-blue-600 hover:underline">
                      Foundation Level
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-cyan-600 dark:text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Certified Tester Advanced Level</h3>
                  <a href="https://atsqa.org/certified-testers/profile/aff74e8fdcdc43bda1d5908eb68a6cc1" className="text-blue-600 hover:underline">Test Automation Engineering
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Get in Touch</h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Open to remote and hybrid opportunities across Europe and the US. Let's discuss how I can help improve your testing infrastructure.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="nikola.klacar@gmail.com"
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Mail size={20} />
                    <span>nikola.klacar@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nikolaklacar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>https://www.linkedin.com/in/nikolaklacar/</span>
                  </a>
                  <a
                    href="https://github.com/carklan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>https://github.com/carklan</span>
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30"
                  >
                    Send Message
                  </button>
                  {formStatus === 'success' && (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
                      <CheckCircle2 size={16} />
                      Message sent successfully!
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-2">
            © 2026 Nikola Klacar - QA Automation Engineer
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Built with reliability, clarity, and continuous improvement.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

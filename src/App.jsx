import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Download } from 'lucide-react';

const user = {
  name: 'ANGELO ALEXANDER',
  title: 'Backend Developer | Test Automation Engineer',
  email: 'angelolife2002@gmail.com',
  phone: '+91 8610586467',
  location: 'Chennai, Tamil Nadu, India 600089',
  github: 'https://github.com/lii4ee',
  summary:
    'Software Engineer with 1+ years of experience in API automation and testing, transitioning to backend development. Proven expertise in REST API development, Java programming, and financial services systems. Strong foundation in database technologies, cloud platforms, and CI/CD pipelines with hands-on experience in Open Banking solutions.',
  skills: {
    languages: ['Java', 'Python', 'SQL', 'JavaScript'],
    backend: ['Spring Boot', 'RESTful APIs', 'Maven', 'Gradle'],
    db: ['MS SQL Server', 'Oracle SQL', 'MySQL', 'PostgreSQL'],
    testing: ['Rest Assured', 'Selenium WebDriver', 'TestNG', 'JUnit'],
    cloud: ['Azure DevOps', 'Docker', 'Kubernetes', 'CI/CD'],
    tools: ['Git', 'Postman', 'OpenAPI', 'Swagger', 'JIRA'],
  },
  experience: [
    {
      role: 'Software Engineer',
      company: 'Capgemini (Chennai)',
      period: 'June 2024 - Present',
      client: 'Standard Chartered Bank - Open Banking Team',
      bullets: [
        'Developed automated API test suites for document management and payment processing systems using Java and Rest Assured.',
        'Built comprehensive REST API automation frameworks for trade finance applications, reducing manual testing cycles by 60%.',
        'Implemented database validation testing with SQL queries to verify API transaction workflows and ensure data consistency.',
        'Created automated tests for Open Banking APIs with complex JSON payloads and multi-parameter validation logic.',
        'Integrated automated test suites into CI/CD pipelines using Azure DevOps for continuous testing.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'ABB Innovation Center (Bangalore)',
      period: 'Dec 2022 - Mar 2023',
      bullets: [
        'Developed containerized applications using Docker and worked with Kubernetes orchestration.',
        'Built microservices applications and gained experience with cloud-native technologies.',
      ],
    },
  ],
  education: {
    degree: 'Bachelor of Electronics and Communication Engineering',
    school: 'Sathyabama Institute of Science and Technology',
    period: '2019 - 2023',
    cgpa: '8.77/10.0',
  },
  certificates: [
    'Advanced Certification in Data Science and AI - IIT Madras (2024)',
    'Capgemini OCEAN Certified L2 - Test Automation Engineer (2024)',
    'Cloud Computing - NPTEL (2023)',
  ],
};

const navItems = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 antialiased">
      {/* Top nav */}
      <header className="backdrop-blur-md fixed w-full z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white font-semibold shadow-lg">
              AA
            </div>
            <div>
              <div className="text-xs text-gray-500">ANGELO</div>
              <div className="font-medium tracking-wide">Alexander</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            {navItems.map((n) => {
              return (
                <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-gray-900 transition">
                  {n}
                </a>
              );
            })}
            <a
              href={user.github}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-28">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              {user.name}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-xl text-gray-700"
            >
              {user.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-6 max-w-xl text-gray-600 leading-7"
            >
              {user.summary}
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${user.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white font-medium shadow-2xl hover:opacity-95 transition"
              >
                <Mail size={16} /> Email
              </a>

              <a
                href={user.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 hover:shadow"
              >
                <Github size={16} /> GitHub
              </a>

              <a href="#experience" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 hover:shadow">
                <Download size={16} /> Resume
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <small className="text-xs text-gray-500 flex items-center gap-2">
                <Phone size={14} /> {user.phone}
              </small>

              <small className="text-xs text-gray-500 flex items-center gap-2">
                <Mail size={14} /> {user.email}
              </small>

              <small className="text-xs text-gray-500 flex items-center gap-2">
                <MapPin size={14} /> {user.location}
              </small>
            </div>
          </div>

          <div className="relative">
            {/* Apple-like glossy card visual */}
            <motion.div
              initial={{ scale: 0.98, opacity: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="rounded-3xl p-8 bg-gradient-to-br from-white/70 to-gray-50 shadow-2xl border border-gray-100"
            >
              <div className="rounded-xl overflow-hidden bg-gradient-to-tr from-slate-900 via-indigo-700 to-teal-500 p-10 text-white relative">
                <div
                  className="absolute -inset-2 blur-3xl opacity-30"
                  style={{
                    background:
                      'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.08), transparent 10%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05), transparent 20%)',
                  }}
                />
                <h3 className="text-lg font-semibold">Featured</h3>
                <p className="mt-4 text-sm opacity-90">API Automation · Backend · Open Banking</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-xl">
                    <div className="text-xs uppercase opacity-80">Automation</div>
                    <div className="mt-2 font-semibold text-lg">60% reduction</div>
                    <div className="text-xs opacity-80">in manual cycles</div>
                  </div>

                  <div className="p-4 bg-white/10 rounded-xl">
                    <div className="text-xs uppercase opacity-80">Technologies</div>
                    <div className="mt-2 font-semibold text-lg">Java, Rest Assured</div>
                    <div className="text-xs opacity-80">CI/CD integrated</div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-xs opacity-80">Contact</div>
                  <div className="mt-1 text-sm">
                    {user.email} • {user.phone}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* subtle glass reflection */}
            <div
              className="pointer-events-none absolute -right-8 -top-8 w-48 h-48 rounded-full blur-3xl opacity-30"
              style={{ background: 'conic-gradient(from 90deg, rgba(255,255,255,0.25), rgba(255,255,255,0))' }}
            />
          </div>
        </section>

        {/* Sections */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 text-gray-700 max-w-3xl leading-7">{user.summary}</p>
        </section>

        <section id="experience" className="max-w-6xl mx-auto px-6 py-12 border-t">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="mt-6 space-y-6">
            {user.experience.map((exp, i) => {
              return (
                <article key={i} className="p-6 bg-white rounded-2xl shadow-sm border">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-lg font-semibold">
                        {exp.role} - {exp.company}
                      </div>
                      <div className="text-sm text-gray-500">
                        {exp.period} {exp.client ? `• ${exp.client}` : ''}
                      </div>
                    </div>

                    <div className="text-sm text-gray-500">{exp.period}</div>
                  </div>

                  <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                    {exp.bullets.map((b, j) => {
                      return <li key={j}>{b}</li>;
                    })}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.entries(user.skills).map(([k, v]) => {
              return (
                <div key={k} className="p-6 bg-white rounded-2xl border shadow-sm">
                  <div className="font-semibold text-sm capitalize">{k}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {v.map((s, i) => {
                      return (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-gray-100">
                          {s}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="education" className="max-w-6xl mx-auto px-6 py-12 border-t">
          <h2 className="text-2xl font-semibold">Education & Certifications</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <div className="font-semibold">{user.education.degree}</div>
              <div className="text-sm text-gray-500">
                {user.education.school} • {user.education.period}
              </div>
              <div className="mt-2 text-sm">CGPA: {user.education.cgpa}</div>
            </div>

            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <div className="font-semibold">Certifications</div>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                {user.certificates.map((c, i) => {
                  return <li key={i}>{c}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <div className="flex items-center gap-3">
                <Mail /> <div className="font-medium">Email</div>
              </div>
              <div className="mt-2 text-sm text-gray-700">{user.email}</div>

              <div className="mt-4 flex items-center gap-3">
                <Phone /> <div className="font-medium">Phone</div>
              </div>
              <div className="mt-2 text-sm text-gray-700">{user.phone}</div>

              <div className="mt-4 flex items-center gap-3">
                <MapPin /> <div className="font-medium">Location</div>
              </div>
              <div className="mt-2 text-sm text-gray-700">{user.location}</div>

              <a
                href={user.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              >
                <Github size={16} /> View GitHub
              </a>
            </div>

            <div className="p-6 bg-white rounded-2xl border shadow-sm">
              <div className="font-semibold">Quick message</div>

              <form
                className="mt-4 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = 'mailto:' + user.email + '?subject=Contact from Resume Site&body=Hi Angelo,';
                }}
              >
                <input required placeholder="Your name" className="w-full px-4 py-3 border rounded-lg" />
                <input required type="email" placeholder="Your email" className="w-full px-4 py-3 border rounded-lg" />
                <textarea required placeholder="Message" className="w-full px-4 py-3 border rounded-lg h-28"></textarea>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white" type="submit">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="mt-12 py-8 border-t">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} Angelo Alexander - Built with care</div>
            <div className="flex items-center gap-4 text-sm">
              <a href={user.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Github size={14} /> GitHub
              </a>
              <a href={'mailto:' + user.email} className="flex items-center gap-2">
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating accessibility / theme button (small) */}
      <div className="fixed right-6 bottom-6">
        <button
          className="p-3 rounded-full bg-white shadow-lg border"
          onClick={() => {
            document.documentElement.classList.toggle('dark');
          }}
          aria-label="Toggle theme"
        >
          A
        </button>
      </div>
    </div>
  );
}
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">Next.js DDD Project</h2>
            <p className="mt-2 text-sm text-gray-300">
              Um exemplo de aplicação Next.js usando Domain-Driven Design
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 md:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Recursos
              </h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://nextjs.org/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Next.js Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.domainlanguage.com/ddd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    DDD Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Links
              </h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://github.com/samuelpjacobsen/next-ddd-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    GitHub Repo
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Next.js DDD Project. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-balance">Your Name</h1>
          <p className="text-xl text-muted-foreground">Senior Software Engineer at Company</p>
        </div>

        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Hey, I enjoy working with Next.js and crafting beautiful front-end experiences.
          </p>
          <p className="text-lg leading-relaxed">
            This portfolio is built with <strong>Next.js</strong>. It allows you to write clean code and focus on the
            content of your portfolio.
          </p>
        </div>

        <div className="pt-8 space-y-2">
          <h2 className="text-xl font-semibold mb-4">Connect</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a href="https://twitter.com/yourname" className="hover:text-foreground transition-colors">
                Twitter @yourname
              </a>
            </li>
            <li>
              <a href="https://github.com/yourname" className="hover:text-foreground transition-colors">
                GitHub @yourname
              </a>
            </li>
            <li>
              <a href="https://instagram.com/yourname" className="hover:text-foreground transition-colors">
                Instagram @yourname
              </a>
            </li>
            <li>
              <a href="mailto:your@name.com" className="hover:text-foreground transition-colors">
                Email your@name.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

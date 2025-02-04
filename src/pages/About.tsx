export default function AboutPage() {
  return (
    <div className="mx-auto pb-10 pt-20" id="about">
      <section className="mb-12">
        <h3 className="mb-4 text-3xl font-bold text-gray-900">About Me</h3>
        <div className="my-6 border-l-4 border-gray-500 pl-4 italic text-gray-600">
          "Turning complex problems into elegant solutions through code."
        </div>
        <p className="text-justify leading-relaxed text-gray-700">
          As a Full-stack Developer with 3+ years of experience, I specialize in crafting
          exceptional digital experiences using technologies like React, Next.js, TypeScript, and
          Node.js, along with databases like MongoDB and PostgreSQL. My approach combines technical
          expertise with creative problem-solving to deliver scalable and high-performing
          solutions."
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Development Philosophy</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-6">
            <h3 className="mb-2 font-bold text-gray-800">Clean Code</h3>
            <p className="text-gray-600">
              Writing maintainable, well-documented code that speaks for itself.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6">
            <h3 className="mb-2 font-bold text-gray-800">User-Centric</h3>
            <p className="text-gray-600">
              Creating solutions that prioritize user experience and satisfaction.
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6">
            <h3 className="mb-2 font-bold text-gray-800">Continuous Learning</h3>
            <p className="text-gray-600">
              Staying updated with latest technologies and best practices.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Technical Expertise</h2>
        <p className="mb-4 text-gray-700">
          My expertise spans across various domains of software development:
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Developing and maintaining scalable applications from frontend to backend
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Automating data collection and processing through advanced scripting
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Setting up and managing development and production environments
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Creating efficient automation scripts for repetitive tasks
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Implementing robust security practices and performance optimizations
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Work Approach</h2>
        <p className="mb-4 text-gray-700">
          My development process is built on these core principles:
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Attention to code quality and architecture
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Clear communication throughout the development lifecycle
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Consistent delivery with focus on project timelines
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Creative approach to solving complex technical challenges
          </li>
        </ul>
      </section>
    </div>
  );
}

import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Anson Hsu
        </h1>
        <p className="mb-4">
          I am an <b>AI Architecture Algorithm Engineer</b> and <b>Quantitative Researcher</b> based in Taiwan. 
        </p>
        <p className="mb-4">
          My passion lies in the intersection of High-Performance Computing and Financial Markets. 
          I specialize in building <b>Deep Reinforcement Learning (DRL)</b> trading systems and designing 
          momentum-based strategies. Currently, I am developing a "Vibe Trading" system that leverages 
          sentiment analysis and X-of-Thought prompting to capture alpha in volatile markets.
        </p>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

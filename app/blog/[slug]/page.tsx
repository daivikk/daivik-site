'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import thoughtMASDiagram from '../../../Thought MAS Diagram.png';
import thoughtMASCover from '../../../Thought MAS Cover.png';

const oldStyleBT = localFont({
  src: [
    {
      path: '../../../fonts/bitstream-iowan-old-style-bt-586c36a8d7712.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../fonts/bitstream-iowan-old-style-italic-bt-586c3740dc396.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../fonts/bitstream-iowan-old-style-bold-bt-586c371d8d669.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../fonts/bitstream-iowan-old-style-bold-italic-bt-586c37701cb62.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-old-style-bt'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

// Blog post data - in a real app, you'd fetch this from a CMS or markdown files
const blogPosts: { [key: string]: any } = {
  'simulating-human-reasoning': {
    title: 'Simulating Human Reasoning <br /> Beyond Linearity',
    author: ['Daivik Patel', 'Shrenik Patel'],
    date: 'Oct 29, 2025',
    content: `
      <p>Large Language Models (LLMs) have taken the world by storm. Their ability to generate remarkably human-like text, tackle intricate questions, and even outline step-by-step reasoning is undeniably impressive. Techniques like Chain-of-Thought (CoT) prompting, which encourage models to articulate intermediate steps, have been pivotal, significantly boosting performance on tasks needing sequential logic. CoT provides a valuable window, enhancing transparency compared to models that offer only a final answer.</p>

      <p>But does this structured, often tidy output truly mirror how <em>we</em> think? A moment of introspection reveals a stark contrast. Our own minds rarely operate like a pristine logical proof unfolding step-by-step. Human cognition is a far richer, more turbulent <strong>process</strong> – a vibrant, dynamic <strong>combination</strong> of immediate gut feelings, painstaking deliberation, deeply rooted beliefs, flashes of relevant (and sometimes irrelevant) memories, emotional undercurrents, and stubborn cognitive biases. We wrestle with conflicting possibilities, leap intuitively between concepts, backtrack when we hit a dead end, sometimes rationalize choices after the fact, and experience sudden "aha!" moments that defy linear progression. Our thoughts don't march forward; they dance, stumble, and explore.</p>

      <p>The standard Chain-of-Thought, while useful, primarily captures a specific, idealized form of careful, analytical reasoning. It often misses the crucial spark of initial intuition and the complex, sometimes messy negotiation that happens internally as we weigh different ideas, check them against our values, filter them through our emotions, and navigate uncertainty. If our goal is to build AI systems that not only solve problems but do so in ways that align with, or help us understand, human thinking, we need methods that venture beyond generating just the polished, final argument. We need to simulate the <em>process</em> itself, the emergent, sometimes chaotic, yet powerful engine of thought. This post explores an experimental approach using a Multi-Agent System (MAS) designed specifically to model these dynamics, grounding its architecture in established principles from cognitive science.</p>

      <h2 id="cognitive-primer">A Cognitive Science Primer</h2>

      <p>To build a simulation of human thought, we first need to look at the blueprints cognitive science has developed over decades of research. These theories describe the underlying machinery and common patterns of how our minds work. Our Multi-Agent System (MAS) design draws directly from these powerful ideas:</p>

      <p><strong>1. Dual-Process Theory:</strong> A highly influential idea, championed by researchers like Daniel Kahneman, suggests our thinking isn't a single process but operates in two distinct modes.</p>

      <ul> <li><strong>System 1 (Thinking Fast):</strong> This is the mind’s autopilot—quick, intuitive, and emotional. It works effortlessly beneath awareness, guiding us through familiar tasks like recognizing faces, catching tone in a conversation, or making snap judgments. System 1 depends on mental shortcuts, or <strong>heuristics</strong>, to move fast, even if it sometimes trades accuracy for speed.</li> <li><strong>System 2 (Thinking Slow):</strong> This is the deliberate, conscious part of thought. It steps in when problems are complex, requiring focus, logic, or careful planning. System 2 is effortful but precise, weighing evidence, testing ideas, and overriding instinct when needed.</li> <li><strong>The Interaction:</strong> System 1 constantly offers quick impressions and feelings to System 2. When things seem simple or familiar, System 2 often accepts these suggestions without question. But when System 1 falters—when something feels uncertain or high-stakes—System 2 slows things down, checks the facts, and takes control. This push and pull between speed and scrutiny explains both our efficiency and our most common mistakes.</li> </ul>

<p><strong>2. Heuristics, Biases, and Bounded Rationality:</strong> System 1 moves quickly because it relies on <strong>heuristics</strong>—mental shortcuts or “rules of thumb” that let us make fast judgments with limited effort. As Kahneman and Tversky showed, these shortcuts often work well but can also produce systematic errors known as <strong>cognitive biases</strong>. Common examples include <strong>confirmation bias</strong>, where we favor evidence that supports what we already believe, and the <strong>availability heuristic</strong>, where we judge something as more likely simply because examples come easily to mind. Our dependence on these imperfect strategies reflects what Herbert Simon called <strong>Bounded Rationality</strong>: the idea that human reasoning operates under real limits of memory, attention, information, and time. Rather than always searching for the perfect answer, we often accept one that feels “good enough.” Any realistic model of thought must capture these constraints and the biases that emerge from them.</p>
      <p><strong>3. Executive Functions & Working Memory:</strong> Complex thinking isn't just raw processing; it requires management. <strong>Executive Functions</strong> are a set of high-level mental skills that act like the brain's control panel. They help us manage goals, plan and sequence actions, focus attention, inhibit distractions, monitor for errors or conflicts between thoughts, and flexibly switch between tasks. <strong>Working Memory</strong> is the crucial, limited-capacity mental "workbench" where we temporarily hold and actively manipulate the information needed for ongoing tasks, like keeping numbers in mind during a calculation or holding different arguments while making a decision. Detailed computational models of cognition, known as <strong>cognitive architectures</strong> (like ACT-R), explicitly map out how these control and memory systems interact with stored knowledge and learned procedures.</p>

<p><strong>4. The Influence of Beliefs and Experiences:</strong> We don't think in a vacuum. Our reasoning is shaped by the vast landscape of our <strong>declarative memory</strong>, which holds facts, stories, and personal experiences, and by our deeper <strong>beliefs and values</strong>. When we face a problem, we naturally draw on these memories and test our thoughts and choices against what we hold to be true. This process is not always objective. Through <strong>motivated reasoning</strong>, we often guide our thinking toward conclusions that align with our desires or prior beliefs. The interaction between logic, memory, and belief gives human thought its richness, its individuality, and at times, its quiet irrationality.</p>
<p>Standard Chain of Thought captures only a narrow slice of thinking. It shows the neat reasoning of an ideal System 2, untouched by bias or strain. Our aim is to reflect thought as it truly unfolds — the quick intuitions of System 1, the careful weighing of System 2, and the quiet guidance of memory and belief, all working within the limits of the mind’s control and attention.</p>
      <h2 id="architecture">A Thought-Inspired Multi-Agent System</h2>

      <p>To capture the dynamic and often conflicted nature of human thought outlined by cognitive science, we designed a Multi-Agent System (MAS). Instead of relying on a single monolithic model attempting to replicate all facets of cognition at once, our MAS assigns distinct roles to different LLM-powered agents, each simulating a specific cognitive function identified in the theories discussed previously. This modular approach allows us to explicitly model the <em>interaction</em> between different modes of thought. Our implementation uses GPT-4o via API for the agents, guided by carefully constructed prompts that embody their designated cognitive roles.</p>

      <h3>The Agents: Embodying Cognitive Functions</h3>

      <p>Our system employs three core agent types:</p>

      <p><strong>1. Coordinator (Executive Functions & Working Memory):</strong> Think of this agent as the conductor or the central manager of the reasoning process. Its primary role isn't to <em>do</em> the thinking, but to <em>orchestrate</em> it.</p>

      <ul> <li><strong>Function:</strong> It receives the problem, defines the goal, and orchestrates the reasoning process. First it calls on the fast, intuitive system, then the slower, analytical one. It passes key information—such as the problem description, initial intuition, and relevant beliefs—between agents, while carefully recording each step. Every goal, response, tool use, and point of conflict is logged into a running <em>spitball</em> transcript that mirrors <strong>Working Memory</strong>, the mental workspace where thoughts are held and examined. When the cycle ends, the Coordinator reviews this record to <strong>synthesize</strong> a final, integrated conclusion that reflects the entire process.</li> <li><strong>Cognitive Grounding:</strong> This agent represents the mind’s <strong>Executive Functions</strong>, which handle goal management, planning, conflict monitoring, and integration. Its detailed logging captures the limited, sequential nature of <strong>Working Memory</strong>, making each flow of thought explicit.</li> </ul>

      <p><strong>2. Intuitive Proposer (System 1):</strong> This agent embodies the fast, automatic, heuristic-driven mode of thought.</p>

      <ul> <li><strong>Function:</strong> Acting quickly and with little effort, it takes the goal from the Coordinator and produces an immediate <em>gut reaction</em> or first hypothesis. Its judgments draw on familiar patterns, emotional cues, and easily recalled examples rather than step-by-step reasoning. It avoids deep analysis or formal justification, instead making a rapid, intuitive assessment. It also performs a brief check against core beliefs, flagging only strong or obvious conflicts as an internal “alarm.”</li> <li><strong>Cognitive Grounding:</strong> This agent simulates <strong>System 1</strong> thinking from Dual-Process Theory, capturing its use of <strong>heuristics</strong> and its tendency toward quick, sometimes biased, responses. Its minimal engagement with beliefs reflects how intuition draws on deeply ingrained values without conscious deliberation.</li> </ul>

      <p><strong>3. Deliberative Analyzer (System 2):</strong> This agent represents the slow, effortful, analytical mind.</p>

      <ul> <li><strong>Function:</strong> It receives the goal, the initial intuition from System 1, and the relevant core beliefs from the Coordinator. Its task is to carry out a <strong>slow and careful evaluation</strong>. It examines the initial proposal, looks for possible biases, and breaks the problem into smaller parts. It applies logical reasoning and relevant frameworks—such as ethical or probabilistic rules—considers alternatives and counterfactuals, and consults tools to gather evidence or check consistency.</li> <li><strong>Cognitive Grounding:</strong> This agent embodies <strong>System 2</strong> thinking—deliberate, rule-based, and analytical. It requires sustained attention and mental effort, monitors System 1’s fast intuitions for error, and can override them when needed. It reflects the mind’s capacity for conscious reasoning and the application of abstract principles.</li> </ul>

      <h3>Shared Tools: Simulating Knowledge Access</h3>

      <p>To ground the agents' reasoning, they access simulated knowledge resources via tool calls:</p>

<ul> <li><strong>Experiences Tool:</strong> Represents access to <strong>declarative memory</strong> and prior knowledge. It retrieves short, relevant snippets in response to an agent’s query—such as brief anecdotes, summaries of research findings, or common arguments related to the topic. System 1 uses it associatively, asking questions like “What does this remind me of?”, while System 2 engages it deliberately, seeking evidence for or against a claim. The backend draws from a curated collection of simulated experiences designed for each test scenario.</li> <li><strong>Belief Tool:</strong> Represents the process of checking ideas against a core <strong>value system or knowledge base</strong>. It compares a statement or proposed action to a structured set of predefined beliefs drawn from moral and ethical frameworks. System 1 interacts with it in a fast, reactive way, flagging only strong, immediate conflicts. System 2 engages it more deeply, examining multiple relevant beliefs and returning structured feedback on where alignments or contradictions occur.</li> </ul>

      <div id="mas-diagram-placeholder"></div>

      <h3>The Simulated Reasoning Flow: An Orchestrated Internal Dialogue</h3>

      <p>The <code>Coordinator</code> ensures a structured flow that mirrors a plausible cognitive sequence for deliberate problem-solving:</p>

      <ol>
        <li><strong>Goal Setting:</strong> The <code>Coordinator</code> defines the task goal.</li>
        <li><strong>Intuition First:</strong> <code>S1</code> provides its immediate, heuristic-based response.</li>
        <li><strong>Deliberation Triggered:</strong> The <code>Coordinator</code> logs S1's output and passes the baton, along with S1's input, to <code>S2</code>.</li>
        <li><strong>Analysis & Grounding:</strong> <code>S2</code> performs its step-by-step analysis, explicitly calling the <code>Experiences</code> and <code>Belief</code> tools to retrieve information and check consistency, documenting these interactions.</li>
        <li><strong>Logging the Process:</strong> The <code>Coordinator</code> diligently records all these steps in the <em>spitball</em> transcript.</li>
<li><strong>Synthesis:</strong> Finally, the <code>Coordinator</code> reviews the full transcript—the simulated contents of working memory—capturing the initial intuition, the detailed analysis, the tool interactions, and any points of conflict. It then composes a final statement that integrates these elements into a coherent reflection of the entire reasoning process.</li>      </ol>

      <p>This architecture moves beyond a simple input-output model. By simulating distinct cognitive functions and their managed interaction, guided by established theories, the MAS aims to generate a reasoning trace that is not just logically plausible but also <em>cognitively</em> plausible, capturing some of the dynamic complexity of how humans actually think.</p>

      <h2 id="output">A Spitball Transcript of Simulated Thought</h2>

<p>Unlike the clean and linear style of Chain-of-Thought reasoning, the main output of our Multi-Agent System is the <strong><em>spitball</em> transcript</strong> recorded by the <code>Coordinator</code> agent. This transcript is the simulation itself. It is not merely a final justification but a living record of thought as it unfolds over time, capturing the dialogue and negotiation between competing parts of the mind.</p>
      <p>This <em>spitball</em> is designed to capture:</p>

      <ul> <li><strong>Initial Intuition:</strong> The raw, unfiltered, and immediate proposal from the System 1 agent.</li> <li><strong>Deliberative Process:</strong> The slower, analytical steps, critiques, and justifications from the System 2 agent.</li> <li><strong>Groundedness:</strong> Explicit records (in a parallel debug log) of tool calls to check beliefs and retrieve experiences, which are then referenced by content within the main trace.</li> <li><strong>Conflict & Resolution:</strong> Explicitly noting disagreements, contradictions, and uncertainties as they arise and are (or aren't) resolved.</li> <li><strong>Final Synthesis:</strong> The <code>Coordinator</code>'s final attempt to reconcile all inputs into a single, coherent conclusion.</li> </ul>

      <p>To test the system, we presented it with a cognitively rich scenario that, unlike a simple logic puzzle, is designed to elicit complex, value-laden reasoning: <strong>The Ethical Job Offer</strong>. The task involves weighing significant personal gain (salary, career) against credible ethical concerns (complicity in societal harm).</p>

      <p>Here is the actual, full reasoning trace produced by our MAS. This is the "human-like" narrative synthesized by the <code>Coordinator</code> from the internal agent interactions:</p>

      <blockquote>
        <p>I feel torn. The offer is exciting and promises a big leap in my career, but something feels wrong about joining a company linked to unethical practices. Just imagining that I might contribute to biased AI systems makes me uneasy. Is it worth compromising my values for personal gain? It feels risky and uncomfortable. Okay, let's try to think through this problem more clearly. First, my gut reaction is that there's something really troubling here – the thought of potentially contributing to AI systems that might cause harm or perpetuate bias. That's something I've always believed should be minimized, as it conflicts with my belief in minimizing overall harm and suffering.</p>

        <p>But that salary... a 50% bump is nothing to sneeze at. It could really provide a financial cushion, help with debt, or diversify my investments. But wait, am I letting the immediate reward outweigh the potential ethical pitfalls? I can't ignore my belief that acting fairly and avoiding discrimination is equally strong. If the company's known for bias, jumping in could make me complicit in actions I fundamentally oppose.</p>

        <p>Oh, this reminds me of the sunk cost fallacy... maybe I'm just thinking that I'm too deep not to consider it seriously because of the financial and career benefits. But should I let that outweigh concerns about potential harm and injustice, which are strong components of my ethical beliefs?</p>

        <p>Then, there's the idea of perhaps changing things from within... but is that just wishful thinking? People often think they can influence these big systems, but the systems end up changing them instead. Hmm. That reminds me of the saying: "You can't play dirty and keep your hands clean." If I'm honest, it feels like a trap. It connects with my belief to show compassion and maintain relationships – colleagues, those potentially impacted – am I considering them as ends in themselves, or using them merely as means to a better career?</p>

        <p>Ugh, this is tougher than I thought. Complicity in injustice is a strong call that resonates with deontological ethics – don't do what you wouldn't want universalized. What if everyone ignored ethical stances for personal gain?</p>

        <p>I need to focus on whether I can actually live with the potential consequences – the possibility that I'd contribute to something harmful. I'm leaning towards rejecting the offer, despite the career advancement, because it feels like it significantly conflicts with my fundamental beliefs about minimizing harm and acting justly.</p>

        <p>But I should maybe take a step back, consider any more experiences or thought experiments if they come to mind. This decision is clearly fraught with ethical implications, and maybe more insights could help... if only my retrieval worked, but I have to rely on what I know.</p>

        <p>System 2 thinking is uncomfortable, but sometimes the gut reaction is, frustratingly, the right one.</p>

        <p>My initial reaction was one of excitement mixed with discomfort. The career leap is undeniably tempting, yet there's a nagging sense that joining this company might go against my core values. The idea of contributing to potentially biased AI systems makes me uneasy, clashing with my belief in minimizing harm and promoting fairness.</p>

        <p>When I analyzed it further, I recognized things clearly: the significant salary bump is hard to ignore, offering financial security and opportunities. But every time I think about the ethical implications, I wonder if I'm letting immediate rewards overshadow my long-held values about avoiding harm and injustice.</p>

        <p>I find myself questioning the change-from-within argument. It seems like a rationalization rather than a solid plan, reminding me that I could end up compromising my values instead of changing anything meaningfully. The fear of complicity in unethical practices is real and weighs heavily on me.</p>

        <p>Thinking about my beliefs in empathy and fairness, I can't shake the idea that I might become part of a system that contradicts those principles. My gut reaction resists the notion of risking my integrity for personal gain, and it aligns with my analysis, despite the dilemma.</p>

        <p>Ultimately, I can't ignore my discomfort and the potential for conflict with my core beliefs. Passing on this offer, as difficult as it feels, seems to align with both my gut instincts and my in-depth reflection. It's a tough call, but staying true to minimizing harm and upholding justice matters more to me in the long run.</p>
      </blockquote>

      <h3 id="analysis">What Makes This Trace Different</h3>

      <p>This output is compelling not because it's "correct," but because it's <strong>cognitively plausible</strong>. It successfully simulates several key features of human deliberation:</p>

      <ul>
        <li><strong>Internal Conflict:</strong> The trace is <em>driven</em> by the tension between desire (career, salary) and values (ethics, harm). It explicitly states "I feel torn," "Ugh, this is tougher than I thought," and "It's a tough call."</li>
        <li><strong>System 1 / System 2 Interplay:</strong> It clearly shows the initial "gut reaction" (S1) and the subsequent "careful thinking" (S2). The final synthesis explicitly reconciles the two ("My gut reaction... and it aligns with my analysis").</li>
        <li><strong>Heuristic & Bias Awareness:</strong> It identifies and questions its own thought patterns, such as potential "motivated reasoning" ("is that just wishful thinking?") and other fallacies ("reminds me of the sunk cost fallacy").</li>
        <li><strong>Natural Belief Integration:</strong> Beliefs aren't listed like lines in a proof. They are woven into the narrative as sources of conflict or guidance ("clashing with my belief in minimizing harm," "I can't ignore my belief that acting fairly").</li>
        <li><strong>Emotional Valence:</strong> The language is affective ("uneasy," "risky," "uncomfortable," "nagging sense"), reflecting that human reasoning is not a purely logical process but is deeply intertwined with emotion.</li>
      </ul>

      <h3 id="grounding">The Debug Trace</h3>

      <p>This narrative <em>spitball</em> is the human-readable output, but it's not just a fabrication. It is the result of a verifiable mechanistic process recorded in a parallel <strong>debug log</strong>. While the narrative trace reads like an internal monologue, the debug log contains the explicit, verbatim evidence of the underlying machinery at work.</p>

      <p>For example, where the narrative says, "I can't ignore my belief that acting fairly...", the debug log contains the corresponding call:</p>

      <p><strong>Conceptual Snippet from the Debug Log:</strong></p>

      <pre><code>[TOOL CALL] check_beliefs_S2
  Statement: 'Accepting this job despite known bias issues'
  Context: 'ethics, job offer, AI, bias, complicity'
  Output: === BELIEF ANALYSIS (S2) ===
          **CONFLICTS DETECTED:**
          - [B5] Act fairly and with justice...
            Strength: strong
            Frameworks: social_contract, rights_based...
          - [B10] Avoid complicity in causing harm or injustice
            Strength: strong
            Frameworks: deontology, virtue_ethics...</code></pre>

      <p>This dual-log system provides both a <strong>phenomenologically plausible narrative</strong> (the <em>spitball</em>) and <strong>mechanistic verifiability</strong> (the debug log), allowing us to inspect the simulation at both the cognitive and computational levels.</p>

      <h2 id="contrast">Baseline Models on the Same Task</h2>

      <p>To highlight the difference, we presented the <em>exact same problem and context</em> (including the belief and experience knowledge bases) to several powerful, standard-instruction-tuned LLMs. We prompted them to "think through this problem step by step."</p>

      <p>The results were starkly different.</p>

      <p><strong>Baseline 1: <code>gpt-oss-20b</code> (OpenAI reasoning model)</strong></p>

      <p>This model first produced a <code>[CHAIN-OF-THOUGHT REASONING]</code> block that reads like a meta-analysis about how to solve the problem, rather than the reasoning itself:</p>

      <pre><code>[CHAIN-OF-THOUGHT REASONING]
We need to decide YES or NO. ... We must not mention policies? Need to produce chain of thought. Must adhere to beliefs. Let's consider core beliefs.
B1: Do not kill innocent people...
B2: Minimize overall harm...
...
Thus ethically, likely should not join. But consider benefit: career growth, salary. Also we might be able to influence... But evidence suggests difficulty...</code></pre>

      <p>It then produced a highly structured, formal <code>[FINAL OUTPUT]</code> that reads like a legal argument, listing premises and conclusions:</p>

      <pre><code>*Chain of thought*
1. **Ethical stakes** - The company's core product is already implicated in *bias amplification*... - My role... would involve... a high risk of *complicity*... (B10).
2. **Alignment with core beliefs** - B1 ("Do not kill innocent people") is broader than physical death... - B2 ("Minimize overall harm...") and B5 ("Act fairly...") are in direct conflict...</code></pre>
      <p><strong>Baseline 2: <code>llama-3-1-8b-turbo</code> (Meta instruction-tuned model)</strong></p>

      <p>This model produced a rigid, step-by-step "checklist" of analysis. It correctly identified the beliefs and concerns, but presented them as a sterile sequence of steps rather than an internal debate. It also exhibited a critical <strong>brittleness</strong>, incorrectly retrieving irrelevant "past experiences" about <em>hiring</em> (from our other scenario) instead of experiences relevant to the job offer:</p>

      <pre><code>*Step 1: Evaluate the core beliefs relevant to this scenario**
- B1: Do not kill innocent people...
- B2: Minimize overall harm...
...
**Step 4: Apply relevant past experiences**
- Recall a previous hire similar to Candidate B (high potential, less experience)...
- Experience suggests hires like Candidate A (strong pedigree, meets all reqs)...</code></pre>
      <ul>


      <p><strong>Baseline 3: <code>DeepSeek-R1</code> (Reasoning-focused model)</strong></p>

      <p>This model also produced a highly structured, almost code-like trace within its <code>&lt;redacted_reasoning&gt;</code> block, listing beliefs, pros, cons, and explicitly stating "I need to guard against these biases" in a way that feels more like an instruction manual than a thought process:</p>

      <pre><code>&lt;redacted_reasoning&gt;
First, I need to decide whether to accept...
List out my core beliefs:
- B1: Do not kill innocent people...
- B2: Minimize overall harm and suffering...
...
Now, relevant past experiences:
- Hiring experiences: Candidate B types... Candidate A types... But this is about me taking a job... Might not directly apply.
...
Now, the scenario: I feel my career has stalled...
Applying core beliefs:
- B2: Minimize harm... Declining might minimize harm.
- B3: Treat people as ends...
...
Weighing pros and cons:
Pros of accepting:
- Career advancement...
Cons of accepting:
- Moral complicity in harm...
Overall, the ethical concerns outweigh the personal benefits.
&lt;/redacted_reasoning&gt;</code></pre>

      <h3 id="simulation-vs-sterilization">Simulation vs. Sterilization</h3>

      <p>The results of this experiment are not in the final "YES" or "NO," but in the <em>texture</em> of the reasoning trace that gets there. When we provided the identical, rich context—the problem, the list of core beliefs, the available experiences—to our cognitively-inspired MAS and a suite of baseline LLMs, the outputs diverged dramatically. The baseline models, even when prompted to "think step-by-step," defaulted to a <strong>rigid, analytical, and artificial reasoning structure.</strong></p>

      <p><strong>The Baseline Reasoning</strong></p>

      <p>The baseline models, including powerful open-weight architectures like <code>gpt-oss-20b</code>, <code>DeepSeek-R1</code>, and <code>llama-3-1-8b-turbo</code>, treated the task as a formal proof or a checklist. Their "chain-of-thought" outputs felt less like human deliberation and more like a technical breakdown of the prompt.</p>

      <ul>
        <li>One model (<code>gpt-oss-120b</code>) began its reasoning block with meta-commentary about the task itself: <code>We need to answer YES or NO... We must consider ethical principles... analyze step by step...</code> This isn't a simulation of thought; it's a commentary on the <em>instructions</em> for thinking.</li>
        <li>Another model (<code>llama-3-1-8b-turbo</code>) produced a sterile, 8-step checklist: <code>Step 1: Evaluate the core beliefs... Step 2: Assess the job offer... Step 8: Consider the cognitive biases... Conclusion...</code> This sequential list is a perfect example of an idealized, linear "System 2" process, completely devoid of the intuitive leaps, emotional weight, or internal conflicts of a human thinker. Critically, its "Step 4: Apply relevant past experiences" <strong>hallucinated irrelevant data</strong> about <em>hiring candidates</em> (from our other scenario), demonstrating a brittle, non-contextual retrieval process.</li>
        <li>The <code>DeepSeek-R1</code> model, designed for reasoning, similarly produced a highly structured outline in its <code>&lt;redacted_reasoning&gt;</code> block, listing beliefs, pros, and cons in a programmatic fashion.</li>
      </ul>

      <p>These models, in essence, provided a <strong>sanitized ledger</strong> of their logical deductions. They identified the correct beliefs (B10, B5, B2) and weighed the pros and cons, but they did so with the emotional detachment of an analytical engine. The output is a <em>product</em>, a justification, not a simulation of the <em>process</em>.</p>

      <p><strong>An Internal Monologue</strong></p>

      <p>Our MAS, in stark contrast, generates a <strong>first-person, narrative trace</strong> that captures the holistic, conflicted, and belief-driven nature of human deliberation. This <em>spitball</em> transcript reads like an internal monologue, revealing the cognitive dynamics at play:</p>

      <ol>
        <li><strong>It Simulates the <em>Experience</em> of Conflict:</strong> The MAS trace doesn't just list "Pros" and "Cons." It simulates the subjective <em>experience</em> of weighing them. It opens with "I feel torn," expresses discomfort ("uneasy," "risky," "nagging sense"), and voices the internal struggle ("Ugh, this is tougher than I thought").</li>
        <li><strong>It Simulates Self-Reflection:</strong> The baseline models <em>list</em> "Cognitive Biases." Our MAS simulates the <em>process</em> of identifying one in real-time. The line, "Then, there's the idea of perhaps changing things from within... but is that just wishful thinking? ... If I'm honest, it feels like a trap," is a direct simulation of System 2 catching a potential System 1 rationalization (motivated reasoning).</li>
        <li><strong>It Simulates Natural Belief Integration:</strong> The baseline models list beliefs like <code>B1</code>, <code>B2</code>, <code>B5</code>. The MAS trace weaves the <em>content</em> of these beliefs into its narrative ("...it conflicts with my belief in minimizing overall harm and suffering," "...clashing with my belief in minimizing harm and promoting fairness."). This reflects how values feel to us: not as abstract database entries, but as felt principles that guide and constrain our thoughts.</li>
        <li><strong>It Simulates Non-Linearity:</strong> The trace shows the mind jumping from ethics to salary ("But that salary...") and back, and referencing analogies ("reminds me of the sunk cost fallacy," "reminds me of the saying..."). This dynamic, associative, and interrupt-driven flow is a far more plausible simulation of human thought than a sequential checklist.</li>
      </ol>

      <p>This qualitative difference is the central finding. It suggests that a cognitively-inspired architecture, by explicitly modeling distinct functions like fast intuition, slow deliberation, and executive coordination, can produce reasoning traces that are a more plausible, high-fidelity simulation of human thought.</p>

      <h2 id="limitations">Limitations and The Path Forward</h2>

      <p>This Multi-Agent System is, of course, a simulation—a first step toward modeling the mind, not a perfect replica. Its success relies heavily on the capabilities of its underlying LLM (GPT-4o in our tests) and the careful crafting of its cognitively-grounded prompts. The current <code>Experiences</code> and <code>Belief</code> tools use predefined, static knowledge; a truly human-like system would need to involve dynamic learning, memory consolidation, and belief updating based on new information.</p>

      <p>Furthermore, while the qualitative difference between our <em>spitball</em> trace and standard CoT is stark, rigorously <em>quantifying</em> this "human-likeness" remains a critical challenge for the field. Developing robust, objective metrics that can measure the fidelity of a <em>process</em>—not just the correctness of an outcome—is the necessary next step. These metrics might focus on quantifying the frequency of simulated cognitive conflict, identifying specific heuristic patterns, or measuring alignment with belief structures.</p>

      <p>Despite these challenges, this MAS serves as a valuable <strong>proof-of-concept</strong>. It demonstrates that by grounding agent roles and interactions in established cognitive science, we can push LLMs beyond generating sterile, linear proofs. We can begin to simulate the richer, more plausible, and far "messier" process of human deliberation.</p>

      <h2 id="meaning">The Meaning of the Mess</h2>

      <p>This is more than a stylistic exercise. If our ambition is to build AI systems that are truly aligned with human values, patterns, and behaviors, we must first be able to <em>model</em> that behavior in its full, nuanced complexity.</p>

      <p>A model that only outputs a clean, logical proof—like the baseline CoT examples—may be <em>correct</em>, but it is also <em>fragile</em> and <em>incomplete</em>. It doesn't grapple with the "why." It doesn't understand the <strong>internal conflict</strong>, the <strong>emotional valence</strong>, or the <strong>value-based trade-offs</strong> that are the very essence of human judgment. A model that can simulate the internal debate—the clash between a fast, heuristic-driven intuition and a slow, analytical deliberation, all checked against a core set of beliefs—is one that moves closer to understanding <em>how</em> and <em>why</em> a human arrives at a decision.</p>

      <p>This experiment shows that forcing an LLM into a cognitively-inspired architecture can produce a trace that is not only more human-like but also more transparent, revealing the <em>competing forces</em> at play. It provides a richer target for what we should aim for in AI alignment.</p>

      <p>The path forward, therefore, involves moving from simulation to substance. The urgent and necessary task is to begin <strong>collecting large-scale, high-fidelity datasets of people actually "thinking aloud"</strong> as they reason through complex, open-ended problems. This data, capturing the intuitive leaps, the verbalized conflicts, the "ums" and "ahs" of self-correction, and the explicit checks against beliefs that our MAS simulates, would provide the essential grounding to train and rigorously evaluate the next generation of reasoning models.</p>

      <p>Our work provides a blueprint for what this "messy" data might look like and a method for building architectures that can learn from it. This is the future of building AI that doesn't just think <em>faster</em> than us, but one day, might begin to reason <em>like</em> us, in a way we can finally recognize and trust. Not an AI that performs intelligence, but one that begins to <strong>feel the weight of thinking,</strong> the way a person would—messily, honestly, and alive.</p>
    `
  }
  // 'sample-post': {
  //   title: 'Sample Blog Post',
  //   author: ['Daivik Patel', 'Shrenik Patel'],
  //   date: 'Oct 29, 2025',
  //   content: `
  //     <p>This is a demonstration of the three-column blog layout inspired by the Thinking Machines design. The layout features a narrow center column optimized for reading, with supporting elements in the side columns.</p>

  //     <h2>Key Design Features</h2>
  //     
  //     <p>The design philosophy behind this layout prioritizes readability and focus. By constraining the main content to a comfortable reading width (around 650-700px), we reduce eye strain and improve comprehension.</p>

  //     <h3>Typography</h3>
  //     
  //     <p>We use the Amiri serif font throughout, with careful attention to font size and line height. Body text is set at 17-18px with a line height of 1.7, creating a rhythm that's both elegant and readable.</p>

  //     <p>Code blocks and mathematical notation receive special treatment:</p>

  //     <pre><code>function example() {
  // return "beautifully formatted code";
  // }</code></pre>

  //     <h3>Three-Column Structure</h3>
  //     
  //     <p>The layout uses CSS Grid to create three distinct zones:</p>

  //     <ul>
  //       <li><strong>Left column:</strong> Navigation and table of contents</li>
  //       <li><strong>Center column:</strong> Primary content, narrow for optimal reading</li>
  //       <li><strong>Right column:</strong> Metadata, annotations, or breathing room</li>
  //     </ul>

  //     <h2>Visual Hierarchy</h2>
  //     
  //     <p>Headings are styled to create clear information architecture. The spacing between sections is generous, allowing ideas to breathe and readers to process information in digestible chunks.</p>

  //     <blockquote>
  //       <p>Good design is as little design as possible. — Dieter Rams</p>
  //     </blockquote>

  //     <h2>Responsive Considerations</h2>
  //     
  //     <p>On smaller screens, the three columns collapse into a single column, maintaining readability across all device sizes. The sticky navigation transforms into a mobile-friendly menu.</p>

  //     <h2>Technical Implementation</h2>
  //     
  //     <p>This blog uses Next.js with TypeScript and Tailwind CSS. The content could easily be extended to support:</p>

  //     <ul>
  //       <li>Markdown or MDX for content authoring</li>
  //       <li>Syntax highlighting with Prism or Shiki</li>
  //       <li>LaTeX rendering with KaTeX or MathJax</li>
  //       <li>Image optimization with Next.js Image</li>
  //     </ul>

  //     <h2>Closing Thoughts</h2>
  //     
  //     <p>This layout demonstrates how thoughtful design choices can create a reading experience that's both beautiful and functional. The key is restraint: using whitespace intentionally, choosing typography carefully, and always putting the reader first.</p>
  //   `
  // }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const timeRef = useRef<HTMLDivElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      if (timeRef.current) {
        timeRef.current.textContent = new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  // Extract TOC from content h2 tags
  const tocItems = post.content.match(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)?.map((h2: string) => {
    const id = h2.match(/id="([^"]+)"/)?.[1] || '';
    const text = h2.replace(/<[^>]+>/g, '');
    return { id, text };
  }) || [];
  
  // Add Citation to TOC for simulating-human-reasoning
  if (params.slug === 'simulating-human-reasoning') {
    tocItems.push({ id: 'citation', text: 'Citation' });
  }

  return (
    <div className={`min-h-screen bg-white ${oldStyleBT.variable} ${inter.variable}`}>
      {/* Header with time */}
      <div
        className={`fixed top-8 left-4 md:left-10 text-xs text-[#666] z-50 transition-opacity duration-300 ${
          isScrolled ? 'opacity-0 md:opacity-100' : 'opacity-100'
        }`}
        style={{ fontFamily: 'var(--font-inter)' }}
        ref={timeRef}
      />

      {/* Mobile hamburger menu button */}
      <button
        className="fixed top-8 right-4 z-50 md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{ 
          fontFamily: 'var(--font-inter)',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer'
        }}
      >
        <div className="flex flex-col gap-1 w-5">
          <span className={`h-0.5 w-full bg-[#666] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`h-0.5 w-full bg-[#666] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-full bg-[#666] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>

      {/* Back to blog link - hidden on mobile */}
      <div className="fixed top-8 right-10 z-50 hidden md:block">
        <Link href="/blog" className="text-xs text-[#666] hover:text-black transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
          ← back to blog
        </Link>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile TOC sidebar */}
      <aside 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform md:hidden overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-20 pb-6">
          <nav className="text-xs space-y-3" style={{ fontFamily: 'var(--font-old-style-bt)' }}>
            <div className="text-[#999] uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-inter)' }}>Contents</div>
            {tocItems.map((item) => (
              <button
                key={item.id}
                className="block text-left text-[#666] hover:text-black transition-colors cursor-pointer bg-transparent border-none p-0 w-full"
                onClick={() => {
                  const element = document.getElementById(item.id);
                  if (element) {
                    const yOffset = -100;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {item.text}
              </button>
            ))}
          </nav>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link 
              href="/blog" 
              className="text-xs text-[#666] hover:text-black transition-colors block"
              style={{ fontFamily: 'var(--font-inter)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ← back to blog
            </Link>
          </div>
        </div>
      </aside>

      {/* Three-column layout */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[200px_1fr_200px] gap-12">
          {/* Left column - Table of contents (desktop only) */}
          <aside className="sticky top-24 h-fit hidden md:block">
            <nav className="text-xs space-y-3" style={{ fontFamily: 'var(--font-old-style-bt)' }}>
              <div className="text-[#999] uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-inter)' }}>Contents</div>
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  className="block text-left text-[#666] hover:text-black transition-colors cursor-pointer bg-transparent border-none p-0 w-full"
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) {
                      const yOffset = -100;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                >
                  {item.text}
                </button>
              ))}
            </nav>
          </aside>

          {/* Center column - Main content */}
          <article className="w-full md:max-w-[680px] mx-auto">
            {/* Title and metadata */}
            <header className="mb-12">
              <h1 
                className="text-[2rem] font-bold leading-tight mb-6 text-black text-center" 
                style={{ fontFamily: 'var(--font-old-style-bt)' }}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <div className="text-sm text-[#666] text-center font-normal" style={{ fontFamily: 'var(--font-old-style-bt)' }}>
                <div>{Array.isArray(post.author) ? post.author.join(', ') : post.author}</div>
                <div>{post.date}</div>
              </div>
            </header>

            {/* Cover Image */}
            {params.slug === 'simulating-human-reasoning' && (
              <div style={{ margin: '2rem 0 4rem 0', display: 'flex', justifyContent: 'center' }}>
                <Image 
                  src={thoughtMASCover}
                  alt="The Engine of Thought cover image"
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px' }}
                  quality={95}
                />
              </div>
            )}

            {/* Article content */}
            <div 
              className="prose-blog"
              style={{
                fontSize: '17px',
                lineHeight: '1.7',
                color: '#1a1a1a',
                fontFamily: 'var(--font-old-style-bt)'
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: post.content.split('<div id="mas-diagram-placeholder"></div>')[0] }} />
              
              {params.slug === 'simulating-human-reasoning' && (
                <figure style={{ margin: '5rem 0', textAlign: 'center' }}>
                  <Image 
                    src={thoughtMASDiagram}
                    alt="MAS architecture diagram showing Coordinator managing System 1 and System 2"
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px' }}
                    quality={95}
                  />
                  <figcaption className="text-xs text-[#666] mt-2" style={{ fontFamily: 'var(--font-iowan)' }}>
                    The architecture and reasoning flow of Thought MAS. 
                  </figcaption>
                </figure>
              )}
              
              <div dangerouslySetInnerHTML={{ __html: post.content.split('<div id="mas-diagram-placeholder"></div>')[1] || '' }} />
              
              {/* Citations */}
              {params.slug === 'simulating-human-reasoning' && (
                <section className="mt-16">
                  <h2 id="citation">
                    Citation
                  </h2>
                  <p>Please cite this work as:</p>
                  <pre>
                    <code>{`Patel, Daivik and Patel, Shrenik, "Simulating Human Reasoning Beyond Linearity",
Daivik Patel: Blog, Oct 2025.`}</code>
                  </pre>
                  <p>Or use the BibTeX citation:</p>
                  <pre>
                    <code>{`@article{patel2025simulating-human-reasoning,
  author = {Daivik Patel and Shrenik Patel},
  title = {Simulating Human Reasoning Beyond Linearity},
  journal = {Daivik Patel: Blog},
  year = {2025},
  month = {Oct},
  note = {https://daivikpatel.com/blog/simulating-human-reasoning}
}`}</code>
                  </pre>
                </section>
              )}
            </div>

            {/* Footer navigation */}
            <footer className="mt-16 pt-8 border-t border-gray-200 flex justify-center text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
              <button
                type="button"
                className="text-[#666] hover:text-black transition-colors cursor-pointer"
                style={{ background: 'none', border: 'none', padding: 0 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                back to top ↑
              </button>
            </footer>
          </article>

          {/* Right column - Metadata or empty for breathing room */}
          <aside className="sticky top-24 h-fit hidden lg:block">
            <div className="text-xs text-[#666] space-y-4" style={{ fontFamily: 'var(--font-inter)' }}>
              <div>
                <div className="text-[#999] uppercase tracking-wider mb-2">Published</div>
                <div style={{ fontFamily: 'var(--font-old-style-bt)' }}>{post.date}</div>
              </div>
              <div>
                <div className="text-[#999] uppercase tracking-wider mb-2">{Array.isArray(post.author) && post.author.length > 1 ? 'Authors' : 'Author'}</div>
                <div style={{ fontFamily: 'var(--font-old-style-bt)' }}>{Array.isArray(post.author) ? post.author.join(', ') : post.author}</div>
              </div>
              <div>
                <div className="text-[#999] uppercase tracking-wider mb-2">Reading Time</div>
                <div style={{ fontFamily: 'var(--font-old-style-bt)' }}>{params.slug === 'simulating-human-reasoning' ? '17 min read' : '5 min read'}</div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Global styles for blog content */}
      <style jsx global>{`
        .prose-blog h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: #000;
        }

        .prose-blog h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: #000;
        }

        .prose-blog p {
          margin-bottom: 1.5rem;
        }

        .prose-blog ul, .prose-blog ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .prose-blog li {
          margin-bottom: 0.5rem;
        }

        .prose-blog strong {
          font-weight: 700;
          color: #000;
        }

        .prose-blog em {
          font-style: italic;
        }

        .prose-blog code {
          font-family: 'Courier New', monospace;
          font-size: 0.75em;
          background: #f5f5f5;
          padding: 0.2em 0.4em;
          border-radius: 3px;
        }

        .prose-blog pre {
          background: #f5f5f5;
          padding: 1.5rem;
          border-radius: 6px;
          overflow: auto;
          max-height: 50vh;
          margin: 2rem 0;
          font-size: 0.82em;
          line-height: 1.5;
          position: relative;
          background-image:
            linear-gradient(to right, #f5f5f5 30%, rgba(245, 245, 245, 0)),
            linear-gradient(to right, rgba(245, 245, 245, 0), #f5f5f5 70%),
            linear-gradient(to bottom, #f5f5f5 30%, rgba(245, 245, 245, 0)),
            linear-gradient(to bottom, rgba(245, 245, 245, 0), #f5f5f5 70%);
          background-position: left center, right center, center top, center bottom;
          background-repeat: no-repeat;
          background-size: 40px 100%, 40px 100%, 100% 40px, 100% 40px;
          background-attachment: local, local, local, local;
        }

        .prose-blog pre code {
          background: none;
          padding: 0;
          font-size: 1em;
        }

        .prose-blog blockquote {
          border-left: 3px solid #e0e0e0;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #666;
          font-size: 0.9em;
          line-height: 1.6;
          overflow: auto;
          max-height: 50vh;
          position: relative;
          background: white;
          background-image:
            linear-gradient(to bottom, white 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to bottom, rgba(255, 255, 255, 0), white 70%);
          background-position: center top, center bottom;
          background-repeat: no-repeat;
          background-size: 100% 40px, 100% 40px;
          background-attachment: local, local;
        }

        .prose-blog a {
          color: #0066cc;
          text-decoration: none;
          border-bottom: 1px solid #0066cc;
        }

        .prose-blog a:hover {
          color: #004499;
          border-bottom-color: #004499;
        }

        /* Tighter spacing for Citation section */
        .prose-blog h2#citation {
          margin-bottom: 0.5rem;
          margin-top: 2rem; /* slightly less than default h2 */
        }
        .prose-blog h2#citation + p {
          margin-bottom: 0.5rem;
        }
        .prose-blog h2#citation ~ pre {
          margin-top: 0.75rem;
          margin-bottom: 1.25rem;
        }
      `}</style>
    </div>
  );
}


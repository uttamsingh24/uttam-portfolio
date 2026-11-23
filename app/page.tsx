 "use client";

import { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, ArrowRight, Menu, X, Github, Linkedin,
  Mail, Sparkles, Activity, Layers3, Workflow, BrainCircuit, Terminal,
  ExternalLink, MoveUpRight, CheckCircle2, Cpu, Network, Gauge
} from "lucide-react";

const projects = [
  {
    id: "01", name: "SemantiCache", type: "AI INFRASTRUCTURE",
    headline: "Make every token earn its place.",
    description: "A semantic caching and complexity-aware routing gateway that reduces redundant LLM calls, lowers inference spend, and makes usage visible.",
    stack: ["FastAPI", "Redis", "FAISS", "PostgreSQL", "React", "Docker"],
    accent: "lime", icon: <Gauge size={20} />,
    metrics: ["Semantic response cache", "Model-aware routing", "Spend & latency dashboard"]
  },
  {
    id: "02", name: "AutoPatch", type: "AGENTIC AI",
    headline: "A repair loop with guardrails.",
    description: "A three-agent CI repair pipeline: propose a patch, critique the diff, run tests, and iterate safely inside a sandbox before opening a pull request.",
    stack: ["LangGraph", "Docker", "GitHub Actions", "FastAPI"],
    accent: "violet", icon: <Workflow size={20} />,
    metrics: ["Sandboxed execution", "Hard iteration cap", "Auditable agent trail"]
  },
  {
    id: "03", name: "MSME Setu", type: "FULL-STACK + AI",
    headline: "Make complex schemes easier to navigate.",
    description: "A citation-backed RAG copilot for MSME scheme discovery, paired with an eligibility checker that surfaces likely matches from a short form.",
    stack: ["React", "Node.js", "FastAPI", "PostgreSQL", "AWS"],
    accent: "blue", icon: <Layers3 size={20} />,
    metrics: ["Answers grounded in source clauses", "Eligibility workflow", "Founder-focused UX"]
  }
];

const skillGroups = [
  { title: "AI systems", items: "Agent orchestration · Agentic RAG · LLM evaluation · LLMOps · Guardrails · MCP · Semantic search · LoRA/PEFT" },
  { title: "Engineering", items: "Python · JavaScript · Java · FastAPI · Node.js · React · REST/GraphQL · Microservices" },
  { title: "Data & platform", items: "PostgreSQL · pgvector · Qdrant · Redis · FAISS · AWS · Docker · Kubernetes · CI/CD" },
  { title: "Research", items: "Transformers · GraphSAGE · CNNs · LSTM/Bi-LSTM · VAE · Hugging Face · Scikit-learn" }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState("01");
  const [copied, setCopied] = useState(false);
  const email = "09uttamkumarsingh@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Uttam home"><span className="brand-mark">u.</span><span>UTTAM KUMAR SINGH</span></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={14} /></a>
        </div>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-topline"><span className="status"><i /> OPEN TO AI ENGINEERING ROLES</span><span className="hero-index">PORTFOLIO / 2026</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">AI ENGINEER · FULL-STACK DEVELOPER</p>
            <h1>Building AI<br />that <span className="italic">works</span><span className="period">.</span></h1>
            <p className="hero-sub">I turn LLMs, agents, and research into dependable systems people can actually use.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-footnote"><span className="line" /> Based in India · Building for the real world</div>
          </div>
          <div className="hero-art" aria-label="Abstract AI systems visualization">
            <div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" /><div className="art-orbit orbit-c" />
            <div className="art-core"><BrainCircuit size={43} strokeWidth={1.15} /><span>INTELLIGENCE<br />IN MOTION</span></div>
            <div className="art-node node-a"><Activity size={14} /> TRACE</div>
            <div className="art-node node-b"><Network size={14} /> RETRIEVE</div>
            <div className="art-node node-c"><Cpu size={14} /> INFER</div>
            <div className="art-caption">SYSTEMS / 001—003</div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>FOCUS AREAS</span><div className="focus-list"><span>Agentic AI</span><b>·</b><span>LLM Infrastructure</span><b>·</b><span>Applied Research</span></div>
          <a href="#work" className="scroll-cue">SCROLL TO EXPLORE <ArrowDownRight size={14} /></a>
        </div>
      </section>

      <section className="proof-strip">
        <div className="shell proof-inner">
          <div><strong>01</strong><span>AI Engineer Intern<br />Stealth AI Infrastructure Startup</span></div>
          <div><strong>1st</strong><span>Place · TechZephyr 3.0<br />24-hour ML Hackathon</span></div>
          <div><strong>1,200+</strong><span>Students reached<br />GDSC KIIT AI/ML Team</span></div>
          <div><strong>AWS</strong><span>Certified<br />Cloud Practitioner</span></div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-head"><div><p className="eyebrow">SELECTED BUILDS / 2024—26</p><h2>Proof of <span className="italic">thinking.</span></h2></div><p className="section-intro">Systems designed around the hard parts: cost, reliability, traceability, and useful outcomes.</p></div>
        <div className="project-layout">
          <div className="project-list">
            {projects.map((p) => <button key={p.id} className={`project-tab ${activeProject === p.id ? "active" : ""}`} onClick={() => setActiveProject(p.id)}><span className="project-number">{p.id}</span><span className="project-tab-name">{p.name}<small>{p.type}</small></span><ArrowUpRight size={17} className="tab-arrow" /></button>)}
          </div>
          {projects.filter(p => p.id === activeProject).map(p => <article className={`project-feature ${p.accent}`} key={p.id}>
            <div className="feature-top"><span className="feature-icon">{p.icon}</span><span className="feature-type">{p.type} / {p.id}</span><span className="feature-open"><MoveUpRight size={17} /></span></div>
            <div className="feature-visual">
              {p.id === "01" ? <div className="cache-diagram"><div className="diagram-box user-box">REQUEST</div><div className="diagram-line" /><div className="diagram-split"><div className="diagram-box cache-box">SEMANTIC<br />CACHE</div><div className="diagram-box model-box">MODEL<br />ROUTER</div></div><div className="diagram-line short" /><div className="diagram-box response-box">RESPONSE <span>↗</span></div><div className="diagram-label">LOWER COST / LOWER LATENCY</div></div> :
              p.id === "02" ? <div className="agent-diagram"><div className="agent-loop">ITERATE UNTIL SAFE</div><div className="agent-nodes"><span>CODER</span><i>→</i><span>CRITIC</span><i>→</i><span>TEST</span></div><div className="agent-return">↶ feedback + stack trace</div><div className="agent-result">PASS → PR <CheckCircle2 size={13} /></div></div> :
              <div className="msme-diagram"><div className="doc-stack"><span>SCHEME DOCS</span><span>ELIGIBILITY</span><span>POLICY CLAUSES</span></div><div className="doc-arrow">→</div><div className="copilot-card"><Sparkles size={15} /><span>MSME SETU</span><small>Grounded answer + citations</small><div className="citation-lines"><i /><i /><i /></div></div></div>}
            </div>
            <div className="feature-copy"><p className="eyebrow">{p.name}</p><h3>{p.headline}</h3><p>{p.description}</p><ul>{p.metrics.map(m => <li key={m}><CheckCircle2 size={14} />{m}</li>)}</ul></div>
            <div className="stack-row">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
          </article>)}
        </div>
      </section>

      <section className="research-band">
        <div className="shell research-inner">
          <div className="research-stamp"><span>RESEARCH</span><span>01 / PUBLICATION</span><BrainCircuit size={31} /></div>
          <div className="research-copy"><p className="eyebrow">MULTIMODAL DEEP LEARNING</p><h2>CrisisNet<span className="period">.</span></h2><p>A framework for humanitarian crisis early warning combining graph propagation, temporal forecasting, and survival analysis across a 473K-record, 105-district dataset.</p><div className="research-stats"><div><strong>0.8994</strong><span>AUC-ROC · anomaly detection</span></div><div><strong>96.30%</strong><span>Node classification accuracy</span></div><div><strong>7</strong><span>Model components</span></div></div></div>
          <div className="research-note">FIRST-AUTHORED<br />MULTIMODAL PAPER<br /><span>KIIT · 2026</span></div>
        </div>
      </section>

      <section className="section shell" id="approach">
        <div className="section-head"><div><p className="eyebrow">HOW I BUILD</p><h2>From promising<br />to <span className="italic">production.</span></h2></div><p className="section-intro">A strong demo is a start. I care about what happens when systems meet real users, messy data, and real constraints.</p></div>
        <div className="approach-grid">
          <article><span className="approach-no">01 / UNDERSTAND</span><Terminal size={22} /><h3>Start with the constraint.</h3><p>Define the user outcome, failure modes, latency budget, and cost envelope before choosing the architecture.</p></article>
          <article><span className="approach-no">02 / INSTRUMENT</span><Activity size={22} /><h3>Make behavior visible.</h3><p>Trace agent steps, evaluate outputs, and build feedback loops so issues become diagnosable—not mysterious.</p></article>
          <article><span className="approach-no">03 / SHIP SAFELY</span><CheckCircle2 size={22} /><h3>Design for recovery.</h3><p>Use bounded workflows, tests, guardrails, and auditable execution to make AI features dependable.</p></article>
        </div>
      </section>

      <section className="skills-section" id="about">
        <div className="shell skills-inner">
          <div className="skills-title"><p className="eyebrow">THE TOOLKIT</p><h2>Curious by nature.<br /><span className="italic">Engineer by practice.</span></h2><p>Computer Science & Engineering · KIIT<br />2022—2026</p></div>
          <div className="skills-list">{skillGroups.map((g, i) => <div className="skill-group" key={g.title}><span>0{i+1}</span><div><h3>{g.title}</h3><p>{g.items}</p></div></div>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <p className="eyebrow">HAVE A CHALLENGE WORTH SOLVING?</p><h2>Let&apos;s make<br /><span className="italic">something useful.</span></h2>
          <div className="contact-bottom"><p>Interested in AI engineering, infrastructure, and products that need to work beyond the demo. If that sounds like your team, I&apos;d love to talk.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${email}`}>Email me <Mail size={16} /></a><a className="social-link" href="https://www.linkedin.com/in/uttam-kumar-singh-445b73372/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={13} /></a><button className="social-link" onClick={copyEmail}><span>{copied ? "Copied!" : email}</span>{copied ? <CheckCircle2 size={15} /> : <ArrowUpRight size={15} />}</button></div></div>
          <footer><a className="brand" href="#top"><span className="brand-mark">u.</span><span>UTTAM KUMAR SINGH</span></a><span>BUILT WITH INTENTION · © 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
        </div>
      </section>
    </main>
  );
}

/**
 * Single source of truth for all site content.
 * Edit this file only; components just render it.
 * Anything marked TODO is unknown / needs you to fill in.
 */

export type Link = { label: string; href: string };

export type Role = {
  title: string;
  org: string;
  place?: string;
  period: string;
  objective: string;
  points: string[];
  links?: Link[]; // TODO: paper / repo / org links
};

export type Project = {
  name: string;
  period: string;
  objective: string;
  points: string[];
  stack?: string[]; // TODO: fill in tech stack chips
  links?: Link[]; // TODO: GitHub / demo / write-up links
};

export const profile = {
  name: "Ishan Yash Patel",
  headline: "Economics undergraduate at IIT Kharagpur building and researching LLM agents.",
  summary:
    "Research and engineering across graph-based LLM reasoning, multi-agent systems, agent security and privacy, and applied ML.",
  degree: "B.S. (Hons.) / M.S. in Economics",
  department: "Department of Economics, Indian Institute of Technology Kharagpur",
  email: "ishanyash1919@gmail.com",
  phone: "+91-8005701448",
  links: {
    github: "https://github.com/Ishaanrcks",
    linkedin: "https://www.linkedin.com/in/", // TODO: add your profile slug, e.g. /in/your-handle
    resume: "", // TODO: put resume.pdf in /public and set "/resume.pdf"
  },
  photo: "", // TODO: put image in /public and set e.g. "/me.jpg" (shown in hero when set)
};

export const experience: Role[] = [
  {
    title: "Research Intern",
    org: "The University of Queensland",
    place: "Australia",
    period: "Sept 2026 – Present",
    objective:
      "Design a better architecture inspired by graph-based LLM reasoning methods, under Professor Moloud Abdar.",
    points: [
      "Reproduced GFM-RAG and G-Reasoner, GNN-based multi-hop retrievers for LLM reasoning, re-running training on a subset of data.",
      "Exploring self-distillation, BF16 training and pre-training ablations to boost retrieval accuracy and cut training/inference cost.",
    ],
  },
  {
    title: "Visiting Undergraduate Researcher",
    org: "The Pennsylvania State University",
    place: "USA",
    period: "May 2026 – Jul 2026",
    objective:
      "Design and prototype an IFC-based, system-level security protocol for multi-agent systems like OpenClaw, under Professor Peng Liu.",
    points: [
      "Co-authored a paper showing classical Mandatory Access Control is enforceable but impractical for multi-agent OpenClaw deployments.",
      "Built three Discord-based BLP case studies mapping subjects, objects and security labels; policy edges grew from 8 to 42+ (2 to 3 agents), forcing manual routing and declassification.",
      "Contributed to HiStar++, an in-process IFC runtime and isolated broker process in OpenClaw enforcing label, taint and clearance checks via IPC across tool calls.",
      "Owned the tool-to-object group (runBeforeToolCall) of four hook groups, enforcing No-Write-Down via block/approval verdicts.",
      "Implementing an IFC declassification orchestrator that finds and applies downgrade gates from L_in to L_out, with human-approval fallback.",
    ],
  },
  {
    title: "Research Intern",
    org: "Indian School of Business",
    period: "Feb 2026 – May 2026",
    objective:
      "Architect a system that generates personalized learning trajectories for career transitions into Digital Transformation roles.",
    points: [
      "Designed a Directed Acyclic Graph in Neo4j and PostgreSQL to compute the skill delta between a user's current occupation and target role.",
      "Extracted prerequisites and skill upgrades from professor curricula, mapping Bloom's progressions into deterministic routing edges.",
      "Architected a multi-agent system and schema to autonomously generate structured, step-by-step transition courses bridging the user's knowledge gap.",
    ],
  },
  {
    title: "Applied AI Engineering Intern",
    org: "NephroAI / Icertis",
    place: "Remote",
    period: "Mar 2026 – May 2026",
    objective:
      "Automate and accelerate DevOps triage by deploying a multi-agent AI system for bug analysis.",
    points: [
      "Architected a multi-agent DevOps triage system using CrewAI / AutoGen and FastAPI to auto-resolve Azure DevOps support tickets.",
      "Engineered GitHub MCP tools, bypassing 30 req/min rate limits via prompt-level API batching and SSE timeout handling.",
      "Designed vector retrieval pipelines on Azure AI Search to auto-resolve recurring tickets from history, reducing LLM API costs.",
      "Enforced zero-hallucination guardrails by isolating Planner, Explorer and Synthesizer agent responsibilities across the pipeline.",
    ],
  },
  {
    title: "Research Intern",
    org: "Deakin University",
    place: "Australia",
    period: "May 2025 – Jul 2025, Sept 2025 – Present", // TODO: confirm second period
    objective:
      "Safeguard privacy in agent-to-agent communication, under Professor Ye Zhu.",
    points: [
      "Built two MCP servers with 9 tools: a local server for file access and doc search, and a remote server for contacts, calendar and mailing.",
      "Developed Mail and File Execution MCP tools and Chroma-based RAG pipelines to automate document extraction and targeted mailing.",
      "Deployed the remote server via SSH (Streamable HTTP / SSE) and ran the local one over stdio, connected to Cursor, Continue, VSCode and Claude Desktop.",
      "Demonstrated MCE, RAC and CT via direct and RADE attacks against GPT-4o, Claude and Llama-70B, documenting how injections fooled models.",
      "Executed multi-turn obfuscated privacy attacks on remote GPU LLMs via SSH; traced weaknesses in tool-augmented pipelines and simulated adversarial queries on a vector-based retrieval pipeline.",
    ],
  },
  {
    title: "Full Stack Developer",
    org: "Insteasy",
    period: "June 2024 – Nov 2024",
    objective:
      "Contributed to Insteasy, a SaaS platform enabling end-to-end academic management for educational institutions.",
    points: [
      "Tested Django APIs using Postman and managed user creation directly through the Heroku Admin dashboard.",
      "Built Django models and a forum where students post doubts with descriptions, attachments and academic tags.",
      "Built and tested REST APIs with Django, enabling tutors to fetch subjects and questions for custom or auto-generated quizzes.",
      "Designed a notice-board feature for tutors to share updates, filtered by course, batch or individual students.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Voice-Native Hospital Call Agent (DataForge)",
    period: "Sept 2026",
    objective:
      "A low-latency voice agent that handles live hospital calls end to end, with clean barge-in and graceful failure recovery.",
    points: [
      "Built a LangGraph voice agent with 24 tools over a 29-table SQLite DB, logging per-turn latency, tool calls and end-of-call summaries.",
      "Engineered turn-taking with Silero VAD, an adaptive noise gate and token-fenced barge-in that cancels stale LLM and tool-call output.",
      "Designed failure handling so calls never go silent: on LLM failures, apologise, save context for same-day callback and end gracefully.",
      "Deployed a demo on AWS EC2 (FastAPI WebSocket, Caddy HTTPS), a browser-callable bridge designed to switch to Twilio later.",
    ],
    stack: ["LangGraph", "Silero VAD", "FastAPI", "SQLite", "AWS EC2"],
  },
  {
    name: "VeriRAG",
    period: "Oct 2026",
    objective:
      "A self-verifying document-QA system that checks every generated claim against its sources and abstains instead of hallucinating.",
    points: [
      "Built a LangGraph RAG pipeline with hybrid dense + BM25 retrieval (top-20 each), RRF-fused and reranked to 8 chunks.",
      "Designed a two-gate verification critic (coverage, groundedness) using a DeBERTa NLI model, with bounded regeneration and abstention.",
      "Built PyMuPDF-based table extraction storing each table as a certifiable markdown chunk, recovering 78 chunks across 6 papers, plus vision captions for embedded figures.",
      "Evaluated on MMLongBench-Doc with a stratified 59-question set: zero hallucinations across answered queries, with abstention on unanswerable ones.",
    ],
    stack: ["LangGraph", "BM25", "DeBERTa NLI", "PyMuPDF"],
  },
  {
    name: "Multi-Agent Academic Research System",
    period: "June 2026",
    objective:
      "A reliable multi-agent system for autonomous source discovery and strict factual verification.",
    points: [
      "Developed a LangGraph multi-agent workflow with Llama-3.3 for orchestration and report generation, and Gemini 1.5 for pre-processing and document parsing.",
      "Engineered a Critic Agent to find missing links and knowledge gaps, generate better queries or trigger human-in-the-loop fallbacks.",
      "Integrated the ArXiv API and a local ChromaDB vector database to pull facts from research papers and user documents.",
    ],
    stack: ["LangGraph", "Llama-3.3", "Gemini 1.5", "ChromaDB", "ArXiv API"],
  },
  {
    name: "Hospital Emergency Room Forecasting",
    period: "Sept 2025 – Present",
    objective:
      "A time-series forecasting pipeline predicting daily required emergency-room patient volumes.",
    points: [
      "Extracted temporal signals, engineering cyclical calendar encodings, historical lag features and 30-day rolling statistics.",
      "Tuned XGBoost and LightGBM via Randomized SearchCV (30 iterations) with 5-fold TimeSeriesSplit validation.",
      "Architected LSTM and GRU models with a 30-day lookback window alongside SARIMA baselines, yielding a test MAPE of 21.1%.",
    ],
    stack: ["XGBoost", "LightGBM", "LSTM / GRU", "SARIMA"],
  },
  {
    name: "Predicting State of Manufacturing Units",
    period: "Jan 2025",
    objective:
      "Forecast manufacturing-unit risk states from temporal sensor data for maintenance and anomaly detection.",
    points: [
      "Processed complex sensor data and used EDA to uncover anomalies within critical 10th-minute reading intervals.",
      "Trained RNN, CNN, LSTM and AutoGluon models to predict risk in 10-minute intervals.",
      "Ensembled the best models for stability, reaching a test accuracy of 0.872.",
    ],
    stack: ["RNN / CNN / LSTM", "AutoGluon"],
  },
  // TODO: add more projects by copying this template:
  // {
  //   name: "Project name",
  //   period: "Mon YYYY",
  //   objective: "One sentence on what it is.",
  //   points: ["What you built / measured."],
  //   stack: ["Tech"],
  //   links: [{ label: "GitHub", href: "https://github.com/Ishaanrcks/..." }],
  // },
];

export const competitions: Project[] = [
  {
    name: "General Championship Data Analytics",
    period: "Gold, Feb 2026 · Silver, Mar 2025",
    objective: "Technology Students Gymkhana, IIT Kharagpur.",
    points: [
      "Gold (Feb 2026): built an AI copilot that converts natural language into SQL and charts, using a framework-free ReAct agent and schema-aware planner over a FastMCP tool server querying a 9-table PostgreSQL star schema.",
      "Built a KPI compiler/DSL turning natural-language metrics into JSON rules executed as parameterized SQL, eliminating metric hallucination.",
      "Deployed the FastAPI and React SPA stack across EC2 instances with RDS PostgreSQL, enforcing CTE multi-tenant isolation for 10,000+ client records; used asyncio.gather to cut multi-step query latency.",
      "Silver (Mar 2025): optimized ElectroMart's marketing budget with EDA, sentiment analysis and ROI modeling; used XGBoost/MMM (MIDAS-ARMA, H.O.V.A.) to track revenue lag and boost gains by 19.8%.",
      "Built Django and Next.js dashboards with KPI visuals and budget sliders, plus a natural-language query agent for EDA insights.",
    ],
  },
  {
    name: "Amazon ML Challenge 2025",
    period: "Oct 2025",
    objective:
      "All India ML hackathon: predict marketplace product prices from catalogue text and images (multimodal regression, SMAPE).",
    points: [
      "Built a TF-IDF and regex baseline extracting quantities and units, reaching 60.69% SMAPE with 5-fold GroupKFold.",
      "Replaced BERT with EmbeddingGemma text embeddings to better capture numeric cues, abbreviations and semi-structured specs.",
      "Integrated CLIP / SigLIP 2-Giant image embeddings with cross-attention to align images and text; SigLIP's sigmoid loss removed batch-wise scale drift.",
      "Designed dual-path cross-attention fusion with a 3-layer FFN head trained directly on SMAPE, reaching 48.67% / 53.24%.",
    ],
  },
  {
    name: "Kaggle: CommonLit Evaluate Student Summaries",
    period: "Dec 2025",
    objective:
      "A hybrid NLP pipeline that scores student summaries on content accuracy and wording quality.",
    points: [
      "Engineered lexical, spelling, length, source-overlap and readability features; LightGBM baseline at 0.577 / 0.590 MCRMSE.",
      "Benchmarked BERT, RoBERTa and DeBERTa-v3 with prompt-grouped CV; DeBERTa-v3 (pre-trained on Feedback-ELL) scored best.",
      "Fine-tuned DeBERTa with mean pooling of the last 4 hidden layers, cutting MCRMSE to 0.46; stacked out-of-fold predictions with features in LightGBM, reaching 0.493 / 0.508.",
    ],
  },
  {
    name: "Kaggle: NLP with Disaster Tweets",
    period: "Apr 2025 – Aug 2025",
    objective:
      "Classify tweets as related or unrelated to real disasters.",
    points: [
      "TF-IDF and n-gram features (bigrams most informative) with tree-based models reached 74.26% / 75.42% accuracy.",
      "Improved preprocessing via GloVe and FastText vocabulary-coverage analysis of out-of-vocabulary words.",
      "Fine-tuned a BERT-based model with Adam and cross-entropy loss, reaching 81.14% / 82.42% accuracy.",
    ],
  },
  {
    name: "Intrahall Data Analytics Competition",
    period: "Feb 2025",
    objective:
      "Radhakrishnan Hall: forecast unit risk in automated manufacturing from temporal sensor data.",
    points: [
      "Reached 86.9% accuracy predicting unit risk from 10-minute sequences using deep learning and boosting.",
      "Used Random Forest and Decision Trees for feature importance, identifying sensors with significant variance in the final seconds.",
      "Designed LSTM, GRU and hybrid models and visualized sensor-wise variance over time for model compression.",
    ],
  },
];

export const leadership: Role[] = [
  {
    title: "Web Coordinator",
    org: "Students' International Relations Cell, IIT Kharagpur",
    period: "July 2025 – Present",
    objective:
      "Nominated by the Dean of International Relations from a team of 25+ student members to oversee international initiatives.",
    points: [
      "Rolled out a secure Django-based portal for the Foreign Training Program, hosting 70+ projects and managing 8500+ applications (streamlining 3000+ applications to 50+ universities).",
      "Garnered 285+ foreign internship offers (29.5% YoY) from renowned universities, backed by funding of 14.5 million / 20.63 million INR.",
      "Worked with the Office of International Relations to improve the institute's global ranking, achieving QS rank 215 in 2025.",
    ],
  },
];

export const skills = [
  {
    group: "Languages & tools",
    items: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "GitHub", "VS Code"],
  },
  {
    group: "Frameworks & data",
    items: [
      "Node.js", "React.js", "Next.js", "Django", "Django REST Framework", "Flask", "Express.js",
      "MongoDB", "SQL", "PostgreSQL", "SQLite", "Neo4j",
      "LangChain", "LangGraph", "CrewAI", "NumPy", "Pandas", "Matplotlib", "STL (C++)",
    ],
  },
  {
    group: "Coursework",
    items: [
      "Advanced Calculus", "Linear Algebra", "Numerical and Complex Analysis",
      "Theory of Partial Differential Equations", "Probability and Statistics",
      "Programming and Data Structures", "Operations Research", "Econometric Analysis",
      "Statistics for Economics", "Embedded Machine Learning", "Microeconomics", "Macroeconomics",
    ],
  },
];

export const education = [
  {
    school: "Indian Institute of Technology Kharagpur",
    detail: "B.S. (Hons.) / M.S. in Economics",
    period: "Expected 2027/2028", // TODO: confirm graduation year
    note: "", // TODO: CGPA — your CV versions list 8.54, 7.63 and 8.23; pick the current one
  },
  { school: "Decent School, Kota", detail: "Class XII (CBSE) · 95.4%", period: "2022" },
  { school: "Lucknow Public School", detail: "Class X (CBSE) · 95.6%", period: "2020" },
];

export const awards = [
  "Selected for a research project under Prof. M. Abdar at the University of Queensland (Global Rank 42) via the Foreign Training Program.",
  "Selected for the IIT Kharagpur Platinum Jubilee Outbound Scheme, covering all expenses at Pennsylvania State University.",
  "Bronze Medal, Inter-Hall Illumination Competition, Radhakrishnan Hall.",
  "Participated in NSO Health & Fitness for 2 years.",
  "3rd School Rank in 1st Round and State Rank 39 in 2nd Round of the National Mathematics Indian Talent Competition.",
];

/**
 * Single source of truth for all site content.
 * Edit this file only; components just render it.
 * Anything marked TODO is unknown / needs you to fill in.
 */

export type Link = { label: string; href: string };

/** One piece of work, written as a short paragraph rather than CV bullets. */
export type Item = {
  title: string;
  subtitle?: string; // organisation / event
  period: string;
  blurb?: string; // one-line version shown on cards
  badge?: string; // short initials shown when there is no logo
  logo?: string; // TODO: path in /public, e.g. "/logos/uq.svg"
  image?: string; // TODO: project screenshot in /public, shown at top of the card
  summary: string; // what I actually did, in plain language
  result?: string; // the outcome, if there is a measurable one
  stack?: string[];
  github?: string; // TODO: repo URL. Empty renders a "link soon" button.
  links?: Link[]; // extra links (paper, demo, write-up)
};

export const profile = {
  name: "Ishan Yash Patel",
  headline: "I build and research AI agents.",
  summary:
    "Economics undergraduate at IIT Kharagpur. My work is about helping AI systems reason better, stay secure and private, and avoid making things up.",
  degree: "B.S. (Hons.) / M.S. in Economics",
  department: "Department of Economics, Indian Institute of Technology Kharagpur",
  email: "ishanyash1919@gmail.com",
  phone: "+91-8005701448",
  links: {
    github: "https://github.com/Ishaanrcks",
    linkedin: "https://www.linkedin.com/in/ishan-yash-79219b186/",
    resume: "/resume.pdf", // TODO: drop your resume at public/resume.pdf
  },
  photo: "", // TODO: put image in /public and set e.g. "/me.jpg" (shown in hero when set)
};

export const experience: Item[] = [
  {
    title: "Research Intern",
    subtitle: "The University of Queensland, Australia",
    badge: "UQ",
    logo: "/logos/uq.svg",
    period: "Sept 2026 – Present",
    summary:
      "I'm working with Professor Moloud Abdar on a better architecture for LLM reasoning, building on graph-based methods. I reproduced GFM-RAG and G-Reasoner, two GNN-based retrievers that connect facts across several documents, by re-running their training on a subset of the data. Now I'm testing self-distillation, BF16 training and pre-training ablations to improve retrieval accuracy while cutting training and inference cost.",
  },
  {
    title: "Visiting Undergraduate Researcher",
    subtitle: "The Pennsylvania State University, USA",
    badge: "PSU",
    logo: "/logos/psu.svg",
    period: "May 2026 – Jul 2026",
    summary:
      "Under Professor Peng Liu, I worked on a security layer for multi-agent systems like OpenClaw, based on information-flow control (IFC). I co-authored a paper showing that classical Mandatory Access Control can be enforced but is impractical here: in three Discord-based case studies, policy edges grew from 8 to 42+ as agents went from 2 to 3, forcing manual routing and declassification. I contributed to HiStar++, an IFC runtime inside OpenClaw that checks labels, taint and clearance across tool calls, and owned the hook group (runBeforeToolCall) that blocks writes to lower-security objects. I'm now building a declassification orchestrator with a human-approval fallback.",
  },
  {
    title: "Research Intern",
    subtitle: "Indian School of Business",
    badge: "ISB",
    logo: "/logos/isb.png",
    period: "Feb 2026 – May 2026",
    summary:
      "I designed a system that builds personalised learning paths for people moving into Digital Transformation roles. A graph in Neo4j and PostgreSQL works out the skill gap between someone's current job and their target role, using prerequisites taken from professors' curricula and mapped to Bloom's levels. A multi-agent setup then writes a step-by-step course to close that gap.",
  },
  {
    title: "Applied AI Engineering Intern",
    subtitle: "NephroAI / Icertis, Remote",
    badge: "NA",
    period: "Mar 2026 – May 2026",
    summary:
      "I built a multi-agent system (CrewAI / AutoGen, FastAPI) that triages Azure DevOps support tickets and resolves them automatically. I engineered GitHub MCP tools that work around a 30 requests-per-minute rate limit by batching calls in the prompt, and handled SSE timeouts. Retrieval on Azure AI Search lets it reuse past fixes for recurring tickets, which lowers LLM costs, and separate Planner, Explorer and Synthesizer agents keep answers grounded so the system does not hallucinate.",
  },
  {
    title: "Research Intern",
    subtitle: "Deakin University, Australia",
    badge: "DU",
    logo: "/logos/deakin.svg",
    period: "May 2025 – Jul 2025",
    summary:
      "Under Professor Ye Zhu, I studied privacy in agent-to-agent communication. I built two MCP servers with 9 tools, a local one for file access and document search and a remote one for contacts, calendar and mail, plus Chroma-based RAG pipelines for document extraction and targeted mailing. The remote server ran over SSH and the local one over stdio, connected to Cursor, Continue, VS Code and Claude Desktop. I then attacked these setups with direct and RADE prompt injections against GPT-4o, Claude and Llama-70B, and with multi-turn obfuscated privacy attacks, documenting how the models were fooled.",
  },
  {
    title: "Full Stack Developer",
    subtitle: "Insteasy",
    badge: "IE",
    period: "June 2024 – Nov 2024",
    summary:
      "I worked on the backend of Insteasy, a SaaS platform for managing academic institutions. I built the Django models for a forum where students post doubts with attachments and tags, REST APIs that let tutors pull subjects and questions to create custom or automatic quizzes, and a notice board with filters by course, batch or student. I tested the APIs with Postman.",
  },
];

export const projects: Item[] = [
  {
    title: "VeriRAG",
    subtitle: "Self-verifying document Q&A",
    period: "Oct 2026",
    blurb: "A document Q&A system that checks every claim against its sources and abstains instead of guessing.",
    summary:
      "A document question-answering system that checks every claim against its sources and says it doesn't know instead of guessing. It retrieves with dense search and BM25, fuses and reranks the results to 8 chunks, then a two-gate critic (coverage and groundedness, using a DeBERTa NLI model) either approves the answer, regenerates it a bounded number of times, or abstains. PyMuPDF turns tables into markdown chunks (78 across 6 papers) and figures get vision captions.",
    result: "On a stratified 59-question MMLongBench-Doc set: zero hallucinations on answered questions, and abstention on the unanswerable ones.",
    stack: ["LangGraph", "BM25", "DeBERTa NLI", "PyMuPDF"],
    github: "", // TODO
  },
  {
    title: "Multi-Agent Academic Research System",
    period: "June 2026",
    blurb: "A research assistant that finds sources and verifies facts, with a Critic agent and a human fallback.",
    summary:
      "A research assistant that finds sources and verifies facts on its own. A LangGraph workflow uses Llama-3.3 to orchestrate and write the report and Gemini 1.5 to parse documents. A Critic agent looks for missing links and knowledge gaps, then writes better queries or hands the question to a human. Facts come from the ArXiv API and a local ChromaDB store of papers and user documents.",
    stack: ["LangGraph", "Llama-3.3", "Gemini 1.5", "ChromaDB", "ArXiv API"],
    github: "", // TODO
  },
  {
    title: "Hospital Emergency Room Forecasting",
    period: "Sept 2025 – Present",
    blurb: "Forecasts daily emergency-room patient volumes with gradient boosting, LSTM / GRU and SARIMA.",
    summary:
      "A forecasting pipeline that predicts how many patients an emergency room will see each day. I built cyclical calendar features, lag features and 30-day rolling statistics, tuned XGBoost and LightGBM with randomized search and time-series cross-validation, and compared LSTM and GRU models (30-day lookback) against SARIMA baselines.",
    result: "Test MAPE of 21.1%.",
    stack: ["XGBoost", "LightGBM", "LSTM / GRU", "SARIMA"],
    github: "", // TODO
  },
  {
    title: "Predicting State of Manufacturing Units",
    period: "Jan 2025",
    blurb: "Predicts manufacturing-unit risk from 10-minute sensor sequences.",
    summary:
      "Predicts the risk state of manufacturing units from sensor readings taken every 10 minutes, for maintenance and anomaly detection. Exploratory analysis showed that the 10th-minute readings held the key anomalies. I trained RNN, CNN, LSTM and AutoGluon models and ensembled the best ones for stability.",
    result: "Test accuracy of 0.872.",
    stack: ["RNN / CNN / LSTM", "AutoGluon"],
    github: "", // TODO
  },
  {
    title: "Kaggle: CommonLit, Evaluate Student Summaries",
    period: "Dec 2025",
    blurb: "Scores student summaries on content and wording with fine-tuned DeBERTa and LightGBM.",
    summary:
      "A hybrid NLP pipeline that scores student summaries on content accuracy and wording quality. I started with a LightGBM baseline on linguistic features (0.577 MCRMSE), benchmarked BERT, RoBERTa and DeBERTa-v3 with prompt-grouped cross-validation, fine-tuned DeBERTa-v3 with mean pooling over its last 4 layers, then stacked its predictions with the features in LightGBM.",
    result: "Fine-tuning cut MCRMSE to 0.46; the final stacked model scored 0.493 / 0.508.",
    stack: ["LightGBM", "DeBERTa-v3"],
    github: "", // TODO
  },
  {
    title: "Kaggle: NLP with Disaster Tweets",
    period: "Apr 2025 – Aug 2025",
    blurb: "Classifies tweets as real disasters or not, from TF-IDF baselines up to fine-tuned BERT.",
    summary:
      "Classifies tweets as about a real disaster or not. TF-IDF and n-gram features with tree-based models (bigrams were the most informative) reached about 75% accuracy. GloVe and FastText vocabulary checks guided the cleaning, and a fine-tuned BERT model trained with Adam and cross-entropy loss did best.",
    result: "81.14% / 82.42% accuracy.",
    stack: ["TF-IDF", "BERT", "GloVe / FastText"],
    github: "", // TODO
  },
  // TODO: add more projects by copying an item above.
];

export const competitions: Item[] = [
  {
    title: "Voice-Native Hospital Call Agent",
    subtitle: "DataForge",
    period: "Sept 2026",
    blurb: "A voice agent that handles live hospital calls, with clean interruptions and graceful failure recovery.",
    summary:
      "A voice agent that handles live hospital calls end to end. It is a LangGraph agent with 24 tools over a 29-table SQLite database, and it logs per-turn latency, tool calls and an end-of-call summary. Silero VAD, an adaptive noise gate and token-fenced barge-in let callers interrupt cleanly by cancelling stale model and tool output. If the LLM fails, the call never goes silent: the agent apologises, saves context for a same-day callback and ends gracefully. A demo runs on AWS EC2 (FastAPI WebSocket, Caddy HTTPS) and is designed to switch to Twilio later.",
    stack: ["LangGraph", "Silero VAD", "FastAPI", "SQLite", "AWS EC2"],
    github: "", // TODO
  },
  {
    title: "General Championship Data Analytics",
    subtitle: "Technology Students Gymkhana, Gold",
    period: "Feb 2026",
    blurb: "An AI copilot that turns plain-English questions into SQL and charts.",
    summary:
      "An AI copilot that turns plain-English questions into SQL and charts. A framework-free ReAct agent with a schema-aware planner calls a FastMCP tool server over a 9-table PostgreSQL star schema. A KPI compiler turns natural-language metrics into JSON rules that run as parameterised SQL, so numbers stay consistent and are never invented. It is deployed on EC2 with RDS PostgreSQL, isolates tenants with CTEs across 10,000+ client records, and runs SQL, KPI and chart tasks in parallel with asyncio.gather.",
    result: "Gold.",
    stack: ["FastAPI", "React", "PostgreSQL", "FastMCP", "AWS"],
    github: "", // TODO
  },
  {
    title: "General Championship Data Analytics",
    subtitle: "Technology Students Gymkhana, Silver",
    period: "Mar 2025",
    blurb: "Optimised a marketing budget with ROI modelling and revenue-lag analysis, plus dashboards and a query agent.",
    summary:
      "The task was to optimise ElectroMart's marketing budget from its past spending and its effect on revenue. I did exploratory analysis, sentiment analysis and ROI modelling to define useful KPIs, then used Python, Pandas and XGBoost / MMM (MIDAS-ARMA, H.O.V.A.) to track revenue lag. I built Django and Next.js dashboards with KPI visuals, budget sliders and a natural-language query agent that turns questions into code for EDA and visual reports.",
    result: "Gains boosted by 19.8%. Silver.",
    stack: ["XGBoost", "MMM", "Django", "Next.js"],
    github: "", // TODO
  },
  {
    title: "Amazon ML Challenge 2025",
    subtitle: "All India ML Hackathon",
    period: "Oct 2025",
    blurb: "Predicts product prices from catalogue text and images with a cross-attention fusion model.",
    summary:
      "Predict marketplace product prices from catalogue text and images (multimodal regression, scored by SMAPE). A TF-IDF and regex baseline that pulled out quantities and units gave 60.69% SMAPE. I replaced BERT with EmbeddingGemma text embeddings, added SigLIP 2-Giant image embeddings (its sigmoid loss removed batch-wise scale drift), and fused the two with dual-path cross-attention and a 3-layer FFN head trained directly on SMAPE.",
    result: "48.67% / 53.24% SMAPE (lower is better).",
    stack: ["EmbeddingGemma", "SigLIP 2", "PyTorch"],
    github: "", // TODO
  },
  {
    title: "Intrahall Data Analytics Competition",
    subtitle: "Radhakrishnan Hall",
    period: "Feb 2025",
    blurb: "Forecasts unit risk in automated manufacturing from sensor time series.",
    summary:
      "Forecast unit risk in automated manufacturing from sensor time series. Deep learning and boosting on 10-minute sequences did the predicting. Random Forest and Decision Trees showed which sensors mattered most, with significant variance in the final seconds, and LSTM, GRU and hybrid models learned the temporal patterns.",
    result: "86.9% accuracy.",
    stack: ["LSTM / GRU", "Random Forest"],
    github: "", // TODO
  },
];

export const leadership: Item[] = [
  {
    title: "Campus Director",
    subtitle: "Hult Prize, IIT Kharagpur",
    badge: "HP",
    period: "TODO: add dates",
    summary: "TODO: two or three sentences on what you led as Campus Director.",
  },
  {
    title: "Web Coordinator",
    subtitle: "Students' International Relations Cell, IIT Kharagpur",
    badge: "SIR",
    logo: "/logos/iitkgp.svg",
    period: "July 2025 – Present",
    summary:
      "The Dean of International Relations nominated me, from a team of 25+ student members, to coordinate the cell's international initiatives. I rolled out a secure Django portal for the Foreign Training Program that hosts 70+ projects and manages 8,500+ applications, including 3,000+ applications to 50+ universities. The program garnered 285+ foreign internship offers (up 29.5% year on year) backed by funding of 14.5 million to 20.63 million INR. I also worked with the Office of International Relations to improve the institute's global ranking, which reached QS 215 in 2025.",
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
    school: "IIT Kharagpur",
    detail: "B.S. (Hons.) / M.S. in Economics, Department of Economics",
    period: "Expected 2028",
    badge: "IIT",
    logo: "/logos/iitkgp.svg",
  },
  { school: "Decent School, Kota", detail: "Class XII (CBSE), 95.4%", period: "2022", badge: "DS" },
  { school: "Lucknow Public School", detail: "Class X (CBSE), 95.6%", period: "2020", badge: "LPS" },
];

/** Written casually on purpose. `tag` is the small label on each row. */
export const awards = [
  {
    tag: "Research",
    title: "Picked for a research project at UQ",
    text: "Got selected to work with Prof. M. Abdar at the University of Queensland (ranked 42 globally) through IIT Kharagpur's Foreign Training Program.",
  },
  {
    tag: "Scholarship",
    title: "Platinum Jubilee Outbound Scheme",
    text: "IIT Kharagpur covered all my expenses for the research stay at Penn State.",
  },
  {
    tag: "Hall",
    title: "Bronze at Inter-Hall Illumination",
    text: "Won bronze with my fellow boarders from Radhakrishnan Hall.",
  },
  {
    tag: "Fitness",
    title: "NSO Health & Fitness",
    text: "Took part for 2 years, helping spread healthy habits and well-being.",
  },
  {
    tag: "Maths",
    title: "National Mathematics Indian Talent Competition",
    text: "Came 3rd in my school in round 1, then 39th in the state in round 2.",
  },
];

export const rotatingWords = ["reliable", "verifiable", "secure", "private"];

/** Small animated agent graph shown beside the hero until a photo is added. Pure SVG + CSS. */
const nodes = [
  { id: "plan", label: "Planner", x: 190, y: 40 },
  { id: "ret", label: "Retriever", x: 330, y: 120 },
  { id: "tool", label: "Tools", x: 320, y: 270 },
  { id: "crit", label: "Critic", x: 190, y: 340 },
  { id: "mem", label: "Memory", x: 50, y: 270 },
  { id: "hum", label: "Human", x: 60, y: 120 },
];
const C = { x: 190, y: 190 };

export function AgentGraph() {
  return (
    <svg viewBox="0 0 380 380" role="img" aria-label="Diagram of a multi-agent system: a central agent connected to planner, retriever, tools, critic, memory and human nodes" className="h-auto w-full max-w-[22rem]">
      {nodes.map((n, i) => (
        <line key={n.id} x1={C.x} y1={C.y} x2={n.x} y2={n.y} className="graph-edge" style={{ animationDelay: `${i * 0.35}s` }} />
      ))}
      {nodes.map((n, i) => (
        <g key={n.id} className="graph-node" style={{ animationDelay: `${i * 0.5}s` }}>
          <circle cx={n.x} cy={n.y} r="26" fill="var(--background)" stroke="var(--line)" strokeWidth="1.5" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="10.5" fill="var(--muted)" style={{ fontFamily: "var(--font-geist-sans)" }}>
            {n.label}
          </text>
        </g>
      ))}
      <circle cx={C.x} cy={C.y} r="38" fill="var(--accent)" className="graph-core" />
      <text x={C.x} y={C.y + 5} textAnchor="middle" fontSize="14" fontWeight="600" fill="#fff" style={{ fontFamily: "var(--font-geist-sans)" }}>
        Agent
      </text>
    </svg>
  );
}

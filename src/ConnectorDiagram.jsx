const lines = [
  { text: '$ whoami', delay: 0.0, type: 'cmd' },
  { text: 'jj_marshall — senior technical pm', delay: 0.35, type: 'out' },
  { text: '', delay: 0.5, type: 'blank' },
  { text: '$ git log --author=jj --oneline', delay: 0.65, type: 'cmd' },
  { text: 'a3f9c1  ship eligibility-ai writeback', delay: 1.0, type: 'out' },
  { text: 'e21bb4  re-architect ats data layer', delay: 1.25, type: 'out' },
  { text: '9c44d0  build the-let-out (solo, full-stack)', delay: 1.5, type: 'out' },
  { text: '', delay: 1.65, type: 'blank' },
  { text: '$ cat ./stack.json', delay: 1.8, type: 'cmd' },
  { text: '{ "build": "react/next/node", "ship": "roadmaps",', delay: 2.15, type: 'out' },
  { text: '  "translate": "engineering <-> business" }', delay: 2.35, type: 'out' },
];

export default function ConnectorDiagram() {
  return (
    <div className="terminal-window" role="img" aria-label="Terminal window showing JJ Marshall's identity as a builder — git log of shipped work and a stack overview">
      <div className="terminal-titlebar">
        <span className="terminal-dot dot-red" />
        <span className="terminal-dot dot-yellow" />
        <span className="terminal-dot dot-green" />
        <span className="terminal-title">jj@miami: ~/career</span>
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`terminal-line line-${line.type}`}
            style={{ animationDelay: `${line.delay}s` }}
          >
            {line.type === 'blank' ? '\u00A0' : line.text}
          </div>
        ))}
        <span className="terminal-cursor" style={{ animationDelay: '2.6s' }}>&#9608;</span>
      </div>
    </div>
  );
}

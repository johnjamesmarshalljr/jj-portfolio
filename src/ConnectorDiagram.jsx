const nodes = [
  { id: 'dentrix', label: 'Dentrix', x: 90, y: 70 },
  { id: 'opendental', label: 'Open Dental', x: 550, y: 70 },
  { id: 'denticon', label: 'Denticon', x: 50, y: 230 },
  { id: 'eaglesoft', label: 'Eaglesoft', x: 590, y: 230 },
  { id: 'ats', label: 'ATS', x: 90, y: 390 },
  { id: 'ehr', label: 'EHR / FHIR', x: 550, y: 390 },
];

const center = { x: 320, y: 230 };

export default function ConnectorDiagram() {
  return (
    <svg
      className="connector-diagram"
      viewBox="0 0 640 460"
      role="img"
      aria-label="Diagram showing disparate platforms — Dentrix, Open Dental, Denticon, Eaglesoft, ATS, and EHR systems — connecting into a single platform layer"
    >
      {nodes.map((node, i) => (
        <line
          key={node.id}
          className="connector-line"
          x1={node.x}
          y1={node.y}
          x2={center.x}
          y2={center.y}
          style={{ animationDelay: `${0.15 * i}s` }}
        />
      ))}

      {nodes.map((node, i) => (
        <g key={node.id} className="connector-node" style={{ animationDelay: `${0.15 * i + 0.4}s` }}>
          <circle cx={node.x} cy={node.y} r="7" />
          <text
            x={node.x}
            y={node.y}
            dx={node.x < center.x ? -14 : 14}
            dy="4"
            textAnchor={node.x < center.x ? 'end' : 'start'}
          >
            {node.label}
          </text>
        </g>
      ))}

      <g className="connector-center" style={{ animationDelay: '1.1s' }}>
        <circle cx={center.x} cy={center.y} r="34" />
        <text x={center.x} y={center.y - 6} textAnchor="middle" className="center-label-top">
          PLATFORM
        </text>
        <text x={center.x} y={center.y + 12} textAnchor="middle" className="center-label-bottom">
          LAYER
        </text>
      </g>
    </svg>
  );
}

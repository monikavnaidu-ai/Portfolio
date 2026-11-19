/**
 * FlowDiagram — clean inline SVG pipeline diagram used in Case Study modals.
 * Renders each step as a rounded card, connected by dashed arrows.
 */
export function FlowDiagram({ steps }) {
  if (!steps || steps.length === 0) return null;

  const width = Math.min(Math.max(steps.length * 150, 260), 760);
  const height = 88;
  const n = steps.length;
  const gapX = (width - 72) / Math.max(n - 1, 1);

  const cxOf = (i) => 12 + i * gapX;

  return (
    <div
      className="overflow-x-auto rounded-xl border border-gray-200/[0.06] bg-bgTertiary px-4 py-8 sm:px-10 sm:py-10"
      data-testid="flow-diagram"
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Architecture flow diagram"
      >
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C9FF" />
            <stop offset="100%" stopColor="#FFD600" />
          </linearGradient>
          <marker
            id="flowArrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="currentColor" opacity="0.8" />
          </marker>
        </defs>

        {steps.map((step, i) => {
          const cx = cxOf(i);
          const cardW = 56;
          const x0 = cx - cardW / 2;

          return (
            <g key={step.id} data-testid={`flow-step-${step.id}`}>
              {/* Arrow from previous card */}
              {i > 0 && (
                <line
                  x1={cxOf(i - 1) + 30}
                  y1={height / 2 + 6}
                  x2={x0 - 6}
                  y2={height / 2 + 6}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                  opacity="0.5"
                  markerEnd="url(#flowArrow)"
                />
              )}

              {/* Step card */}
              <rect
                x={x0}
                y={height / 2 + 2}
                width={cardW}
                height={40}
                rx={8}
                fill="transparent"
                stroke="url(#flowGrad)"
                strokeWidth="1.5"
                opacity="0.65"
              />

              {/* Step number */}
              <circle
                cx={x0 + 8}
                cy={height / 2 + 2}
                r={6}
                fill="none"
                stroke="url(#flowGrad)"
                strokeWidth={0.8}
                opacity={0.4}
              />
              <text
                x={x0 + 8}
                y={height / 2 + 2.3}
                textAnchor="middle"
                fontSize="7"
                fontWeight="bold"
                fill="url(#flowGrad)"
                opacity="0.9"
              >
                {i + 1}
              </text>

              {/* Label */}
              <text
                x={cx}
                y={height / 2 - 6}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="currentColor"
              >
                {step.label}
              </text>

              {/* Detail */}
              {step.detail && (
                <text
                  x={cx}
                  y={height / 2 + 22}
                  textAnchor="middle"
                  fontSize={7}
                  fill="currentColor"
                  opacity={0.45}
                >
                  {step.detail}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default FlowDiagram;

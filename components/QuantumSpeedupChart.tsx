'use client';

import { useEffect, useRef, useState } from 'react';

// Data
const problemSize = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const classical = [1, 1.8, 2.9, 4.3, 6.1, 8.4, 11.2, 14.6, 18.7, 23.5, 29.1, 35.6];
const hybrid = [1, 1.6, 2.3, 3.2, 4.3, 5.7, 7.5, 9.8, 12.6, 16.1, 20.3, 25.4];
const quantum = [1, 1.4, 1.9, 2.3, 2.8, 3.2, 3.7, 4.1, 4.6, 5.0, 5.5, 6.0];

const curveData = [
  {
    name: 'Classical Computing',
    data: classical,
    color: '#f97316', // orange
    description: 'Polynomial scaling on conventional hardware',
    tooltipLabel: 'baseline performance',
  },
  {
    name: 'Hybrid Quantum',
    data: hybrid,
    color: '#facc15', // yellow
    description: 'Classical workflows with quantum acceleration',
    tooltipLabel: 'partial acceleration',
  },
  {
    name: 'Pure Quantum',
    data: quantum,
    color: '#4ade80', // green
    description: 'Algorithmic speedup through quantum parallelism',
    tooltipLabel: 'exponential speedup',
    glow: true,
  },
];

export function QuantumSpeedupChart() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCurve, setHoveredCurve] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Chart dimensions
  const width = 800;
  const height = 400;
  const padding = { top: 40, right: 40, bottom: 60, left: 70 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Scale functions
  const maxY = Math.max(...classical);
  const xScale = (i: number) => padding.left + (i / (problemSize.length - 1)) * chartWidth;
  const yScale = (val: number) => padding.top + chartHeight - (val / maxY) * chartHeight;

  // Generate smooth curve path using cubic bezier
  const generatePath = (data: number[]) => {
    const points = data.map((val, i) => ({ x: xScale(i), y: yScale(val) }));
    
    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx1 = prev.x + (curr.x - prev.x) / 3;
      const cpx2 = prev.x + (2 * (curr.x - prev.x)) / 3;
      path += ` C ${cpx1} ${prev.y}, ${cpx2} ${curr.y}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  // Generate area path for gradient fill
  const generateAreaPath = (data: number[]) => {
    const linePath = generatePath(data);
    const lastX = xScale(data.length - 1);
    const firstX = xScale(0);
    const bottomY = padding.top + chartHeight;
    
    return `${linePath} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`;
  };

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle mouse move for tooltips
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black pt-0 pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Estimated Quantum Speedup
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-2">
            As problem complexity increases, quantum systems outperform classical computation.
          </p>
        </div>

        {/* Chart Container */}
        <div className="relative">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredCurve(null)}
          >
            {/* Defs for gradients and filters */}
            <defs>
              {curveData.map((curve, idx) => (
                <linearGradient
                  key={`gradient-${idx}`}
                  id={`areaGradient-${idx}`}
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor={curve.color} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={curve.color} stopOpacity="0" />
                </linearGradient>
              ))}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
              <g key={`grid-${i}`}>
                <line
                  x1={padding.left}
                  y1={padding.top + chartHeight * ratio}
                  x2={padding.left + chartWidth}
                  y2={padding.top + chartHeight * ratio}
                  stroke="#333"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
                <text
                  x={padding.left - 12}
                  y={padding.top + chartHeight * ratio + 4}
                  fill="#666"
                  fontSize="12"
                  textAnchor="end"
                  fontFamily="var(--font-jetbrains)"
                >
                  {Math.round(maxY * (1 - ratio))}
                </text>
              </g>
            ))}

            {/* X axis labels */}
            {problemSize.filter((_, i) => i % 2 === 0 || i === problemSize.length - 1).map((size, i, arr) => {
              const actualIndex = problemSize.indexOf(size);
              return (
                <text
                  key={`x-${size}`}
                  x={xScale(actualIndex)}
                  y={height - 20}
                  fill="#666"
                  fontSize="12"
                  textAnchor="middle"
                  fontFamily="var(--font-jetbrains)"
                >
                  {size}
                </text>
              );
            })}

            {/* Axis labels */}
            <text
              x={width / 2}
              y={height - 2}
              fill="#888"
              fontSize="13"
              textAnchor="middle"
              fontFamily="var(--font-jetbrains)"
            >
              Problem Size
            </text>
            <text
              x={16}
              y={height / 2}
              fill="#888"
              fontSize="13"
              textAnchor="middle"
              fontFamily="var(--font-jetbrains)"
              transform={`rotate(-90, 16, ${height / 2})`}
            >
              Relative Execution Time
            </text>

            {/* Area fills */}
            {curveData.map((curve, idx) => (
              <path
                key={`area-${idx}`}
                d={generateAreaPath(curve.data)}
                fill={`url(#areaGradient-${idx})`}
                className={`transition-opacity duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              />
            ))}

            {/* Curves */}
            {curveData.map((curve, idx) => (
              <g key={`curve-${idx}`}>
                <path
                  d={generatePath(curve.data)}
                  fill="none"
                  stroke={curve.color}
                  strokeWidth={hoveredCurve === idx ? 4 : 3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter={curve.glow ? 'url(#glow)' : undefined}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    strokeDasharray: isVisible ? 'none' : '1000',
                    strokeDashoffset: isVisible ? '0' : '1000',
                    transitionDelay: `${idx * 150}ms`,
                  }}
                  onMouseEnter={() => setHoveredCurve(idx)}
                />
                {/* Invisible wider path for easier hover */}
                <path
                  d={generatePath(curve.data)}
                  fill="none"
                  stroke="transparent"
                  strokeWidth={20}
                  onMouseEnter={() => setHoveredCurve(idx)}
                />
              </g>
            ))}

            {/* Hover tooltip */}
            {hoveredCurve !== null && (
              <g
                transform={`translate(${Math.min(mousePos.x, width - 160)}, ${Math.max(mousePos.y - 50, 20)})`}
                className="pointer-events-none"
              >
                <rect
                  x="0"
                  y="0"
                  width="150"
                  height="36"
                  rx="6"
                  fill="rgba(0,0,0,0.9)"
                  stroke={curveData[hoveredCurve].color}
                  strokeWidth="1"
                />
                <text
                  x="12"
                  y="23"
                  fill={curveData[hoveredCurve].color}
                  fontSize="12"
                  fontFamily="var(--font-jetbrains)"
                >
                  {curveData[hoveredCurve].tooltipLabel}
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6 md:gap-10">
          {curveData.map((curve, idx) => (
            <div
              key={`legend-${idx}`}
              className={`flex items-start gap-3 transition-opacity duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${400 + idx * 100}ms` }}
            >
              <div
                className="w-4 h-4 rounded-full mt-1 flex-shrink-0"
                style={{
                  backgroundColor: curve.color,
                  boxShadow: curve.glow ? `0 0 12px ${curve.color}` : undefined,
                }}
              />
              <div>
                <p className="text-white font-medium text-sm">{curve.name}</p>
                <p className="text-gray-500 text-xs">{curve.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-gray-600 text-xs max-w-2xl mx-auto">
          Illustrative scaling model. Quantum advantage applies only to specific problem classes and assumes fault-tolerant hardware.
        </p>
      </div>
    </section>
  );
}

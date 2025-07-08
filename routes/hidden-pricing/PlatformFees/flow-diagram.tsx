import React, { useEffect, useRef } from 'react';

interface FlowDiagramProps {
  selectedFlows: string[];
}

export function FlowDiagram({ selectedFlows }: FlowDiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isCancelled = false;

    const loadMermaid = async () => {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({ startOnLoad: false });

      if (diagramRef.current && !isCancelled) {
        const definition = generateMermaidDiagram(selectedFlows);
        const { svg } = await mermaid.render('flowchart', definition);

        if (diagramRef.current && !isCancelled) {
          diagramRef.current.innerHTML = svg;
        }
      }
    };

    loadMermaid();

    return () => {
      isCancelled = true;
    };
  }, [selectedFlows]);

  return (
    <div className="mt-8 overflow-x-auto">
      <div className="min-w-[800px]" ref={diagramRef} />
    </div>
  );
}

function generateMermaidDiagram(selectedFlows: string[]): string {
  const flows = [
    {
      id: 'Sales',
      label: 'Sales Questions',
      children: ['Budget Range', 'Timeline', 'Decision Maker'],
    },
    {
      id: 'Support',
      label: 'Support Questions',
      children: ['Customer Status', 'Issue Type', 'Urgency'],
    },
    {
      id: 'Nurture',
      label: 'Nurture Questions',
      children: ['Interest Areas', 'Purchase Timeline', 'Resources'],
    },
  ];

  const rootNodeId = 'Root';
  const rootNodeLabel = 'How can we help?';

  const lines: string[] = ['graph TD'];

  lines.push(`${rootNodeId}{${rootNodeLabel}}`);

  for (const flow of flows) {
    lines.push(`${flow.id}["${flow.label}"]`);
    lines.push(`${rootNodeId} --> ${flow.id}`);
    for (const child of flow.children) {
      const nodeId = `${flow.id}_${child.replace(/\s+/g, '_')}`;
      lines.push(`${nodeId}["${child}"]`);
      lines.push(`${flow.id} --> ${nodeId}`);
    }
  }

  // Mermaid class definitions for custom colors/shapes
  lines.push(`
    %% Define custom styles
    classDef root fill:#f3f4f6,stroke:#d1d5db,stroke-width:2px
    classDef active fill:#ede9fe,stroke:#a855f7,stroke-width:2px
    classDef inactive fill:#f3f4f6,stroke:#d1d5db

    %% Assign classes
    class ${rootNodeId} root;

    ${
      selectedFlows.includes('Sales')
        ? 'class Sales,Sales_Budget_Range,Sales_Timeline,Sales_Decision_Maker active;'
        : 'class Sales,Sales_Budget_Range,Sales_Timeline,Sales_Decision_Maker inactive;'
    }
    ${
      selectedFlows.includes('Support')
        ? 'class Support,Support_Customer_Status,Support_Issue_Type,Support_Urgency active;'
        : 'class Support,Support_Customer_Status,Support_Issue_Type,Support_Urgency inactive;'
    }
    ${
      selectedFlows.includes('Nurture')
        ? 'class Nurture,Nurture_Interest_Areas,Nurture_Purchase_Timeline,Nurture_Resources active;'
        : 'class Nurture,Nurture_Interest_Areas,Nurture_Purchase_Timeline,Nurture_Resources inactive;'
    }
  `);

  return lines.join('\n');
}

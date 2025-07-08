import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface SliderCalculation {
  value: number;
  blocks: number;
  monthlyCost: number;
  setupBlocks: number;
  setupHours: number;
  setupCost: number;
}

interface SliderCalculatorProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  onCalculated?: (calc: SliderCalculation) => void;
  min?: number;
  max?: number;
  step?: number;
  unitSize?: number;
  unitPrice?: number;
  setupBlocksOf?: number;
  setupHoursPerBlock?: number;
  setupRate?: number;
  className?: string;
}

export function SliderCalculator({
  label,
  value,
  onChange,
  onCalculated,
  min = 0,
  max = 100,
  step = 1,
  unitSize = 1,
  unitPrice = 0,
  setupBlocksOf = 100,
  setupHoursPerBlock = 0,
  setupRate = 0,
  className,
}: SliderCalculatorProps) {
  const blocks = Math.ceil(value / unitSize);
  const monthlyCost = blocks * unitPrice;
  const setupBlocks = Math.ceil(value / setupBlocksOf);
  const setupHours = setupBlocks * setupHoursPerBlock;
  const setupCost = setupHours * setupRate;

  useEffect(() => {
    if (onCalculated) {
      onCalculated({
        value,
        blocks,
        monthlyCost,
        setupBlocks,
        setupHours,
        setupCost,
      });
    }
  }, [
    value,
    blocks,
    monthlyCost,
    setupBlocks,
    setupHours,
    setupCost,
    onCalculated,
  ]);

  return (
    <section className={cn(className)}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex items-center gap-4 mb-4">
        <input
          autoComplete="off"
          defaultValue={0}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
        />
        <span className="w-16 text-right font-medium">
          {value.toLocaleString()}
        </span>
      </div>
    </section>
  );
}

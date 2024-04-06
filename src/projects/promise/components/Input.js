import * as React from 'react';

const inputNames = [
  { id: 0, name: 'delay', label: 'First delay (ms)' },
  { id: 1, name: 'step', label: 'Delay step (ms)' },
  { id: 2, name: 'amount', label: 'Amount' },
];

export default function Input() {
  return (
    <div className="promise_input">
      {inputNames.map(({ id, name, label }) => (
        <label key={id}>
          {label}
          <input type="number" name={name} required />
        </label>
      ))}
    </div>
  );
}

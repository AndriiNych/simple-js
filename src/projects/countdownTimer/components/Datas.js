import * as React from 'react';

const datas = [
  { id: 1, data: 'days', children: 'Days' },
  { id: 2, data: 'hours', children: 'Hours' },
  { id: 3, data: 'minutes', children: 'Minutes' },
  { id: 4, data: 'seconds', children: 'Seconds' },
];

function Data({ data, children }) {
  return (
    <div className="field">
      <span className="value" data-value={data}>
        00
      </span>
      <span className="label">{children}</span>
    </div>
  );
}

export default function Datas() {
  return (
    <div className="timer margin__auto">
      {datas.map(({ id, data, children }) => (
        <Data key={id} data={data}>
          {children}
        </Data>
      ))}
    </div>
  );
}

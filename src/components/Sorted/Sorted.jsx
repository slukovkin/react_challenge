import React from 'react'

export const Sorted = ({ options, defaultValue, value, onChange }) => {
  return (
    <div style={{ margin: "10px 20px", border: "1px solid teal" }}>

      <div style={{ margin: "10px 0"}}>
        <select style={{ padding: 5, overflow: 'none' }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option disabled value="">{defaultValue}</option>
          {options.map(el => 
            <option key={el.value} value={el.value}>{el.name}</option>
            )}
        </select>
      </div>

    </div>
  )
}

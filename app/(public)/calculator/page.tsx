export default function CalculatorPage() {
  const rows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
  ]

  return (
    <div className="center-content">
      <div className="page-content">
        <h2 className="form-title">Calculator</h2>
        <div className="calculator">
          {rows.map((row) => (
            <div key={row[0]} className="calculator-row">
              {row.map((n) => (
                <button key={n} className="calculator-btn">{n}</button>
              ))}
            </div>
          ))}
          <div className="calculator-row">
            <button className="calculator-btn calculator-btn--zero">0</button>
            <button className="calculator-btn">.</button>
          </div>
        </div>
      </div>
    </div>
  )
}

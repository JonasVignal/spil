import './index.css'

function App() {
  const buttons = [
    { name: 'Vikings 1', url: '#' },
    { name: 'Vikings 2', url: '#' },
    { name: 'Generalen', url: '#' },
    { name: 'Dr. Evil', url: '#' }
  ];

  return (
    <div className="app-container">
      <div className="logo-container">
        <img src="/logo.png" alt="ESC Mission Control Logo" className="logo" />
      </div>
      <div className="buttons-container">
        {buttons.map((btn, index) => (
          <a key={index} href={btn.url} target="_blank" rel="noopener noreferrer" className="action-button">
            {btn.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default App

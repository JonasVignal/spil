
function App() {
  const buttons = [
    { name: 'Vikings 1', url: 'http://192.168.4.62:14999/start' },
    { name: 'Vikings 2', url: 'http://192.168.4.253:14999/start' },
    { name: 'Generalen', url: 'http://192.168.2.104:14999/start' },
    { name: 'Dr. Evil', url: 'http://192.168.4.28:14999/start' }
  ];

  return (
    <div className="app-container">
      <div className="logo-container">
        <h1 className="logo-text">ESC MISSION CONTROL</h1>
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

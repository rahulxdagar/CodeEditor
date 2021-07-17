import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import logo from './dytelogo.png';

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <header>
      <div class="overlay">
        <h1>Dyte Code Editor
        <img src={logo} alt="Logo" />
        </h1>
        <h2>Made for VIT Campus Placement- Dyte 2022</h2>
        <h3>By Rahul 18BCE00018</h3>
	      <br></br>
		  </div>
      </header>
      
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JavaScript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div >
          <h2 id='live'>Live Preview</h2>
      </div>
      <div className="pane">
        
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="2"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;

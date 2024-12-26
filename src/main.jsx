import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  // </StrictMode>
  ,
)


/*

React Strict Mode is a tool that helps developers identify potential problems in their React applications. It does this by enabling additional checks and warnings during development, which are not present in the production build.

Here's what Strict Mode does:

1. Detecting Unsafe Practices:

Deprecated Lifecycle Methods:
  Strict Mode warns you if you are using deprecated lifecycle methods like componentWillMount or componentWillUpdate.
Unsafe findDOMNode():
  It warns against using findDOMNode(), which can break component encapsulation.

2. Identifying Side Effects:

Double Rendering:
    Strict Mode intentionally renders components twice in development to detect side effects in rendering logic (e.g., setting state in render).

Effect Cleanup:
    It checks if your effects (like useEffect) have proper cleanup functions to avoid memory leaks.

3. Improving Warnings:
    Strict Mode provides more informative and detailed warnings for common mistakes.

Important Considerations:

Development Only:
Strict Mode only runs in development mode and has no impact on the production build.

Double Rendering:
Don't be alarmed if you see components rendering twice in development mode with Strict Mode enabled. This is expected and helps detect side effects.

Upgrading React:
When upgrading to a newer version of React, Strict Mode might reveal additional warnings. Be prepared to address them.

*/
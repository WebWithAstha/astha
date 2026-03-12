import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
// import 


createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Astha Lodhi",
                url: "https://astha-chi.vercel.app",
                jobTitle: "Software Developer",
                sameAs: [
                    "https://github.com/WebWithAstha",
                    "https://linkedin.com/in/asthalodhi"
                ]
            })}
        </script>
        <App />
    </HelmetProvider>
)
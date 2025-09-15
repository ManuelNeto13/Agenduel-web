'use client'

import { JSX } from 'react'

export default function Home(): JSX.Element {

  return (
    <main className="root">
      <header className="header">
        <div className="brand">
          <h1 className="title">Agenduel <span className="emoji">🗒️</span></h1>
          <p className="tag">Seu assistente inteligente de notas e agenda pessoal.</p>
        </div>
      </header>

      <style jsx>{`
        :root {
          --bg: #f6f8fb;
          --card: #ffffff;
          --primary: #4f46e5;
          --primary-dark: #4338ca;
          --muted: #6b7280;
          --radius: 12px;
          --shadow: 0 8px 24px rgba(16,24,40,0.06);
        }

        .root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 48px 20px;
          background: linear-gradient(180deg, var(--bg), #ffffff);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          color: #0f172a;
        }

        .header { width: 100%; max-width: 980px; }
        .brand { text-align: center; margin-bottom: 18px; }
        .title { margin: 0; font-size: 32px; color: var(--primary); }
        .emoji { margin-left: 8px; }
        .tag { margin-top: 8px; color: var(--muted); }

        .controls { display: flex; gap: 12px; justify-content: center; margin-top: 12px; }

        .btn {
          padding: 10px 16px;
          border-radius: 10px;
          border: 1px solid transparent;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          transition: all 180ms ease;
          background: transparent;
        }

        .btn:focus { outline: 3px solid rgba(79,70,229,0.12); outline-offset: 2px; }

        .btn.primary {
          background: var(--primary);
          color: white;
          box-shadow: 0 8px 20px rgba(79,70,229,0.12);
          border-color: transparent;
        }
        .btn.primary:hover { background: var(--primary-dark); transform: translateY(-1px); }

        .btn.outline {
          border-color: var(--primary);
          color: var(--primary);
          background: transparent;
        }
        .btn.outline:hover { background: rgba(79,70,229,0.06); }

        .grid {
          width: 100%;
          max-width: 980px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .card {
          background: var(--card);
          padding: 18px;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }

        .card h2 { margin: 0 0 8px 0; font-size: 18px; }
        .muted { color: var(--muted); margin: 0; }

        .footer { margin-top: 36px; color: var(--muted); font-size: 14px; }

        @media (min-width: 640px) {
          .title { font-size: 40px; }
          .root { padding: 64px 24px; }
        }
      `}</style>
    </main>
  )
}

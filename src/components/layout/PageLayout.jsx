import { useState } from 'react'
import { Drawer } from 'antd'
import Navbar from './Navbar'
import Footer from './Footer'
import { IoAccessibility } from 'react-icons/io5'
import {
  AudioLines,
  Type,
  ArrowLeftRight,
  MoveVertical,
  Link2,
  Languages,
  ImageOff,
  MousePointer2,
  Moon,
  Droplets,
} from 'lucide-react'

const accessibilityOptions = [
  { label: 'Text To Speech', Icon: AudioLines },
  { label: 'Bigger Text', Icon: Type },
  { label: 'Text Spacing', Icon: ArrowLeftRight },
  { label: 'Line Height', Icon: MoveVertical },
  { label: 'Highlight Links', Icon: Link2 },
  { label: 'Dyslexia Friendly', Icon: Languages },
  { label: 'Hide Images', Icon: ImageOff },
  { label: 'Cursor', Icon: MousePointer2 },
  { label: 'Light-Dark', Icon: Moon },
  { label: 'Invert Colors', Icon: Droplets },
]

export default function PageLayout({ children }) {
  const [isA11yOpen, setIsA11yOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <button
        type="button"
        onClick={() => setIsA11yOpen(true)}
        aria-label="Accessibility options"
        title="Accessibility options"
        className="fixed right-5 bottom-5 sm:right-6 sm:bottom-6 z-[70] inline-flex items-center justify-center w-16 h-16 rounded-full shadow-lg cursor-pointer"
        style={{
          background: 'var(--royal-deep)',
          color: 'var(--paper)',
          border: '2px solid var(--gold)',
          boxShadow: '0 12px 28px -14px oklch(22% 0.110 265 / .7)',
        }}
      >
        <IoAccessibility size={28} />
      </button>

      <Drawer
        title={(
          <div className="a11y-drawer-title">
            <IoAccessibility size={22} />
            <span>Accessibility options</span>
          </div>
        )}
        placement="right"
        open={isA11yOpen}
        onClose={() => setIsA11yOpen(false)}
        width={460}
        className="a11y-drawer"
      >
        <div className="a11y-options-grid">
          {accessibilityOptions.map(({ label, Icon }) => (
            <button key={label} type="button" className="a11y-option-card">
              <div className="a11y-option-icon-wrap">
                <Icon size={27} strokeWidth={2.15} />
              </div>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </Drawer>
      {/* <Footer /> */}
    </div>
  )
}

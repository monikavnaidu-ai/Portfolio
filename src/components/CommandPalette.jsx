import { useEffect, useMemo, useState } from 'react';
import { useToast } from './Toast';
import { useTheme } from '../hooks/useTheme';
import { scrollToSection } from '../utils/scroll';
import { SECTION_IDS } from '../utils/constants';
import { portfolioData } from '../data/portfolioData';
/**
 * CommandPalette — global ⌘K / Ctrl+K palette.
 * Quick navigation (About, Projects, Skills, Education, Contact, Top),
 * Copy Email, Copy GitHub URL, Copy USN, Toggle theme, Print resume.
 */
export function CommandPalette({ open, onClose, onPrint }) {
  const { toast } = useToast();
  const { theme, toggleTheme } = useTheme();
  const { contact, education } = portfolioData;
  const usn = education?.[0]?.usn || null;
  const [search, setSearch] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);

  // Reset state when opening
  useEffect(() => {
    if (open) {
      setSearch('');
      setActiveIdx(0);
    }
  }, [open]);

  const sectionLabels = {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  };

  const commands = useMemo(() => {
    const cmds = [];

    SECTION_IDS.forEach((id) => {
      cmds.push({
        id: `nav-${id}`,
        group: 'Navigate',
        label: `Go to ${sectionLabels[id] || id}`,
        action: () => {
          scrollToSection(id);
          toast.show(`Navigated to ${sectionLabels[id] || id}`, 'success');
          onClose();
        },
      });
    });

    cmds.push({
      id: 'top',
      group: 'Navigate',
      label: 'Go to Hero',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        toast.show('Returned to hero', 'success');
        onClose();
      },
    });

    cmds.push({
      id: 'copy-email',
      group: 'Actions',
      label: 'Copy Email Address',
      action: async () => {
        try {
          await navigator.clipboard.writeText(contact.email);
          toast.show(`Copied ${contact.email}`, 'success');
        } catch {
          toast.show('Clipboard not available', 'error');
        }
        onClose();
      },
    });

    cmds.push({
      id: 'copy-github',
      group: 'Actions',
      label: 'Copy GitHub URL',
      action: async () => {
        try {
          await navigator.clipboard.writeText(contact.github);
          toast.show(`Copied ${contact.github}`, 'success');
        } catch {
          toast.show('Clipboard not available', 'error');
        }
        onClose();
      },
    });

    if (usn) {
      cmds.push({
        id: 'copy-usn',
        group: 'Actions',
        label: `Copy USN (${usn})`,
        action: async () => {
          try {
            await navigator.clipboard.writeText(usn);
            toast.show(`Copied ${usn}`, 'success');
          } catch {
            toast.show('Clipboard not available', 'error');
          }
          onClose();
        },
      });
    }

    cmds.push({
      id: 'toggle-theme',
      group: 'Actions',
      label: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      action: () => {
        toggleTheme();
        onClose();
      },
    });

    cmds.push({
      id: 'print-resume',
      group: 'Actions',
      label: 'Print Resume',
      action: () => {
        if (onPrint) onPrint();
        onClose();
      },
    });

    return cmds;
  }, [theme, contact, toast, onClose, onPrint]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q)
    );
  }, [commands, search]);

  // Reset active index when filtered changes
  useEffect(() => {
    setActiveIdx((prev) => Math.min(prev, Math.max(0, filtered.length - 1)));
  }, [filtered]);

  // Keyboard nav
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIdx((prev) => {
          const len = filtered.length;
          if (len === 0) return 0;
          const delta = e.key === 'ArrowDown' ? 1 : -1;
          return (prev + delta + len) % len;
        });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const cmd = filtered[activeIdx];
        if (cmd) cmd.action();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, activeIdx, filtered, onClose]);

  if (!open) return null;

  const bgClass = theme === 'dark' ? 'bg-bgTertiary/95 backdrop-blur-md border-primary/10' : 'bg-white/95 backdrop-blur-md border-primary/10';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16"
      role="presentation"
      data-testid="command-palette-backdrop"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bgPrimary/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Palette */}
      <div
        className={`relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border shadow-2xl ${bgClass}`}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        data-testid="command-palette"
      >
        {/* Input */}
        <div className="flex items-center gap-3 border-b border-gray-200/10 px-5 py-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
          <input
            ref={(el) => el?.focus()}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-base text-textPrimary placeholder:text-textMuted focus:outline-none"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-palette-list"
            aria-activedescendant={filtered[activeIdx] ? `cmd-${filtered[activeIdx].id}` : undefined}
            data-testid="command-palette-input"
          />
          <kbd className="rounded bg-bgPrimary px-2 py-1 font-mono text-xs text-textMuted">Esc</kbd>
        </div>

        {/* List */}
        <ul id="command-palette-list" role="listbox" aria-label="Commands" className="max-h-80 overflow-y-auto p-3" data-testid="command-palette-list">
          {filtered.length === 0 && (
            <li className="px-5 py-6 text-center text-sm text-textMuted">No results found</li>
          )}
          {filtered.map((cmd, i) => (
            <li key={cmd.id} data-testid={`command-item-${cmd.id}`}>
              <button
                type="button"
                role="option"
                aria-selected={i === activeIdx}
                id={`cmd-${cmd.id}`}
                onClick={cmd.action}
                onMouseEnter={() => setActiveIdx(i)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors ${
                  i === activeIdx
                    ? 'bg-primary/10 text-primary'
                    : 'text-textPrimary hover:bg-bgTertiary'
                }`}
              >
                <span className="text-sm font-medium">{cmd.label}</span>
                <span className="rounded-md bg-bgTertiary px-2 py-1 font-mono text-xs text-textMuted">
                  {cmd.group}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommandPalette;

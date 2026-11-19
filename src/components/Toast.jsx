import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

const ToastContext = createContext(null);
const DEFAULT_TIMEOUT = 2800;

/**
 * ToastProvider — global toast/notification system.
 * Auto-dismisses after ~2.8s. Provide `toast(message, type)` via context.
 */
export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ message: '', type: 'success', visible: false });
  const timerRef = useRef(null);

  const showToast = useCallback((message, type = 'success') => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ message, type, visible: true });
    timerRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, DEFAULT_TIMEOUT);
  }, []);

  const hideToast = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const value = useMemo(() => ({ toast, showToast, hideToast }), [toast, showToast, hideToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewer toast={toast} hideToast={hideToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Internal components
// ---------------------------------------------------------------------------

function ToastViewer({ toast, hideToast }) {
  if (!toast.visible && !toast.message) return null;
  const classMap = {
    success: 'border-primary',
    error: 'border-accentViolet',
    warning: 'border-secondary',
  };
  return (
    <div
      className={`fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 transition-all duration-300 ${toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
      role="status"
      aria-live="polite"
      data-testid="toast"
    >
      <div
        className={`flex items-center gap-3 rounded-xl border bg-surface px-5 py-3.5 text-sm font-medium shadow-2xl ${classMap[toast.type] || classMap.success}`}
      >
        {toast.type === 'success' && <CheckIcon />}
        {toast.type === 'error' && <ErrorIcon />}
        {toast.type === 'warning' && <WarningIcon />}
        <span className="text-textPrimary">{toast.message}</span>
        <button
          type="button"
          aria-label="Dismiss notification"
          className="text-textMuted transition-colors hover:text-textPrimary"
          onClick={hideToast}
        >
          ×
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function ErrorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}
function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 9v4M12 16h.01M10.29 7.56L4.38 2.05a2.04 2.04 0 0 0 1.44-.59l11.9-.69a2.04 2.04 0 0 1 2.3 1.71l6.79.79a1.92 1.92 0 0 1 1.67 1.66l.03.39v.4a1.92 1.92 0 0 1-1.67 1.91l-8.3.77a1.92 1.92 0 0 1-1.96-1.68L6.78 2.9a2.04 2.04 0 0 0-1.5-1.5l-.64-.14a2.04 2.04 0 0 0-2.14 2.04c0 .12.01.24.03.35L10.29 7.56z" />
    </svg>
  );
}

import { useCallback, useEffect, useId, useRef } from 'react';

const FOCUSABLE_SELECTOR = [
  'a[href]:not([disabled])',
  'button:not([disabled]):not([aria-hidden="true"])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

/**
 * Modal — accessible, keyboard-navigable dialog.
 * - Esc closes
 * - Backdrop click closes
 * - Focus trap keeps focus inside the dialog
 * - Returns focus to trigger on close
 */
export function Modal({
  isOpen,
  onClose,
  title,
  ariaLabel,
  children,
  className = '',
}) {
  const dialogId = useId();
  const headingId = useId();
  const modalRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement;
    const firstFocusable = modalRef.current?.querySelector(FOCUSABLE_SELECTOR);
    setTimeout(() => firstFocusable?.focus(), 0);

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
      if (event.key === 'Tab') {
        const focusables = modalRef.current?.querySelectorAll(FOCUSABLE_SELECTOR);
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown, { capture: false });
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  // Return focus to trigger when modal closes
  useEffect(() => {
    if (!isOpen && previouslyFocused.current) {
      previouslyFocused.current.focus?.();
      previouslyFocused.current = null;
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="presentation"
      onClick={onClose}
      data-testid="modal-backdrop"
      aria-hidden="true"
    >
      <div
        ref={modalRef}
        id={dialogId}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        aria-label={ariaLabel}
        className={`modal-content w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-200/10 bg-bgSecondary p-6 sm:p-8 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header — title + always-visible close button */}
        <div className={`mb-6 flex items-center justify-between ${!title && 'justify-end'}`}>
          {title && (
            <h2 id={headingId} className="text-2xl font-bold text-textPrimary sm:text-3xl">
              {title}
            </h2>
          )}
          <button
            type="button"
            className="rounded-lg p-2 text-textMuted transition-colors hover:bg-bgTertiary hover:text-textPrimary"
            aria-label="Close dialog"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

import { useEffect, RefObject } from 'react'

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (event: MouseEvent) => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}

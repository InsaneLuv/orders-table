import { useEffect } from "react";

function useKeyPress(targetKey: string, callback: () => void) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [targetKey, callback]);
}

export default useKeyPress;
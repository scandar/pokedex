const { useEffect } = require('react');

function useResetScroll() {
  const currentScroll = document.documentElement.scrollTop;

  useEffect(() => {
    document.documentElement.scrollTop = currentScroll;
  });
}

export default useResetScroll;

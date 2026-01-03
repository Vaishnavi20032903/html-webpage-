<script>
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');

  window.addEventListener('mousemove', e => {
    cursorDot.style.top = `${e.clientY}px`;
    cursorDot.style.left = `${e.clientX}px`;

    cursorRing.style.top = `${e.clientY}px`;
    cursorRing.style.left = `${e.clientX}px`;
  });
</script>

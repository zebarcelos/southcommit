document.addEventListener("DOMContentLoaded", function () {
  function animateValue(element, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          element.innerHTML = "R$ " + Math.floor(progress * (end - start) + start).toLocaleString('pt-BR');
          if (progress < 1) {
              window.requestAnimationFrame(step);
          }
      };
      window.requestAnimationFrame(step);
  }

  const value1 = document.querySelector("#value1");
  const value2 = document.querySelector("#value2");
  const value3 = document.querySelector("#value3");

  animateValue(value1, 0, 45000, 2000);
  animateValue(value2, 0, 12000, 2000);
  animateValue(value3, 0, 1000, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  function animateLine(path, duration) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect(); // Trigger a reflow, to make sure the animation starts.
      path.style.transition = `stroke-dashoffset ${duration}s ease`;
      path.style.strokeDashoffset = '0';
  }

  const blueLine = document.querySelector("#blueLine");
  const yellowLine = document.querySelector("#yellowLine");
  const purpleLine = document.querySelector("#purpleLine");

  const duration = 2; // Duration in seconds, adjust as needed

  animateLine(blueLine, duration);
  animateLine(yellowLine, duration);
  animateLine(purpleLine, duration);

  // Fade in circles and dotted lines after the line animation completes
  setTimeout(function () {
      const fadeTargets = document.querySelectorAll(".fade-target");
      fadeTargets.forEach(target => {
          target.classList.add("fade-in");
      });
  }, duration * 1000); // Delay for the duration of the line animation
});

document.addEventListener("DOMContentLoaded", function () {
  function animateValue(element, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          element.innerHTML = "R$ " + Math.floor(progress * (end - start) + start).toLocaleString('pt-BR') + " / mês";
          if (progress < 1) {
              window.requestAnimationFrame(step);
          }
      };
      window.requestAnimationFrame(step);
  }

  const monthlyAmount = document.querySelector("#monthlyAmount");

  animateValue(monthlyAmount, 0, 2000, 2000); // 2000 milliseconds duration
});



const fs = require('fs');

let code = fs.readFileSync('src/components/Configurator.astro', 'utf-8');

// Replace the click handler logic to always dispatch state
const oldClickStart = `  document.querySelectorAll('.conf-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const el = e.currentTarget as HTMLButtonElement;
      const step = parseInt(el.getAttribute('data-step') || '1');
      const val = el.getAttribute('data-val') || '';

      if (step === 1) {
        answers.destination = val;
        if (val === 'other') {
          showEarlyExit(); renderChips();
          return;
        }
        nextStep(2); renderChips();
      } else if (step === 2) {
        answers.origin = val;
        // Dispatch event for Timeline
        window.dispatchEvent(new CustomEvent('taxomade:origin-change', { detail: val }));
        nextStep(3); renderChips();
      } else if (step === 3) {
        answers.duration = val;
        if (val === 'short') {
          // Skip 4 and 5
          showResults(); renderChips();
        } else {
          nextStep(4); renderChips();
        }
      } else if (step === 4) {
        answers.employment = val;
        nextStep(5); renderChips();
      } else if (step === 5) {
        answers.income = val;
        showResults(); renderChips();
      }
    });
  });`;

const newClickStart = `  document.querySelectorAll('.conf-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const el = e.currentTarget as HTMLButtonElement;
      const step = parseInt(el.getAttribute('data-step') || '1');
      const val = el.getAttribute('data-val') || '';

      if (step === 1) {
        answers.destination = val;
        if (val === 'other') {
          showEarlyExit(); renderChips();
          window.dispatchEvent(new CustomEvent('taxomade:answer-change', { detail: answers }));
          return;
        }
        nextStep(2); renderChips();
      } else if (step === 2) {
        answers.origin = val;
        nextStep(3); renderChips();
      } else if (step === 3) {
        answers.duration = val;
        if (val === 'short') {
          showResults(); renderChips();
        } else {
          nextStep(4); renderChips();
        }
      } else if (step === 4) {
        answers.employment = val;
        nextStep(5); renderChips();
      } else if (step === 5) {
        answers.income = val;
        showResults(); renderChips();
      }
      
      window.dispatchEvent(new CustomEvent('taxomade:answer-change', { detail: answers }));
    });
  });`;

code = code.replace(oldClickStart, newClickStart);

// Also dispatch event on back button
const oldBackBtn = `      renderChips();
      showStep(prevStep);
    }
  });`;

const newBackBtn = `      renderChips();
      showStep(prevStep);
      window.dispatchEvent(new CustomEvent('taxomade:answer-change', { detail: answers }));
    }
  });`;

code = code.replace(oldBackBtn, newBackBtn);

fs.writeFileSync('src/components/Configurator.astro', code);

(function () {
    const total = testItems.length;
    let index = 0;
    const answers = {};

    const saved = loadProgress();
    if (saved && saved.answers) {
        Object.assign(answers, saved.answers);
        if (typeof saved.index === 'number' && saved.index < total) index = saved.index;
    }

    const questionEl = document.getElementById('questionTitle');
    const subtitleEl = document.getElementById('questionSubtitle');
    const optionsEl = document.getElementById('likertBox');
    const fillEl = document.getElementById('progressFill');
    const textEl = document.getElementById('progressText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pillsEl = document.getElementById('sectionPills');

    function persist() {
        saveProgress({ answers, index, result: null });
    }

    function currentScale(item) {
        return item.scale === 'agree' ? LIKERT_AGREE : LIKERT;
    }

    function renderPills(section) {
        pillsEl.innerHTML = TEST_SECTIONS.map((s) =>
            `<span class="section-pill ${s.id === section ? 'active' : ''}">${s.title}</span>`
        ).join('');
    }

    function render() {
        const item = testItems[index];
        const section = TEST_SECTIONS.find((s) => s.id === item.section);
        renderPills(item.section);
        questionEl.textContent = item.text;
        subtitleEl.textContent = `${section.title} · ${section.hint}`;

        const answered = Math.min(Object.keys(answers).length, total);
        fillEl.style.width = `${(answered / total) * 100}%`;
        textEl.textContent = `${index + 1} / ${total}`;

        const scale = currentScale(item);
        optionsEl.innerHTML = scale.map((opt) => `
            <button type="button" class="likert-opt ${answers[item.id] === opt.v ? 'selected' : ''}" data-v="${opt.v}">
                <strong>${opt.v}</strong>${opt.label}
            </button>
        `).join('');

        optionsEl.querySelectorAll('.likert-opt').forEach((btn) => {
            btn.addEventListener('click', () => {
                answers[item.id] = Number(btn.dataset.v);
                persist();
                render();
            });
        });

        prevBtn.disabled = index === 0;
        nextBtn.innerHTML = index === total - 1
            ? 'Natijani ko\'rish <i class="fas fa-check"></i>'
            : 'Keyingi <i class="fas fa-arrow-right"></i>';
    }

    prevBtn.addEventListener('click', () => {
        if (index > 0) { index -= 1; persist(); render(); }
    });

    nextBtn.addEventListener('click', () => {
        const item = testItems[index];
        if (answers[item.id] == null) {
            optionsEl.querySelectorAll('.likert-opt').forEach((el) => {
                el.style.borderColor = 'rgba(225, 112, 85, 0.7)';
                setTimeout(() => { el.style.borderColor = ''; }, 450);
            });
            return;
        }
        if (index < total - 1) {
            index += 1;
            persist();
            render();
            return;
        }
        const unanswered = testItems.filter((q) => answers[q.id] == null);
        if (unanswered.length) {
            index = testItems.findIndex((q) => q.id === unanswered[0].id);
            persist();
            render();
            return;
        }
        const result = computeResults(answers);
        saveProgress({ answers, index, result });
        location.href = 'natija.html';
    });

    document.getElementById('restartBtn').addEventListener('click', () => {
        localStorage.removeItem(STORAGE_KEY);
        index = 0;
        Object.keys(answers).forEach((k) => delete answers[k]);
        render();
    });

    render();
})();

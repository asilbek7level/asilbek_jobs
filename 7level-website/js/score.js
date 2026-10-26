const STORAGE_KEY = 'sevenlevel_assessment_v2';

function scoreValue(item, raw) {
    const n = Number(raw);
    return item.reverse ? 6 - n : n;
}

function toPercent(sum, count) {
    const min = count;
    const max = count * 5;
    if (max === min) return 0;
    return Math.round(((sum - min) / (max - min)) * 100);
}

function computeResults(answers) {
    const riasec = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    const riasecN = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    const values = {};
    const valuesN = {};
    const style = {};
    const styleN = {};

    testItems.forEach((item) => {
        const raw = answers[item.id];
        if (raw == null) return;
        const s = scoreValue(item, raw);
        if (item.section === 'interests') {
            riasec[item.dim] += s;
            riasecN[item.dim] += 1;
        } else if (item.section === 'values') {
            values[item.dim] = (values[item.dim] || 0) + s;
            valuesN[item.dim] = (valuesN[item.dim] || 0) + 1;
        } else {
            style[item.dim] = (style[item.dim] || 0) + s;
            styleN[item.dim] = (styleN[item.dim] || 0) + 1;
        }
    });

    const riasecPct = {};
    Object.keys(riasec).forEach((k) => { riasecPct[k] = toPercent(riasec[k], riasecN[k] || 1); });

    const valuesPct = {};
    Object.keys(values).forEach((k) => { valuesPct[k] = toPercent(values[k], valuesN[k] || 1); });

    const stylePct = {};
    Object.keys(style).forEach((k) => { stylePct[k] = toPercent(style[k], styleN[k] || 1); });

    const code = Object.entries(riasecPct).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k]) => k).join('');

    const fields = fieldsData.map((f) => {
        let interest = 0;
        let wsum = 0;
        Object.entries(f.riasec).forEach(([k, w]) => {
            interest += (w / 100) * (riasecPct[k] || 0);
            wsum += w / 100;
        });
        interest = interest / (wsum || 1);

        const valScores = (f.valuesFit || []).map((v) => valuesPct[v] || 50);
        const valAvg = valScores.length ? valScores.reduce((a, b) => a + b, 0) / valScores.length : 50;

        const match = Math.round(interest * 0.75 + valAvg * 0.25);
        return { id: f.id, name: f.name, icon: f.icon, shortDesc: f.shortDesc, match };
    }).sort((a, b) => b.match - a.match);

    const maxMatch = fields[0].match || 1;
    fields.forEach((f) => { f.rel = Math.round((f.match / maxMatch) * 100); });

    return { riasecPct, valuesPct, stylePct, code, fields, at: Date.now() };
}

function saveProgress(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadProgress() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    } catch {
        return null;
    }
}

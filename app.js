// ============= MOCK DATA =============

const FEATURE_DATA = [
  { feature: "Ask Zia", vendor: "OpenAI", vendorKey: "openai", model: "GPT-4o", modelKey: "gpt-4o", version: "v2026.1", inputTokens: 2400000, outputTokens: 850000, creditsUsed: 12500, avgCredits: 4.2, lastUsed: "2026-04-07", suggestedModel: "GPT-4o mini", trend: "up", usageType: "zks" },
  { feature: "Smart Prompt", vendor: "OpenAI", vendorKey: "openai", model: "GPT-4 Turbo", modelKey: "gpt-4-turbo", version: "v2026.1", inputTokens: 1200000, outputTokens: 300000, creditsUsed: 4300, avgCredits: 2.8, lastUsed: "2026-04-07", suggestedModel: "GPT-4o mini", trend: "up", usageType: "zks" },
  { feature: "Image Validation", vendor: "Anthropic", vendorKey: "anthropic", model: "Claude 3.5 Sonnet", modelKey: "claude-sonnet", version: "v3.5", inputTokens: 900000, outputTokens: 120000, creditsUsed: 7800, avgCredits: 6.1, lastUsed: "2026-04-06", suggestedModel: "Claude Haiku", trend: "flat", usageType: "byok" },
  { feature: "OCR", vendor: "Google", vendorKey: "google", model: "Gemini 2.0 Flash", modelKey: "gemini-flash", version: "v2.0", inputTokens: 700000, outputTokens: 90000, creditsUsed: 2100, avgCredits: 1.4, lastUsed: "2026-04-07", suggestedModel: "No change", trend: "down", usageType: "zks" },
  { feature: "Email Drafting", vendor: "OpenAI", vendorKey: "openai", model: "GPT-5", modelKey: "gpt-5", version: "v2026.1", inputTokens: 600000, outputTokens: 400000, creditsUsed: 8200, avgCredits: 5.8, lastUsed: "2026-04-07", suggestedModel: "GPT-4o mini", trend: "up", usageType: "zks" },
  { feature: "Call Summaries", vendor: "OpenAI", vendorKey: "openai", model: "GPT-4o", modelKey: "gpt-4o", version: "v2026.1", inputTokens: 500000, outputTokens: 200000, creditsUsed: 3800, avgCredits: 3.2, lastUsed: "2026-04-05", suggestedModel: "GPT-4o mini", trend: "flat", usageType: "zks" },
  { feature: "Data Enrichment", vendor: "Cohere", vendorKey: "cohere", model: "Command R+", modelKey: "command-r", version: "v1.0", inputTokens: 800000, outputTokens: 150000, creditsUsed: 2900, avgCredits: 1.9, lastUsed: "2026-04-06", suggestedModel: "No change", trend: "down", usageType: "byok" },
  { feature: "Voice of Customer", vendor: "OpenAI", vendorKey: "openai", model: "GPT-4o", modelKey: "gpt-4o", version: "v2026.1", inputTokens: 350000, outputTokens: 280000, creditsUsed: 3100, avgCredits: 3.5, lastUsed: "2026-04-04", suggestedModel: "GPT-4o mini", trend: "flat", usageType: "zks" },
  { feature: "Prediction", vendor: "Zia Native", vendorKey: "zia", model: "Zia ML", modelKey: "zia-ml", version: "v4.0", inputTokens: 450000, outputTokens: 50000, creditsUsed: 0, avgCredits: 0, lastUsed: "2026-04-07", suggestedModel: "No change", trend: "flat", usageType: "zks" },
  { feature: "Recommendation", vendor: "Zia Native", vendorKey: "zia", model: "Zia ML", modelKey: "zia-ml", version: "v4.0", inputTokens: 300000, outputTokens: 40000, creditsUsed: 0, avgCredits: 0, lastUsed: "2026-04-06", suggestedModel: "No change", trend: "flat", usageType: "zks" },
  { feature: "Conversational AI", vendor: "OpenAI", vendorKey: "openai", model: "GPT-4o mini", modelKey: "gpt-4o-mini", version: "v2026.1", inputTokens: 550000, outputTokens: 180000, creditsUsed: 1800, avgCredits: 1.2, lastUsed: "2026-04-07", suggestedModel: "No change", trend: "up", usageType: "zks" },
  { feature: "Notification Summaries", vendor: "OpenAI", vendorKey: "openai", model: "GPT-3.5", modelKey: "gpt-3.5", version: "v2026.1", inputTokens: 200000, outputTokens: 60000, creditsUsed: 450, avgCredits: 0.6, lastUsed: "2026-04-03", suggestedModel: "No change", trend: "down", usageType: "zks" },
  { feature: "Lead Qualification", vendor: "Anthropic", vendorKey: "anthropic", model: "Claude Haiku", modelKey: "claude-haiku", version: "v3.5", inputTokens: 180000, outputTokens: 40000, creditsUsed: 620, avgCredits: 0.8, lastUsed: "2026-04-05", suggestedModel: "No change", trend: "flat", usageType: "byok" },
  { feature: "Deal Summary", vendor: "OpenAI", vendorKey: "openai", model: "GPT-4o", modelKey: "gpt-4o", version: "v2026.1", inputTokens: 250000, outputTokens: 120000, creditsUsed: 1900, avgCredits: 2.1, lastUsed: "2026-04-07", suggestedModel: "GPT-4o mini", trend: "up", usageType: "zks" },
  { feature: "Meeting Notes", vendor: "OpenAI", vendorKey: "openai", model: "GPT-4o mini", modelKey: "gpt-4o-mini", version: "v2026.1", inputTokens: 320000, outputTokens: 150000, creditsUsed: 1100, avgCredits: 1.0, lastUsed: "2026-04-06", suggestedModel: "No change", trend: "flat", usageType: "zks" }
];

const VENDOR_DATA = [
  {
    name: "OpenAI", key: "openai", icon: "⚙", color: "#10b981",
    models: ["GPT-4o", "GPT-4o mini", "GPT-4 Turbo", "GPT-5", "GPT-3.5"]
  },
  {
    name: "Anthropic", key: "anthropic", icon: "A", color: "#f472b6",
    models: ["Claude 3.5 Sonnet", "Claude Haiku", "Claude Opus"]
  },
  {
    name: "Google", key: "google", icon: "G", color: "#3b82f6",
    models: ["Gemini 2.0 Flash", "Gemini Pro"]
  },
  {
    name: "Cohere", key: "cohere", icon: "C", color: "#a78bfa",
    models: ["Command R+", "Command R"]
  },
  {
    name: "Zia Native", key: "zia", icon: "Z", color: "#f59e0b",
    models: ["Zia ML"]
  }
];

const RECOMMENDATIONS = [
  { category: "cost", label: "Cost Reduction", icon: "💰", text: "Ask Zia is consuming 34% of total credits. Consider switching from GPT-4o to GPT-4o mini for lower-priority queries.", action: "Switch Model" },
  { category: "overuse", label: "Overconsuming Feature", icon: "📈", text: "Smart Prompt usage increased by 42% in the last 14 days. Review prompt configurations and set usage limits.", action: "View Details" },
  { category: "cost", label: "Cost Reduction", icon: "💰", text: "GPT-5 is 3.4x more expensive than GPT-4o mini for email drafting. Estimated savings of 6,200 credits/month by switching.", action: "Compare Models" },
  { category: "perf", label: "Performance Optimization", icon: "⚡", text: "OCR workloads are suitable for Gemini Flash instead of GPT-4o. No quality loss expected for character recognition tasks.", action: "Review" },
  { category: "overuse", label: "Overconsuming Feature", icon: "📈", text: "Voice of the Customer uses large output token volumes (avg 2,800 tokens/request). Consider truncation or summary limits.", action: "Set Limit" },
  { category: "underutil", label: "Underutilized Model", icon: "💤", text: "Claude Opus is enabled but has zero usage in the last 30 days. Consider disabling to simplify configuration.", action: "Disable" },
  { category: "roi", label: "Low ROI Feature", icon: "📊", text: "Notification Summaries consume 450 credits but are opened by only 12% of users. Consider reducing generation frequency.", action: "Analyze" },
  { category: "limit", label: "Suggested Limit", icon: "🛡️", text: "Based on current usage patterns, recommend setting a monthly cap of 15,000 credits for Ask Zia to prevent budget overruns.", action: "Apply Limit" }
];

const LIMITS_DATA = [
  { name: "Ask Zia Monthly Cap", type: "Monthly Credit (Feature)", target: "Ask Zia", limit: 15000, current: 12500, status: "warning" },
  { name: "GPT-5 Executive Only", type: "Model Restriction", target: "GPT-5", limit: "Exec users only", current: "Active", status: "active" },
  { name: "Vision OCR Token Cap", type: "Monthly Output Tokens", target: "OCR", limit: 500000, current: 90000, status: "active" },
  { name: "Credit Depletion Alert", type: "Alert Threshold", target: "All", limit: "20%", current: "47.5% remaining", status: "active" },
  { name: "OpenAI Monthly Budget", type: "Monthly Credit (Vendor)", target: "OpenAI", limit: 40000, current: 37150, status: "warning" },
  { name: "Email Drafting Daily Cap", type: "Daily Token Threshold", target: "Email Drafting", limit: 50000, current: 32000, status: "active" },

];

const ALERT_CONFIGS = [
  { title: "Credit Depletion Warning", desc: "Alert when remaining credits drop below threshold", enabled: true, threshold: 20, channels: { email: true, cliq: true, slack: false, inapp: true } },
  { title: "Usage Spike Detection", desc: "Alert on sudden usage increase (day-over-day)", enabled: true, threshold: 50, channels: { email: true, cliq: true, slack: false, inapp: true } },
  { title: "Feature Limit Breach", desc: "Alert when a feature exceeds its assigned limit", enabled: true, threshold: null, channels: { email: true, cliq: false, slack: false, inapp: true } },
  { title: "Vendor API Failure", desc: "Alert on vendor API failure and fallback activation", enabled: true, threshold: null, channels: { email: true, cliq: true, slack: true, inapp: true } },
  { title: "Expensive Model Alert", desc: "Alert when model cost exceeds avg by threshold %", enabled: false, threshold: 200, channels: { email: false, cliq: false, slack: false, inapp: false } }
];

// ============= UTILITY FUNCTIONS =============

function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n.toLocaleString();
}

function generateDailyData(days) {
  const data = [];
  const now = new Date(2026, 3, 8);
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const base = 1200 + Math.random() * 800;
    data.push({
      date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      zksCredits: Math.round(base + Math.random() * 400),
      byokCredits: Math.round(200 + Math.random() * 300),
      inputTokens: Math.round((180 + Math.random() * 120)),
      outputTokens: Math.round((40 + Math.random() * 60))
    });
  }
  return data;
}

// ============= TAB MANAGEMENT =============

document.querySelectorAll('.primary-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.primary-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).style.display = '';
  });
});

document.querySelectorAll('.sub-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.subtab-content').forEach(c => c.style.display = 'none');
    tab.classList.add('active');
    document.getElementById('subtab-' + tab.dataset.subtab).style.display = '';
    if (tab.dataset.subtab === 'vendor-insights') renderVendorInsights();
    if (tab.dataset.subtab === 'feature-usage') renderFeatureTable();
    if (tab.dataset.subtab === 'recommendations') renderRecommendations();
    if (tab.dataset.subtab === 'limits') renderLimits();
  });
});

// ============= TREND CHART =============

let trendChart;
function renderTrendChart(days) {
  const data = generateDailyData(days);
  const ctx = document.getElementById('trendChart').getContext('2d');
  if (trendChart) trendChart.destroy();
  trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(d => d.date),
      datasets: [
        {
          label: 'ZKS Credits',
          data: data.map(d => d.zksCredits),
          borderColor: '#4f6ef7',
          backgroundColor: 'rgba(79,110,247,.08)',
          fill: true,
          tension: 0.4,
          pointRadius: days > 30 ? 0 : 2,
          borderWidth: 2
        },
        {
          label: 'BYOK Credits',
          data: data.map(d => d.byokCredits),
          borderColor: '#a78bfa',
          backgroundColor: 'rgba(167,139,250,.08)',
          fill: true,
          tension: 0.4,
          pointRadius: days > 30 ? 0 : 2,
          borderWidth: 2
        },
        {
          label: 'Input Tokens (K)',
          data: data.map(d => d.inputTokens),
          borderColor: '#34d399',
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
          borderDash: [5, 3]
        },
        {
          label: 'Output Tokens (K)',
          data: data.map(d => d.outputTokens),
          borderColor: '#f97316',
          backgroundColor: 'transparent',
          fill: false,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2,
          borderDash: [5, 3]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 10 }, maxRotation: 0, autoSkip: true, maxTicksLimit: 12 }
        },
        y: {
          grid: { color: '#f0f0f0' },
          ticks: { font: { size: 11 } },
          beginAtZero: true
        }
      },
      interaction: { intersect: false, mode: 'index' }
    }
  });
}

document.querySelectorAll('.period-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTrendChart(parseInt(btn.dataset.period));
  });
});

renderTrendChart(30);

// ============= FEATURE TABLE =============

function getFilteredData() {
  return FEATURE_DATA;
}

function renderFeatureTable() {
  const data = getFilteredData();
  const tbody = document.getElementById('featureTableBody');
  tbody.innerHTML = data.map(row => {
    const trendIcon = row.trend === 'up' ? '↑' : row.trend === 'down' ? '↓' : '→';
    const trendClass = row.trend === 'up' ? 'trend-up' : row.trend === 'down' ? 'trend-down' : 'trend-flat';
    return `<tr onclick="openSidePanel('${row.feature}')">
      <td><strong>${row.feature}</strong></td>
      <td>${row.vendor}</td>
      <td>${row.model}</td>
      <td>${row.version}</td>
      <td>${formatNumber(row.inputTokens)}</td>
      <td>${formatNumber(row.outputTokens)}</td>
      <td>${formatNumber(row.inputTokens + row.outputTokens)}</td>
      <td><strong>${row.creditsUsed.toLocaleString()}</strong></td>
      <td>${row.avgCredits}</td>
      <td>${row.lastUsed}</td>
      <td>${row.suggestedModel !== 'No change' ? '<span style="color:#4f6ef7;font-weight:500">' + row.suggestedModel + '</span>' : '<span style="color:#6b7280">—</span>'}</td>
      <td><span class="${trendClass}">${trendIcon}</span></td>
    </tr>`;
  }).join('');
}

renderFeatureTable();

// ============= VENDOR INSIGHTS =============

let modelCostChart;
function renderVendorInsights() {
  const grid = document.getElementById('vendorInsightsGrid');
  grid.innerHTML = '';
  VENDOR_DATA.forEach(vendor => {
    const rows = FEATURE_DATA.filter(r => r.vendorKey === vendor.key);
    if (rows.length === 0) {
      // Still show the card
    }
    const totalCredits = rows.reduce((s, r) => s + r.creditsUsed, 0);
    const totalInput = rows.reduce((s, r) => s + r.inputTokens, 0);
    const totalOutput = rows.reduce((s, r) => s + r.outputTokens, 0);
    const mostUsedModel = rows.length > 0 ? rows.sort((a, b) => b.creditsUsed - a.creditsUsed)[0].model : '—';
    const avgCostPer1K = totalInput + totalOutput > 0 ? ((totalCredits / ((totalInput + totalOutput) / 1000))).toFixed(2) : '0';

    const card = document.createElement('div');
    card.className = 'vendor-insight-card';
    card.innerHTML = `
      <h3><span class="vi-icon" style="background:${vendor.color}">${vendor.icon}</span>${vendor.name}</h3>
      <div class="vi-stats">
        <div class="vi-stat"><div class="vi-stat-label">Credits Used</div><div class="vi-stat-value">${totalCredits.toLocaleString()}</div></div>
        <div class="vi-stat"><div class="vi-stat-label">Input Tokens</div><div class="vi-stat-value">${formatNumber(totalInput)}</div></div>
        <div class="vi-stat"><div class="vi-stat-label">Output Tokens</div><div class="vi-stat-value">${formatNumber(totalOutput)}</div></div>
        <div class="vi-stat"><div class="vi-stat-label">Most Used Model</div><div class="vi-stat-value" style="font-size:13px">${mostUsedModel}</div></div>
        <div class="vi-stat"><div class="vi-stat-label">Avg Cost / 1K Tokens</div><div class="vi-stat-value">${avgCostPer1K}</div></div>
        <div class="vi-stat"><div class="vi-stat-label">Features Using</div><div class="vi-stat-value">${rows.length}</div></div>
      </div>
      <div class="vi-models">
        <h4>Available Models</h4>
        ${vendor.models.map(m => `<span class="vi-model-tag">${m}</span>`).join('')}
      </div>
    `;
    grid.appendChild(card);
  });

  // Model cost comparison chart
  const ctx = document.getElementById('modelCostChart');
  if (ctx) {
    if (modelCostChart) modelCostChart.destroy();
    const modelStats = {};
    FEATURE_DATA.forEach(r => {
      if (!modelStats[r.model]) modelStats[r.model] = { credits: 0, tokens: 0 };
      modelStats[r.model].credits += r.creditsUsed;
      modelStats[r.model].tokens += r.inputTokens + r.outputTokens;
    });
    const models = Object.keys(modelStats).filter(m => modelStats[m].credits > 0).sort((a, b) => modelStats[b].credits - modelStats[a].credits);
    const colors = ['#4f6ef7', '#f97316', '#a78bfa', '#34d399', '#f472b6', '#06b6d4', '#eab308', '#ef4444'];
    modelCostChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: models,
        datasets: [{
          label: 'Credits Used',
          data: models.map(m => modelStats[m].credits),
          backgroundColor: models.map((_, i) => colors[i % colors.length]),
          borderRadius: 6,
          barPercentage: 0.6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterLabel: (ctx) => {
                const model = models[ctx.dataIndex];
                return `Tokens: ${formatNumber(modelStats[model].tokens)}`;
              }
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 11 } } },
          y: { grid: { color: '#f0f0f0' }, ticks: { font: { size: 11 } }, beginAtZero: true }
        }
      }
    });
  }
}

// ============= RECOMMENDATIONS =============

function renderRecommendations() {
  const grid = document.getElementById('recommendationsGrid');
  grid.innerHTML = RECOMMENDATIONS.map(rec => `
    <div class="rec-card">
      <div class="rec-icon ${rec.category}">${rec.icon}</div>
      <div class="rec-body">
        <div class="rec-category ${rec.category}">${rec.label}</div>
        <div class="rec-text">${rec.text}</div>
      </div>
    </div>
  `).join('');
}

// ============= LIMITS & CONTROLS =============

function renderLimits() {
  const tbody = document.getElementById('limitsTableBody');
  tbody.innerHTML = LIMITS_DATA.map(rule => {
    let pct = 0;
    let progressHTML = '';
    if (typeof rule.limit === 'number' && typeof rule.current === 'number') {
      pct = Math.round((rule.current / rule.limit) * 100);
      const color = pct >= 90 ? '#ef4444' : pct >= 70 ? '#f59e0b' : '#4f6ef7';
      progressHTML = `<span class="rule-progress"><span class="rule-progress-fill" style="width:${pct}%;background:${color}"></span></span>${pct}%`;
    } else {
      progressHTML = `<span style="color:#6b7280">${rule.current}</span>`;
    }
    return `<tr>
      <td><strong>${rule.name}</strong></td>
      <td>${rule.type}</td>
      <td>${rule.target}</td>
      <td>${typeof rule.limit === 'number' ? rule.limit.toLocaleString() : rule.limit}</td>
      <td>${progressHTML}</td>
      <td><span class="status-badge ${rule.status}">${rule.status === 'active' ? 'Active' : rule.status === 'warning' ? 'Near Limit' : 'Breached'}</span></td>
      <td><button class="btn-outline" style="padding:4px 10px;font-size:11px" onclick="openEditRule(${LIMITS_DATA.indexOf(rule)})">Edit</button></td>
    </tr>`;
  }).join('');

  // Alert config
  const alertGrid = document.getElementById('alertConfigGrid');
  alertGrid.innerHTML = ALERT_CONFIGS.map((cfg, idx) => `
    <div class="alert-config-card">
      <div class="alert-card-top">
        <div class="alert-card-info">
          <h4>${cfg.title}</h4>
          <p>${cfg.desc}</p>
        </div>
        <label class="toggle ${cfg.enabled ? 'on' : ''}" onclick="this.classList.toggle('on')"><span class="toggle-slider"></span></label>
      </div>
      ${cfg.threshold !== null ? `
        <div class="threshold-input">
          <span>Threshold:</span>
          <input type="number" value="${cfg.threshold}">
          <span>%</span>
        </div>
      ` : ''}
      <div class="alert-channels">
        <div class="alert-channels-label">Notify via</div>
        <div class="alert-channels-row">
          <label class="channel-chip ${cfg.channels.email ? 'active' : ''}" onclick="this.classList.toggle('active')">
            <span class="channel-chip-icon">✉</span> Email
          </label>
          <label class="channel-chip ${cfg.channels.cliq ? 'active' : ''}" onclick="this.classList.toggle('active')">
            <span class="channel-chip-icon">C</span> Cliq
          </label>
          <label class="channel-chip ${cfg.channels.slack ? 'active' : ''}" onclick="this.classList.toggle('active')">
            <span class="channel-chip-icon">S</span> Slack
          </label>
          <label class="channel-chip ${cfg.channels.inapp ? 'active' : ''}" onclick="this.classList.toggle('active')">
            <span class="channel-chip-icon">🔔</span> In-App
          </label>
        </div>
      </div>
      <div class="alert-card-actions">
        <button class="btn-outline" style="padding:4px 12px;font-size:11px" onclick="openAlertPreview(${idx})">Preview</button>
      </div>
    </div>
  `).join('');
}

// ============= ADD RULE MODAL =============

document.getElementById('addRuleBtn').addEventListener('click', () => {
  document.getElementById('addRuleModal').style.display = '';
});

document.getElementById('saveRuleBtn').addEventListener('click', () => {
  const name = document.getElementById('ruleName').value;
  const type = document.getElementById('ruleType').selectedOptions[0].text;
  const target = document.getElementById('ruleTarget').selectedOptions[0].text;
  const limit = parseInt(document.getElementById('ruleLimit').value) || 0;
  if (name && limit) {
    LIMITS_DATA.push({ name, type, target, limit, current: 0, status: 'active' });
    renderLimits();
    document.getElementById('addRuleModal').style.display = 'none';
    document.getElementById('ruleName').value = '';
    document.getElementById('ruleLimit').value = '';
  }
});

// ============= EDIT RULE MODAL =============

let editingRuleIndex = -1;

function openEditRule(index) {
  editingRuleIndex = index;
  const rule = LIMITS_DATA[index];
  document.getElementById('editRuleName').value = rule.name;
  document.getElementById('editRuleType').value = rule.type;
  document.getElementById('editRuleTarget').value = rule.target;
  document.getElementById('editRuleLimit').value = typeof rule.limit === 'number' ? rule.limit : rule.limit;
  document.getElementById('editRuleModal').style.display = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const updateBtn = document.getElementById('updateRuleBtn');
  if (updateBtn) {
    updateBtn.addEventListener('click', () => {
      if (editingRuleIndex >= 0) {
        const rule = LIMITS_DATA[editingRuleIndex];
        rule.name = document.getElementById('editRuleName').value || rule.name;
        const newLimit = document.getElementById('editRuleLimit').value;
        if (newLimit !== '') {
          rule.limit = isNaN(Number(newLimit)) ? newLimit : Number(newLimit);
        }
        renderLimits();
        document.getElementById('editRuleModal').style.display = 'none';
        editingRuleIndex = -1;
      }
    });
  }
});

// ============= SIDE PANEL (Drill-Down) =============

let sidePanelChart;
function openSidePanel(featureName) {
  const row = FEATURE_DATA.find(r => r.feature === featureName);
  if (!row) return;

  const panel = document.getElementById('sidePanel');
  const overlay = document.getElementById('sidePanelOverlay');
  const title = document.getElementById('sidePanelTitle');
  const body = document.getElementById('sidePanelBody');

  title.textContent = row.feature;

  const teams = [
    { name: 'Sales Team', credits: Math.round(row.creditsUsed * 0.45) },
    { name: 'Support Team', credits: Math.round(row.creditsUsed * 0.30) },
    { name: 'Marketing', credits: Math.round(row.creditsUsed * 0.15) },
    { name: 'Operations', credits: Math.round(row.creditsUsed * 0.10) }
  ];

  const users = [
    { name: 'Sarah Johnson', credits: Math.round(row.creditsUsed * 0.18) },
    { name: 'Mike Chen', credits: Math.round(row.creditsUsed * 0.14) },
    { name: 'Priya Sharma', credits: Math.round(row.creditsUsed * 0.11) },
    { name: 'Alex Kim', credits: Math.round(row.creditsUsed * 0.09) }
  ];

  const maxTeam = teams[0].credits;
  const maxUser = users[0].credits;

  body.innerHTML = `
    <div class="sp-stat-grid">
      <div class="sp-stat"><div class="sp-stat-label">Vendor</div><div class="sp-stat-value">${row.vendor}</div></div>
      <div class="sp-stat"><div class="sp-stat-label">Model</div><div class="sp-stat-value">${row.model}</div></div>
      <div class="sp-stat"><div class="sp-stat-label">Credits Used</div><div class="sp-stat-value">${row.creditsUsed.toLocaleString()}</div></div>
      <div class="sp-stat"><div class="sp-stat-label">Avg Credits/Req</div><div class="sp-stat-value">${row.avgCredits}</div></div>
      <div class="sp-stat"><div class="sp-stat-label">Input Tokens</div><div class="sp-stat-value">${formatNumber(row.inputTokens)}</div></div>
      <div class="sp-stat"><div class="sp-stat-label">Output Tokens</div><div class="sp-stat-value">${formatNumber(row.outputTokens)}</div></div>
      <div class="sp-stat"><div class="sp-stat-label">Usage Type</div><div class="sp-stat-value">${row.usageType.toUpperCase()}</div></div>
      <div class="sp-stat"><div class="sp-stat-label">Last Used</div><div class="sp-stat-value">${row.lastUsed}</div></div>
    </div>

    <div class="sp-section">
      <h3>Monthly Trend</h3>
      <div class="sp-chart-container">
        <canvas id="sidePanelTrendChart"></canvas>
      </div>
    </div>

    <div class="sp-section">
      <h3>Input / Output Token Split</h3>
      <div style="display:flex;align-items:center;gap:12px;margin-top:8px">
        <div style="flex:1;height:18px;border-radius:9px;overflow:hidden;display:flex">
          <div style="width:${Math.round(row.inputTokens / (row.inputTokens + row.outputTokens) * 100)}%;background:#4f6ef7;height:100%"></div>
          <div style="flex:1;background:#f97316;height:100%"></div>
        </div>
        <div style="font-size:11px;color:#6b7280;white-space:nowrap">
          <span style="color:#4f6ef7;font-weight:600">${Math.round(row.inputTokens / (row.inputTokens + row.outputTokens) * 100)}% Input</span> / 
          <span style="color:#f97316;font-weight:600">${Math.round(row.outputTokens / (row.inputTokens + row.outputTokens) * 100)}% Output</span>
        </div>
      </div>
    </div>

    <div class="sp-section">
      <h3>Top Users</h3>
      <div class="sp-bar-chart">
        ${users.map(u => `
          <div class="sp-bar-row">
            <span class="sp-bar-label">${u.name}</span>
            <div class="sp-bar-track"><div class="sp-bar-fill" style="width:${Math.round(u.credits / maxUser * 100)}%;background:#a78bfa"></div></div>
            <span class="sp-bar-value">${u.credits.toLocaleString()}</span>
          </div>
        `).join('')}
      </div>
    </div>

    ${row.suggestedModel !== 'No change' ? `
      <div class="sp-suggestion">
        <h4>💡 Recommendation</h4>
        <p>Consider switching from <strong>${row.model}</strong> to <strong>${row.suggestedModel}</strong> for this feature. Estimated savings: ~${Math.round(row.creditsUsed * 0.35).toLocaleString()} credits/month.</p>
      </div>
    ` : ''}
  `;

  panel.classList.add('open');
  overlay.classList.add('open');

  // Side panel mini trend chart
  setTimeout(() => {
    const spCtx = document.getElementById('sidePanelTrendChart');
    if (spCtx) {
      if (sidePanelChart) sidePanelChart.destroy();
      const days = 30;
      const labels = [];
      const values = [];
      const now = new Date(2026, 3, 8);
      for (let i = days - 1; i >= 0; i--) {
        const d = new Date(now); d.setDate(d.getDate() - i);
        labels.push(d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
        values.push(Math.round(row.creditsUsed / 30 * (0.5 + Math.random())));
      }
      sidePanelChart = new Chart(spCtx.getContext('2d'), {
        type: 'line',
        data: {
          labels,
          datasets: [{
            data: values,
            borderColor: '#4f6ef7',
            backgroundColor: 'rgba(79,110,247,.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { display: false },
            y: { grid: { color: '#f0f0f0' }, ticks: { font: { size: 10 } }, beginAtZero: true }
          }
        }
      });
    }
  }, 100);
}

document.getElementById('sidePanelClose').addEventListener('click', closeSidePanel);
document.getElementById('sidePanelOverlay').addEventListener('click', closeSidePanel);
function closeSidePanel() {
  document.getElementById('sidePanel').classList.remove('open');
  document.getElementById('sidePanelOverlay').classList.remove('open');
}

// ============= EXPORT CSV =============

document.getElementById('exportCsvBtn').addEventListener('click', () => {
  const data = getFilteredData();
  const headers = ['Feature','Vendor','Model','Version','Input Tokens','Output Tokens','Total Tokens','Credits Used','Avg Credits/Req','Last Used','Suggested Model','Trend'];
  const rows = data.map(r => [r.feature, r.vendor, r.model, r.version, r.inputTokens, r.outputTokens, r.inputTokens + r.outputTokens, r.creditsUsed, r.avgCredits, r.lastUsed, r.suggestedModel, r.trend]);
  const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'feature_usage_report.csv';
  a.click();
  URL.revokeObjectURL(url);
});

// ============= NOTIFICATION PREVIEW MODAL =============

function openAlertPreview(alertIdx) {
  const cfg = ALERT_CONFIGS[alertIdx];
  // Update the preview modal title with the alert name
  document.querySelector('#notifPreviewModal .modal-header h2').textContent = 'Preview — ' + cfg.title;
  document.getElementById('notifPreviewModal').style.display = '';
}

document.querySelectorAll('.notif-preview-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.notif-preview-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.notif-preview-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('preview-' + tab.dataset.preview).classList.add('active');
  });
});

// ============= INITIAL RENDER =============
renderRecommendations();
renderLimits();

// Sidebar section toggle
document.querySelectorAll('.sidebar-section-header').forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('open');
  });
});

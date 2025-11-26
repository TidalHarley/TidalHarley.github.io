---
layout: default
title: Home
---

<div class="hero-section" style="position: relative;">
    <div class="hero-background" style="position: absolute; top: -50px; left: 50%; transform: translateX(-50%); width: 400px; height: 400px; background: url('{{ '/assets/images/iceberg.png' | relative_url }}') center/contain no-repeat; opacity: 0.15; z-index: 0;"></div>
    <img src="{{ '/assets/images/resume.jpg' | relative_url }}" alt="Haolin Yang" class="hero-avatar" style="position: relative; z-index: 1;">
    <h1 class="hero-name" style="position: relative; z-index: 1;">Haolin Yang</h1>
    <p class="hero-title" style="position: relative; z-index: 1;">
        <i class="fas fa-graduation-cap"></i> Undergraduate @ Peking University, School of Intelligence Science and Technology
    </p>
    <div class="hero-links" style="position: relative; z-index: 1;">
        <a href="mailto:harley_yang@stu.pku.edu.cn" class="hero-link">
            <i class="fas fa-envelope"></i>
            Email
        </a>
        <a href="https://github.com/tidalharley" target="_blank" class="hero-link">
            <i class="fab fa-github"></i>
            GitHub
        </a>
        <a href="{{ '/blog' | relative_url }}" class="hero-link">
            <i class="fas fa-blog"></i>
            Blog
        </a>
        <a href="https://scholar.google.com/citations?user=qHD7JVAAAAAJ&hl=zh-CN" target="_blank" class="hero-link">
            <i class="fas fa-graduation-cap"></i>
            Google Scholar
        </a>
    </div>
</div>

---

## <i class="fas fa-user"></i> About Me

I am a third-year undergraduate student at **Peking University**, majoring in **Intelligence Science and Technology**. My research focuses on building intelligent agents that can understand and navigate the physical world through language and vision.

Currently, I am working on:

<div class="research-interests">
    <span class="interest-tag"><i class="fas fa-robot"></i> Embodied AI</span>
    <span class="interest-tag"><i class="fas fa-route"></i> Vision-Language Navigation</span>
    <span class="interest-tag"><i class="fas fa-brain"></i> Spatial Intelligence</span>
    <span class="interest-tag"><i class="fas fa-layer-group"></i> Multimodal Learning</span>
</div>

I enjoy working out at Gym, playing basketball, and hiking. Feel free to join me at the Qiudebei Gym! I also enjoy playing mobile games like Hearthstone, Honor of Kings, Clash of Clans, and PUBG. Feel free to chat with me!

---

## <i class="fas fa-newspaper"></i> News

<div class="news-timeline">
    <div class="news-item">
        <span class="news-date">2025.09</span>
        <p class="news-content">NavSpace: How navigation agents follow spatial intelligent instructions was delivered to ICRA2026!</p>
    </div>
    <div class="news-item">
        <span class="news-date">2024.12</span>
        <p class="news-content">Initiated NavSpace project - A benchmark for spatial intelligence in navigation.</p>
    </div>
</div>

---

## <i class="fas fa-star"></i> Featured Research

<div class="project-grid">
    <div class="project-card">
        <div class="project-header">
            <h3 class="project-title">
                <a href="https://arxiv.org/abs/2510.08173" target="_blank" style="color: inherit; text-decoration: none;">
                    NavSpace: How navigation agents follow spatial intelligent instructions
                    <i class="fas fa-external-link-alt" style="font-size: 0.7em; margin-left: 6px;"></i>
                </a>
            </h3>
            <span class="project-status">Published</span>
        </div>
        <p class="project-description">
            Instruction-following navigation is a key step toward embodied intelligence. Prior benchmarks mainly focus on semantic understanding but overlook systematically evaluating navigation agents' spatial perception and reasoning capabilities. In this work, we introduce the <strong>NavSpace</strong> benchmark, which contains six task categories and 1,228 trajectory-instruction pairs designed to probe the spatial intelligence of navigation agents. On this benchmark, we comprehensively evaluate 22 navigation agents, including state-of-the-art navigation models and multimodal large language models. The evaluation results lift the veil on spatial intelligence in embodied navigation. Furthermore, we propose <strong>SNav</strong>, a new spatially intelligent navigation model. SNav outperforms existing navigation agents on NavSpace and real robot tests, establishing a strong baseline for future work.
        </p>
        <div class="project-stats">
            <div class="stat-item">
                <span class="stat-value">1,228</span>
                <span class="stat-label">Trajectories</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">6</span>
                <span class="stat-label">Task Categories</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">22</span>
                <span class="stat-label">Agents Evaluated</span>
            </div>
        </div>
        <div class="project-tags">
            <span class="project-tag">VLN</span>
            <span class="project-tag">Spatial Reasoning</span>
            <span class="project-tag">VLLM</span>
            <span class="project-tag">ICRA 2026</span>
        </div>
        <p style="margin-top: 1rem;">
            <a href="https://arxiv.org/abs/2510.08173" target="_blank" class="hero-link" style="display: inline-flex;">
                <i class="fas fa-file-pdf"></i>
                View Paper on arXiv
            </a>
        </p>
    </div>
</div>

---

## <i class="fas fa-briefcase"></i> Internship

<div class="content-card" style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
    <div style="flex-shrink: 0;">
        <img src="{{ '/assets/images/Agibot.png' | relative_url }}" alt="Agibot" style="width: 80px; height: 80px; object-fit: contain; border-radius: 12px;">
    </div>
    <div style="flex: 1; min-width: 250px;">
        <h4 style="margin: 0 0 0.5rem 0; color: var(--primary-color);">
            Zhiyuan Robotics Co., Ltd. – PKU Joint Laboratory
        </h4>
        <p style="margin: 0; color: var(--text-secondary);">
            <i class="fas fa-user-tie" style="margin-right: 8px; color: var(--accent-color);"></i>
            Research Intern
        </p>
    </div>
</div>

---

## <i class="fas fa-trophy"></i> Honors & Awards

<div class="content-card">
    <table style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 0.75rem 0; border-bottom: 1px solid var(--border-color); width: 35%; font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-color);">2024 - 2025</td>
            <td style="padding: 0.75rem 0; border-bottom: 1px solid var(--border-color);"><strong>Huawei Scholarship</strong></td>
        </tr>
        <tr>
            <td style="padding: 0.75rem 0; border-bottom: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-color);">2024 - 2025</td>
            <td style="padding: 0.75rem 0; border-bottom: 1px solid var(--border-color);"><strong>Peking University Excellent Research Award</strong></td>
        </tr>
        <tr>
            <td style="padding: 0.75rem 0; border-bottom: 1px solid var(--border-color); font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-color);">2023 - 2024</td>
            <td style="padding: 0.75rem 0; border-bottom: 1px solid var(--border-color);"><strong>Shenzhen Stock Exchange Scholarship</strong></td>
        </tr>
        <tr>
            <td style="padding: 0.75rem 0; font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-color);">2023 - 2024</td>
            <td style="padding: 0.75rem 0;"><strong>Peking University Excellent Research Award</strong></td>
        </tr>
    </table>
</div>

---

## <i class="fas fa-language"></i> Language Proficiency

<div class="content-card">
    <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 200px; display: flex; align-items: center; gap: 1rem;">
            <img src="{{ '/assets/images/TOEFL.png' | relative_url }}" alt="TOEFL" style="width: 50px; height: 50px; object-fit: contain;">
            <div>
                <h4 style="margin: 0 0 0.25rem 0; color: var(--primary-color);">
                    TOEFL iBT
                </h4>
                <p style="font-size: 2.5rem; font-weight: 700; color: var(--accent-color); margin: 0; font-family: var(--font-mono);">114</p>
            </div>
        </div>
        <div style="flex: 2; min-width: 280px;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem;">
                <div style="background: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Reading</div>
                    <div style="font-size: 1.25rem; font-weight: 600; color: var(--primary-color);">30</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Listening</div>
                    <div style="font-size: 1.25rem; font-weight: 600; color: var(--primary-color);">30</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Speaking</div>
                    <div style="font-size: 1.25rem; font-weight: 600; color: var(--primary-color);">27</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 0.75rem 1rem; border-radius: 8px; text-align: center;">
                    <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Writing</div>
                    <div style="font-size: 1.25rem; font-weight: 600; color: var(--primary-color);">27</div>
                </div>
            </div>
        </div>
    </div>
</div>

---

## <i class="fas fa-lightbulb"></i> Beyond Research

I believe that great research should not only advance scientific understanding but also have the potential to transform how people interact with technology in their daily lives.

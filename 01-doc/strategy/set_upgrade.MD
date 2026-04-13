# Google 商家代管事業｜專案說明

## 專案目的
用 AI 工具的槓桿，幫沒時間 / 不懂網路的實體店家代操 Google 商家檔案，把線上流量變成實體客流。
- **L1 一次性建檔**：NT$ 2,000–5,000（信任入口）
- **L2 每月代管**：NT$ 1,500–3,000 / 月（核心現金流）
- **L3 加值服務**：網站、LINE、廣告投放

## 目錄結構
```
4-googlebusiness/
├─ 01-dev/             ← 規劃文件
│  ├─ 00-positioning.md       ← 核心定位（受眾 × 服務 × 與智簡整合）
│  ├─ 0-run.md                ← 便攜指令（勿動）
│  ├─ 1-tools-prd.md          ← 工具 PRD（7 個工具分三波開發）
│  ├─ 2-operations-manual.md  ← 實戰營運手冊（核心 SOP）
│  ├─ 3-execution-plan.md     ← 計畫書 + 任務細部執行手冊
│  ├─ 9-task-list.md          ← 任務總覽（已併入 3-execution-plan.md）
│  ├─ 99-log.md
│  └─ git-secrets-rules.md
├─ 02-web/             ← Web App 程式碼（尚未開始）
├─ CLAUDE.md           ← 本檔
└─ SESSION_NOTES.md    ← 工作記錄
```

## 核心文件
- **`01-dev/00-positioning.md`**：核心定位（目標受眾、服務矩陣、與智簡品牌整合）
- **`01-dev/2-operations-manual.md`**：實戰營運手冊（從找客到月代管的完整 SOP）
- **`01-dev/3-execution-plan.md`**：計畫書 + 任務細部執行手冊（每步怎麼做、會遇到什麼困難）
- **`01-dev/1-tools-prd.md`**：輔助工具 PRD（7 個工具的開發優先級）
- **`SESSION_NOTES.md`**：每次工作的進度記錄

## 技術棧（規劃中，尚未實作）
- Next.js 14（App Router）+ Tailwind + shadcn/ui
- PostgreSQL（Docker 自架）+ Prisma
- Claude API（Opus + Haiku 混搭）
- Docker Compose → Oracle 鳳凰城（aaPanel + Nginx 反代）
- LINE Messaging API（業務通知 + 客戶月報）

## 開發鐵律
1. **先手動跑通才寫程式**：第一個月用試算表 + Claude Web 手動跑 3 個客戶
2. **沒成交 3 家不寫工具**：商業驗證優先於工程
3. **工具省的時間 ÷ 寫工具的時間 > 2** 才做下一個
4. **不做 SaaS 多租戶**、**不做手機原生 App**、**PWA 即可**

## 商業紅線
- ❌ 不刷評論、不買假評論
- ❌ 不代管金融帳號
- ❌ 不接連鎖品牌、不接八大行業
- ❌ 不承諾「保證上首頁」「保證業績成長 X%」
- ✅ 永遠用客戶自己的 Gmail，自己當「經理人」

## 開發優先順序
- **Milestone 1（Week 1–2）**：業務隨身包 PWA + CRM 極簡版 + AI 內容工廠
- **Milestone 2（Week 3–4）**：批次貼文生成 + 今日待辦 + LINE 通知
- **Milestone 3（第 2 個月）**：客戶雷達 + 月報生成器
- **Milestone 4（第 3–6 個月）**：交付看板 + 收款合約模組

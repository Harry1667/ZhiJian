# 1-zhijian｜智簡 Zhi Jian 母品牌主專案

> **本專案是「智簡 Zhi Jian」的母品牌主站。**
> 定位：北部，中部在地、一人式 AI 駐點顧問，期待月入從 0 成長到 10–30 萬。
> 底下有低門檻子專案（`4-googlebusiness`）做為漏斗入口。
> 高門檻專案暫無

---

## 🔗 與子專案的關係

智簡是「一人式 AI 駐點顧問」，用 AI 工具、社群代操、Vibe Coding 三支柱服務中小企業。
**子專案 `4-googlebusiness` 是智簡的低門檻產品線**：用 Google 商家代管當信任入口，把小店家從 NT$ 2,000 一路養到智簡 10 萬月費方案。

漏斗位置：

```
子專案（4-googlebusiness）           本專案（1-zhijian）
L1 建檔 2,000–5,000 一次性     →
L2 月代管 1,500–3,000 / 月     →
L3 加值（網站/LINE/廣告）      →     輕量陪跑 100,000 / 月
                                    標準駐點 200,000 / 月
                                    深度整合 300,000 / 月
```

**同一個漏斗的兩端**：2,000 養到 200,000，客源從未離開智簡體系。

---

## ⚠️ 工作前必做（每次開工前）

**在動本專案任何檔案前，先檢查子專案是否有更新**：

```bash
ls -la /Users/harryhwa/Documents/0-Dev/0-WebDev/4-googlebusiness/
ls -la /Users/harryhwa/Documents/0-Dev/0-WebDev/4-googlebusiness/01-dev/
cat /Users/harryhwa/Documents/0-Dev/0-WebDev/4-googlebusiness/SESSION_NOTES.md
git -C /Users/harryhwa/Documents/0-Dev/0-WebDev/4-googlebusiness log --oneline -10
```

**為什麼要看**：
- 子專案的 L1 / L2 / L3 定價可能更新 → 本專案 `strategy/9_run.MD` 的漏斗表、網站方案區要同步
- 子專案的 Tier 1 / 2 / 3 受眾畫像可能調整 → 本專案受眾 E / F / G 區塊要同步
- 子專案新增 L3 加值服務（如 LINE Bot、評論 QR、攝影）→ 本專案網站「延伸特效藥」可能要補
- 子專案的商業紅線 / 排除受眾更新 → 本專案 FAQ、合約、同意書口徑要對齊
- 子專案實測出的話術 / 異議處理 → 本專案網站文案、銷售話術要回饋

**檢查重點檔案**：
- `4-googlebusiness/01-dev/00-positioning.md` — 子專案核心定位（Tier 1/2/3 + 服務矩陣）
- `4-googlebusiness/01-dev/2-operations-manual.md` — 實戰營運手冊（找客 SOP）
- `4-googlebusiness/01-dev/3-execution-plan.md` — 執行計畫（每週任務與里程碑）
- `4-googlebusiness/SESSION_NOTES.md` — 每次工作的進度與決策紀錄

---

## 📁 本專案核心結構

```
1-zhijian/
├─ 01-doc/                ← 策略、文案、規則、參考、記錄
│  ├─ strategy/
│  │  ├─ 9_run.MD               ← ★ 公司營運核心（L1–L3 漏斗、A–G 受眾、12 月里程碑）
│  │  └─ set_upgrade.MD         ← 低門檻子專案（4-googlebusiness）摘要
│  ├─ website/
│  │  └─ 9-readme.md            ← 官網八區塊文案總綱
│  ├─ rules/
│  │  └─ 1_rule.MD              ← 基本開發約束
│  ├─ references/
│  │  └─ 2-talk.md              ← Threads 靈感來源連結
│  └─ logs/
│     └─ 99-log.md              ← 工作記錄
├─ 02-web/                ← 官網（L3 駐點目標客群入口）
│  ├─ index.html                ← 首頁（Hero、痛點、三支柱、Demo、FAQ、聯絡）
│  ├─ demo-ocr.html             ← Demo：OCR 單據數位化
│  ├─ demo-contract.html        ← Demo：合約防雷比對
│  ├─ demo-cs.html              ← Demo：AI 智慧客服
│  ├─ privacy.html / terms.html
│  ├─ index.css
│  ├─ form-setup-guide.md       ← GAS 表單串接教學
│  └─ gas_backend.gs
└─ CLAUDE.md              ← 本檔
```

### 🔑 必讀文件（依優先序）
1. **`01-doc/strategy/9_run.MD`** — 公司核心：漏斗、受眾、服務對照、里程碑
2. **`01-doc/strategy/set_upgrade.MD`** — 低門檻子專案在本品牌中的位置
3. **`01-doc/website/9-readme.md`** — 官網文案結構（改網站前必看）
4. **`02-web/index.html`** — 實際對外官網
5. **`01-doc/rules/1_rule.MD`** — 開發規則

---

## 🚦 Claude 工作守則（簡版）

1. **每次開工前**：先 `ls 4-googlebusiness/` + 看 `SESSION_NOTES.md`，確認子專案沒有新決策
2. **改動文案 / 方案 / 報價時**：
   - 先改 `strategy/9_run.MD`（唯一真相源）
   - 再改 `website/9-readme.md`（文案草稿）
   - 最後同步 `02-web/index.html`（實際官網）
3. **新增服務 / 價格變動**：要同時檢查是否影響 `4-googlebusiness/01-dev/00-positioning.md` 的漏斗對照
4. **品牌口徑三大鐵律**：
   - 「月費制陪跑」不是「單次專案」
   - 「一人顧問 = 一支團隊」不是「我們是一間公司」
   - 「三支柱」= AI 工具導入 × 社群代操 × Vibe Coding（不可擴充為四支柱）
5. **紅線**：不做 SaaS 多租戶、不承諾「保證業績 X%」、不接連鎖品牌、不接八大行業

---

## 🔁 雙向同步清單（母 ↔ 子專案）

| 事件 | 同步方向 | 要改的檔案 |
|---|---|---|
| 智簡 L3 月費方案調整 | 母 → 子 | `4-googlebusiness/01-dev/00-positioning.md` 的漏斗 |
| 新增 Demo（OCR / 合約 / 客服等） | 母 → 子 | 子專案 L3 加值清單 |
| 視覺、Logo、品牌口徑變更 | 母 → 子 | 子專案同意書、月報、名片 |
| 子專案 L1 / L2 定價調整 | 子 → 母 | `strategy/9_run.MD`、`website/9-readme.md`、`index.html` 方案區 |
| 子專案 Tier 受眾畫像更新 | 子 → 母 | `strategy/9_run.MD` 受眾 E/F/G 段 |
| 子專案實戰話術 / 異議處理 | 子 → 母 | 網站 FAQ、官網文案 |

---

## 📝 工作記錄

- **`SESSION_NOTES.md`**（專案根目錄）：每次工作的進度、決策、未完成事項；與子專案對稱，開工前先看這份
- `01-doc/logs/99-log.md`：保留供未來細節 log 用

---

*依據 Threads @cw.lin_「AI agent 不是拿來炫技，是真的用產出 3x 效率賺錢」。
母品牌定位 = 給請不起團隊的中型企業的解藥；子專案 = 給請不起智簡的小店家的解藥。*

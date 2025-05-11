# Summer 暑研信息聚合网站

## 项目简介
本项目自动聚合并展示国内外暑期学校、暑期研究（暑研）项目信息。数据每日自动抓取并更新，无需人工干预，网页内容始终保持最新。

## 技术栈
- Next.js
- Tailwind CSS
- Python (requests, BeautifulSoup)
- GitHub Actions（自动化定时任务）
- Vercel（自动部署）

## 目录结构
```
/app
  ├── programs/page.tsx         # 暑研卡片展示页面
  ├── data/programs.json        # 自动生成的数据源（爬虫输出）
/components
  └── ProgramCard.tsx           # 卡片组件
/scraper
  └── crawler.py                # Python 爬虫脚本（自动运行）
/.github/workflows
  └── scrape.yml                # GitHub Actions 自动运行任务
scraper/requirements.txt        # 爬虫依赖
.gitignore                      # 忽略文件
README.md                       # 项目说明文档
```

## 使用说明

### 本地开发
1. 安装依赖
   ```bash
   npm install
   pip install -r scraper/requirements.txt
   ```
2. 运行爬虫，生成数据
   ```bash
   python scraper/crawler.py
   ```
3. 启动本地服务
   ```bash
   npm run dev
   ```

### 自动化更新（无需手动操作）
- GitHub Actions 会每天自动运行爬虫脚本，更新 `app/data/programs.json`，并自动提交到主分支。
- Vercel 检测到数据变更后会自动重新部署，网页内容自动刷新。

## 页面效果
- 首页展示暑研/暑校项目信息卡片，支持搜索。
- 每个卡片包含：项目名称、学校、地区、截止日期、详情链接。

---
如需自定义数据源或扩展功能，欢迎提交 issue 或 PR。 
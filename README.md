# DataChat

Upload any CSV and ask questions about it in plain English — get back a direct answer plus
an auto-generated chart, computed for real (not guessed by the model).

![DataChat screenshot](docs/screenshot.png)

**[Live demo](#)** · Built by [Deepa Venkat](https://github.com/) with Next.js and the Claude API

## Why this exists

Most "chat with your data" demos just paste a sample of rows into a prompt and hope the model's
arithmetic is right. It usually isn't, once you ask for a sum, an average, or a "top 10." This
project instead treats Claude as a **query planner**, not a calculator:

1. The browser parses your CSV and sends the model a schema summary — column names, types, and a
   few example values. It never sends the model the whole file as "context to eyeball."
2. Claude decides *what computation* answers your question by calling a `run_query` tool
   (sum, average, group-by, top-N, filtered count, etc.) and specifying the parameters.
3. Plain TypeScript — not the model — executes that computation over the full dataset.
4. Claude gets the real, computed result back and writes the final answer using those exact
   numbers, plus picks a chart to visualize it if that's useful.

That loop (plan → execute in real code → narrate the verified result) is the same shape used by
production AI tools that sit on top of customer data — which is why this was my pick for a
Forward-Deployed-Engineer-style portfolio project.

## Stack

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS
- **Claude API** (`@anthropic-ai/sdk`) using tool use / function calling
- **Papaparse** for CSV parsing, **Recharts** for charts
- Deployed on **Vercel**

## Running it locally

```bash
npm install
cp .env.example .env.local   # then add your ANTHROPIC_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and either drop in your own CSV, or click
"try it instantly with sample data" (no file needed — this is also what a visitor to the live
demo sees, so it works with zero setup for anyone, recruiters included). Then ask things like:

- "What's the average order value?"
- "Break this down by region as a bar chart"
- "What are the top 5 customers by revenue?"
- "How many rows have status = cancelled?"

## Pushing to GitHub

```bash
git init
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/datachat.git
git push -u origin main
```

(Create the empty `datachat` repo on GitHub first, without a README or .gitignore, so there's
nothing to conflict with.)

## Deploying your own copy

1. Push this repo to your own GitHub account (see above).
2. Import it into [Vercel](https://vercel.com/new) — it auto-detects Next.js, no config needed.
3. Add an environment variable `ANTHROPIC_API_KEY` in the Vercel project settings (get a key at
   [console.anthropic.com](https://console.anthropic.com)).
4. Deploy.

## Notes / limitations

This is a portfolio-scale build, not a production data platform:

- Rows are capped at 5,000 for the aggregation step, to keep API payloads reasonable — plenty for
  a demo CSV, not for a data warehouse.
- The whole (capped) dataset is sent to the serverless function on each question, so very large
  files will be slow. A production version would push the data into a real database or DuckDB
  instance and have the model generate SQL instead of calling a fixed set of aggregation ops.
- No auth, no persistence — uploads live only in the browser tab.

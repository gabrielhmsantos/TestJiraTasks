---
name: devai-find-skills
description: Helps users discover and install DevAI homologated skills. Use when the user wants to find or install skills from the DevAI homologated catalog (via devai skills or local marketplace.json).
---

# DevAI Find Skills

This skill helps you discover and install homologated skills tracked in the DevAI skills catalog.

## When to Use This Skill

Use this skill when the user:
- Asks "find a skill for X" or "is there a skill for X"
- Wants to see available DevAI homologated skills
- Asks to install a skill from the DevAI catalog
- Expresses interest in extending agent capabilities with DevAI skills

## How to Help Users

### Step 0: Ensure the project has a fresh manifest (optional)

From the **project repository** (git root or tree with `skills-lock.json`), the CLI can download the homologated manifest:

```bash
devai skills sync --ai <cursor|claude|codex|opencode>
```

Use `--skip-skill` if you only want `marketplace.json` without running `npx`. Paths below are relative to **PROJECT_ROOT** (resolved by DevAI: nearest `skills-lock.json` ancestor, else `git rev-parse --show-toplevel`).

### Step 1: Read the local marketplace.json

Read `marketplace.json` from the agent folder under the project root, for example:
- Claude: `.claude/marketplace.json` (or `.claude-plugin/marketplace.json` if that is what sync wrote for the agent mapping in use)
- Codex: `.codex/marketplace.json`
- Cursor: `.cursor/marketplace.json` (folder mapping may fall back to `.agents/` depending on agent id)
- OpenCode (`opencode`): `.agents/marketplace.json`
- Default: `.agents/marketplace.json`

### Step 2: List Available Skills

Parse `marketplace.json` and show the user the available skills with their descriptions.

**Important**: For each skill, extract the `source.repo` field to get the correct repository. The source format in marketplace.json is:

```json
{
  "name": "skill-name",
  "source": {
    "source": "github",
    "repo": "owner/repo",
    "path": "skills/skill-name"
  },
  "description": "Skill description"
}
```

### Step 3: Offer Installation

For each skill, use the `source.repo` from the marketplace.json:

```bash
npx skills add <source.repo>@<skill-name> -y
```

Or, from the project root, DevAI can resolve the catalog entry by **exact name** (case-sensitive):

```bash
devai skills add skill-name
```

**Example**:
If a skill has `"repo": "vercel-labs/agent-skills"`, install with:
```bash
npx skills add vercel-labs/agent-skills@vercel-react-best-practices -y
```

**DO NOT** use `coe-tech/devai-skills` for skills that come from other repositories.

### Step 4: Updating Skills

For **project-scoped** lock files (`skills-lock.json` at PROJECT_ROOT), prefer DevAI:

```bash
devai skills update
devai skills update --all
```

(Global `npx skills check` / `npx skills update` may target a different scope; align with the user's project layout.)

## Tips

1. Prefer `devai skills list` to inspect the remote homologated catalog without a local file
2. **Important**: Extract `source.repo` from each plugin to get the correct install source
3. Present skills with their descriptions clearly
4. Provide the exact install command using the correct repo
5. If `npx skills` is not available, guide the user to install it first

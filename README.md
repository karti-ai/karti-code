# KartiCode

Karti.ai's OpenCode plugin - wraps [oh-my-opencode](https://github.com/code-yeongyu/oh-my-openagent) with custom MCPs and team features.

## What it includes

### Base: oh-my-opencode
- 11 agents (Sisyphus, Oracle, Librarian, etc.)
- 26 tools
- 52 lifecycle hooks
- Background agent system
- Skill/command/MCP system

### KartiCode additions:
- **Search MCP** - SearXNG-based web search
- **Mattermost MCP** - Team chat integration
- **Caddy MCP** - Reverse proxy management
- **Gitea MCP** - Self-hosted Git management

## Installation

```bash
# From npm (when published)
npm install -g karticode

# From local source
cd karticode
npm link
```

## Configuration

Add to your `~/.config/opencode/opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["karticode"]
}
```

Or for a specific project, add to `.opencode/opencode.json`.

## Environment Variables

Some MCPs require environment variables:

```bash
# Mattermost (optional)
export MATTERMOST_HOST="https://your-mattermost-server.com"
export MATTERMOST_BOT_TOKEN="your-bot-token"
export MATTERMOST_PAT="your-personal-access-token"

# Gitea (optional)
export GITEA_URL="https://your-gitea-server.com"
export GITEA_TOKEN="your-token"
```

## Structure

```
karticode/
├── src/
│   └── index.ts          # Plugin entry point
├── dist/                 # Compiled output
├── package.json
└── tsconfig.json
```

## Development

```bash
# Build
npm run build

# Watch mode (if you add a watch script)
npm run dev
```

## License

MIT

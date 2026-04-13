# KartiCode — Agent Configuration

**Karti.ai's OpenCode Plugin**

## Overview

KartiCode wraps oh-my-opencode and provides the same 11 built-in agents:

| Agent | Mode | Purpose |
|-------|------|---------|
| Sisyphus | all | Main orchestrator, plans + delegates |
| Hephaestus | all | Autonomous deep worker |
| Oracle | subagent | Read-only consultant |
| Librarian | subagent | External docs/code search |
| Explore | subagent | Contextual grep |
| Atlas | primary | Todo-list orchestrator |
| Metis | subagent | Pre-planning consultant |
| Momus | subagent | Plan reviewer |
| Multimodal-Looker | subagent | PDF/image analysis |
| Prometheus | — | Strategic planner (internal) |
| Sisyphus-Junior | all | Category-spawned executor |

## Custom Agents

You can add custom agents via your KartiCode config at `~/.config/opencode/karticode.jsonc`:

```jsonc
{
  "agents": {
    "my-custom-agent": {
      "model": "fireworks/kimi-k2p5-turbo",
      "instructions": "You are a specialized agent for...",
      "temperature": 0.1
    }
  }
}
```

## MCP Servers

KartiCode auto-configures these MCPs:

| MCP | Type | Path |
|-----|------|------|
| search | local | `mcp-servers/search-mcp-server/dist/index.js` |
| mattermost | local | `mcp-servers/mattermost-mcp-server/mattermost-mcp-server` |
| caddy | local | `mcp-servers/caddy-mcp-server/dist/index.js` |
| gitea | local | `mcp-servers/gitea-mcp-server/dist/index.js` |

## Related

- `oh-my-opencode` - Base plugin that KartiCode wraps
- `~/.config/opencode/oh-my-openagent.jsonc` - Shared config location

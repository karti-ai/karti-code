import OhMyOpenCodePlugin from "oh-my-opencode"

/**
 * KartiCode Plugin - Karti.ai's OpenCode extension
 * 
 * This is a thin wrapper around oh-my-opencode that:
 * - Provides Karti.ai branding
 * - Works with KartiCode-specific configuration
 * - Is designed to work with ~/.config/opencode/karticode.jsonc
 * 
 * The actual MCPs and customizations are configured via:
 * - ~/.config/opencode/karticode.jsonc (user config)
 * - .opencode/karticode.jsonc (project config)
 */

const KartiCodePlugin = async (ctx: unknown) => {
  // Initialize oh-my-opencode
  const omoPlugin = await OhMyOpenCodePlugin(ctx as Parameters<typeof OhMyOpenCodePlugin>[0])

  // Log KartiCode activation
  process.stderr.write("[KartiCode] Plugin activated\n")

  // Return with KartiCode branding but all oh-my-opencode functionality
  return {
    ...omoPlugin,
    name: "karticode",
  }
}

export default KartiCodePlugin

// Re-export all types from oh-my-opencode
export type {
  OhMyOpenCodeConfig,
  AgentName,
  AgentOverrideConfig,
  AgentOverrides,
  McpName,
  HookName,
  BuiltinCommandName,
  ConfigLoadError,
} from "oh-my-opencode"

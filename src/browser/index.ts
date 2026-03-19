/**
 * Browser module — public API re-exports.
 *
 * This barrel replaces the former monolithic browser.ts.
 * External code should import from './browser/index.js' (or './browser.js' via Node resolution).
 */

export { Page } from './page.js';
export { BrowserBridge, BrowserBridge as PlaywrightMCP } from './mcp.js';
export { isDaemonRunning } from './daemon-client.js';

import { extractTabEntries, diffTabIndexes, appendLimited } from './tabs.js';
import { withTimeoutMs } from '../runtime.js';

export const __test__ = {
  extractTabEntries,
  diffTabIndexes,
  appendLimited,
  withTimeoutMs,
};

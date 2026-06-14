// Host detection for the standalone demo landing page. Kept dependency-free
// so middleware can import it from the edge runtime.
//
// The demo lives at demo.output.systems (served at the root) and rewrites to
// the /demo route tree internally. The main chat host serves /demo directly
// at ai.output.systems/demo for previews.

export const DEMO_HOST_PREFIX = 'demo';

export function isDemoHost(host?: string | null): boolean {
  if (!host) return false;
  return host.split(':')[0].toLowerCase().startsWith(DEMO_HOST_PREFIX + '.');
}

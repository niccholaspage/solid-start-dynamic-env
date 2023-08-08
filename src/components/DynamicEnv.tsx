declare global {
  interface Window {
    __DYNAMIC_ENV__: Record<string, string>;
  }
}

export function getDynamicEnvironmentVariable(key: string): string {
  if (import.meta.env.SSR) {
    return process.env[key];
  } else {
    return window.__DYNAMIC_ENV__[key];
  }
}

export function DynamicEnv() {
  const dynamicEnv = {
    VITE_DYNAMIC: process.env.VITE_DYNAMIC,
  };

  return (
    <script
      innerText={`window.__DYNAMIC_ENV__ = { VITE_DYNAMIC: '${dynamicEnv.VITE_DYNAMIC}' }`}
    ></script>
  );
}

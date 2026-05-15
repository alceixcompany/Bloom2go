const ASSET_VERSION = process.env.NEXT_PUBLIC_ASSET_VERSION ?? '2026-05-15-1';

export function withAssetVersion(path: string) {
  if (!path.startsWith('/')) {
    return path;
  }

  const separator = path.includes('?') ? '&' : '?';
  return `${path}${separator}v=${ASSET_VERSION}`;
}

import * as path from 'path';
import { dialog } from 'electron';
import settings from 'electron-settings';

export async function openProfileDirectorySelectionDialog(currentDir: string | undefined) {
  const defaultPath =
    typeof process.env.APPDATA === 'string'
      ? path.join(process.env.APPDATA, 'virtuali', 'GSX', 'MSFS')
      : 'C:';

  const res = await dialog.showOpenDialog({
    properties: ['openDirectory'],
    defaultPath: currentDir ?? defaultPath,
    buttonLabel: 'Select Folder',
    title: 'Select GSX Profile Directory',
  });

  const gsxPath = res?.filePaths[0];

  if (gsxPath) {
    settings.set('gsx', { profilePath: gsxPath });
  }

  return res;
}

export async function installGsxProfile(
  slug: string,
  variant: string,
  files: string[],
): Promise<void> {
  console.log('installing gsx profile', slug, variant, files);

  const results = await Promise.all(
    files.map(async (f) => {
      const res = await fetch(
        `https://raw.githubusercontent.com/OpenSkyMods/gsx-profiles/main/${f}`,
      );
      const text = await res.text();
      return text;
    }),
  );

  console.log('results', results);
}

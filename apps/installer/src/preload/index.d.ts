import { ElectronAPI } from '@electron-toolkit/preload';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      getGsxProfileDirectory(currentDir: string | undefined): Promise<string>;
      getSettingsValue<T>(key: string): Promise<T>;
      installGsxProfile(slug: string, variant: string, files: string[]): Promise<void>;
    };
  }
}

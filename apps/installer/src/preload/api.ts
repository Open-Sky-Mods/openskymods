import { ipcRenderer } from 'electron';
import {
  IPC_ACTION_GET_PROFILE_DIR,
  IPC_ACTION_GET_SETTINGS_VALUE,
  IPC_ACTION_INSTALL_PROFILE,
} from '../common/constants';

export async function getGsxProfileDirectory(currentDir: string | undefined): Promise<string> {
  const res = await ipcRenderer.invoke(IPC_ACTION_GET_PROFILE_DIR, currentDir);
  return res.filePaths[0];
}

export async function getSettingsValue<T>(key: string): Promise<T> {
  return ipcRenderer.invoke(IPC_ACTION_GET_SETTINGS_VALUE, key);
}

export async function installGsxProfile(
  slug: string,
  variant: string,
  files: string[],
): Promise<void> {
  return ipcRenderer.invoke(IPC_ACTION_INSTALL_PROFILE, slug, variant, files);
}

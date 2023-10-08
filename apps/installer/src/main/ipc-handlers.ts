import { ipcMain } from 'electron';
import { installGsxProfile, openProfileDirectorySelectionDialog } from './gsx-backend';
import settings from 'electron-settings';
import {
  IPC_ACTION_GET_PROFILE_DIR,
  IPC_ACTION_GET_SETTINGS_VALUE,
  IPC_ACTION_INSTALL_PROFILE,
} from '../common/constants';

export function registerIpcHandlers(): void {
  ipcMain.handle(IPC_ACTION_GET_PROFILE_DIR, async (_event, currentDir) => {
    return openProfileDirectorySelectionDialog(currentDir);
  });

  ipcMain.handle(IPC_ACTION_GET_SETTINGS_VALUE, (_event, key) => {
    return settings.get(key);
  });

  ipcMain.handle(IPC_ACTION_INSTALL_PROFILE, async (_event, slug, variant, files) => {
    return installGsxProfile(slug, variant, files);
  });
}

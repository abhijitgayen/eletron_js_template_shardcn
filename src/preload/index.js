import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom API definitions for renderer
const api = {}

// Set max listeners once to avoid exceeding limit warnings
ipcRenderer.setMaxListeners(20)

// Expose APIs conditionally based on context isolation
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error('Failed to expose APIs:', error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}

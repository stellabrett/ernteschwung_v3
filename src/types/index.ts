/**
 * Common type definitions for the application
 */

export interface User {
  id: number
  name: string
  email: string
}

export interface AppConfig {
  apiUrl: string
  appName: string
  version: string
}

export type Theme = 'light' | 'dark'

export interface NavigationItem {
  name: string
  path: string
  icon?: string
}

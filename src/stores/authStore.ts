import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, UserRole } from '@/types/auth'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, _password: string) => { success: boolean; error?: string }
  logout: () => void
}

const MOCK_USERS: Record<string, { name: string; role: UserRole }> = {
  admin: { name: '관리자', role: 'admin' },
  user: { name: '사용자', role: 'user' },
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (email: string, _password: string) => {
        const key = email.toLowerCase().trim()
        const matched = MOCK_USERS[key]

        if (!matched) {
          return { success: false, error: '등록되지 않은 계정입니다.' }
        }

        const user: User = {
          id: key,
          name: matched.name,
          role: matched.role,
        }

        set({ user, isAuthenticated: true })
        return { success: true }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
      },
    }),
    {
      name: 'hearing-loop-auth',
    },
  ),
)

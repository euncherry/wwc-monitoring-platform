import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'

/* Auth pages */
import LoginPage from '@/pages/auth/LoginPage'
import SignUpPage from '@/pages/auth/SignUpPage'

/* Layout & Guards */
import { GuestRoute } from '@/components/layout/GuestRoute'
import { AdminRoute } from '@/components/layout/AdminRoute'
import { AdminLayout } from '@/components/layout/AdminLayout'

/* Admin pages */
import AdminDashboard from '@/pages/admin/dashboard'
import HearingLoopsPage from '@/pages/admin/hearing-loops'
import TelecoilZonesPage from '@/pages/admin/telecoil-zones'
import AlertCenterPage from '@/pages/admin/alerts'
import ActivityLogPage from '@/pages/admin/activity-log'

/* User pages (placeholder) */
import UserDashboard from '@/pages/user/dashboard'

/* ─── Root redirect based on role ─── */
function RoleRedirect() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const user = useAuthStore((s) => s.user)

  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (user?.role === 'admin') return <Navigate to="/admin" replace />
  return <Navigate to="/user" replace />
}

function App() {
  return (
    <Routes>
      {/* ─── Guest routes ─── */}
      <Route element={<GuestRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>

      {/* ─── Admin routes ─── */}
      <Route element={<AdminRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/hearing-loops" element={<HearingLoopsPage />} />
          <Route path="/admin/telecoil-zones" element={<TelecoilZonesPage />} />
          <Route path="/admin/alerts" element={<AlertCenterPage />} />
          <Route path="/admin/activity-log" element={<ActivityLogPage />} />
        </Route>
      </Route>

      {/* ─── User routes (placeholder) ─── */}
      <Route path="/user" element={<UserDashboard />} />

      {/* ─── Root & Fallback ─── */}
      <Route path="/" element={<RoleRedirect />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App

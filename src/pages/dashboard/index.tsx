import { Activity, Radio, AlertTriangle, CheckCircle } from 'lucide-react'

const stats = [
  { label: '전체 장치', value: '24', icon: Radio, color: 'text-primary' },
  { label: '정상 운영', value: '20', icon: CheckCircle, color: 'text-success' },
  { label: '경고', value: '3', icon: AlertTriangle, color: 'text-warning' },
  { label: '오류', value: '1', icon: Activity, color: 'text-destructive' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">대시보드</h2>
        <p className="text-sm text-muted-foreground">
          히어링루프 시스템 현황을 한눈에 확인하세요
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <p className="mt-2 text-3xl font-bold text-card-foreground">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-card-foreground">
            최근 알림
          </h3>
          <p className="mt-4 text-sm text-muted-foreground">
            아직 알림이 없습니다.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-card-foreground">
            시스템 상태
          </h3>
          <p className="mt-4 text-sm text-muted-foreground">
            모든 시스템이 정상적으로 운영 중입니다.
          </p>
        </div>
      </div>
    </div>
  )
}

import { Wifi } from 'lucide-react'

export default function UserHearingLoops() {
  return (
    <div className="space-y-6">
      <div className="pb-2">
        <h2 className="text-2xl font-bold text-foreground tracking-tight">히어링루프 관리</h2>
        <p className="text-sm text-muted-foreground mt-2">배치된 히어링루프의 상태를 확인합니다.</p>
      </div>
      <div className="flex flex-col items-center gap-3 py-20 rounded-2xl border border-dashed border-border bg-white">
        <Wifi className="h-10 w-10 text-muted-foreground/20" />
        <p className="text-[14px] font-semibold text-muted-foreground">준비 중입니다</p>
        <p className="text-[12px] text-muted-foreground/60">히어링루프 관리 기능이 곧 제공됩니다.</p>
      </div>
    </div>
  )
}

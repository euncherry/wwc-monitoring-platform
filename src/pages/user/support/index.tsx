import { HelpCircle } from 'lucide-react'

export default function UserSupport() {
  return (
    <div className="space-y-6">
      <div className="pb-2">
        <h2 className="text-2xl font-bold text-foreground tracking-tight">지원</h2>
        <p className="text-sm text-muted-foreground mt-2">도움이 필요하시면 문의해 주세요.</p>
      </div>
      <div className="flex flex-col items-center gap-3 py-20 rounded-2xl border border-dashed border-border bg-white">
        <HelpCircle className="h-10 w-10 text-muted-foreground/20" />
        <p className="text-[14px] font-semibold text-muted-foreground">준비 중입니다</p>
        <p className="text-[12px] text-muted-foreground/60">지원 기능이 곧 제공됩니다.</p>
      </div>
    </div>
  )
}

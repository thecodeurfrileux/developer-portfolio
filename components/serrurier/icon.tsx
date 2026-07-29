import {
  DoorOpen,
  KeyRound,
  ShieldCheck,
  Shield,
  Store,
  Vault,
  Car,
  PanelTopClose,
  MapPin,
  Handshake,
  BadgeEuro,
  Timer,
  FileCheck,
  Phone,
  Star,
  Clock,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  DoorOpen,
  KeyRound,
  ShieldCheck,
  Shield,
  Store,
  Vault,
  Car,
  PanelTopClose,
  MapPin,
  Handshake,
  BadgeEuro,
  Timer,
  FileCheck,
  Phone,
  Star,
  Clock,
  CheckCircle2,
}

export function Icon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Cmp = ICONS[name] ?? ShieldCheck
  return <Cmp className={className} aria-hidden="true" />
}

import { siteContentDates } from "@/lib/site-config";
import {
  formatPacificLongDate,
  timeDateTimeAttribute,
} from "@/lib/page-dates";
import { cn } from "@/lib/utils";

type SiteBylineDateProps = {
  className?: string;
  /** Smaller text for footer / secondary placement */
  variant?: "default" | "compact";
};

export default function SiteBylineDate({
  className,
  variant = "default",
}: SiteBylineDateProps) {
  const iso = siteContentDates.dateModified;
  return (
    <p
      className={cn(
        variant === "compact"
          ? "text-slate-500 text-xs"
          : "text-center text-sm text-slate-600",
        className,
      )}
    >
      Last updated:{" "}
      <time dateTime={timeDateTimeAttribute(iso)} className="font-medium text-slate-700">
        {formatPacificLongDate(iso)}
      </time>
    </p>
  );
}

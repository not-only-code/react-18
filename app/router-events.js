import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { useEffect } from "react";

NProgress.configure({
  showSpinner: false,
  speed: 300
})

export function onStart() {
  NProgress.start();
}

export function onComplete() {
  NProgress.done();
}

export function useOnComplete() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => onComplete(), [ pathname, searchParams ]);
}
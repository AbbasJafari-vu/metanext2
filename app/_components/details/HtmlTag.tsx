"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import { Children } from "_types";

type Props = Children;
export default function Html(props: Props) {
  const { children } = props;
  const { width } = useWindowSize();

  const fontSize = width! / 90 + "px";

  return (
    <html lang="fa" dir="rtl" style={{ fontSize }}>
      {children}
    </html>
  );
}

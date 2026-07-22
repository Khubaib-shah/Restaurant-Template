"use client";

import App from "@/App";
import { useParams } from "next/navigation";

// This page only renders when someone directly opens a /menu/[id] URL (e.g., from a shared link).
// Normal in-app navigation uses window.history.pushState to avoid remounting <App>.
export default function MenuItemPage() {
  const params = useParams();
  const itemId = params?.id as string | undefined;

  return <App initialItemId={itemId} />;
}

"use client";

import { useEffect, useRef } from "react";
import "./lichess-pgn-viewer.css";

interface PgnViewerProps {
  pgn: string;
  showPlayers?: "auto" | boolean;
  showMoves?: false | "right" | "bottom" | "auto";
  showControls?: boolean;
  showClocks?: boolean;
  orientation?: "white" | "black";
  initialPly?: number | "last";
  drawArrows?: boolean;
  lichess?: string | false;
}

export default function PgnViewer({
  pgn,
  showPlayers = "auto",
  showMoves = "auto",
  showControls = true,
  showClocks = true,
  orientation,
  initialPly = 0,
  drawArrows = true,
  lichess = false,
}: PgnViewerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let mounted = true;

    import("@lichess-org/pgn-viewer").then((mod) => {
      if (!mounted || !ref.current) return;
      const LichessPgnViewer = mod.default;
      LichessPgnViewer(ref.current, {
        pgn,
        showPlayers,
        showMoves,
        showControls,
        showClocks,
        orientation,
        initialPly,
        drawArrows,
        lichess,
      });
    });

    return () => {
      mounted = false;
      if (ref.current) ref.current.innerHTML = "";
    };
  }, []);

  return <div ref={ref} />;
}

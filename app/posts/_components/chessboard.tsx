"use client";

import { useEffect, useRef, useState } from "react";
import { Chessground as ChessgroundApi } from "@lichess-org/chessground";
import type { Api } from "@lichess-org/chessground/api";
import type { Config } from "@lichess-org/chessground/config";


interface ChessboardProps {
  width?: number;
  height?: number;
  contained?: boolean;
  config?: Config;
}

const defaultConfig: Config = {
  coordinates: true,
  viewOnly: true,
  // coordinatesOnSquares: true,
  // animation: { enabled: true, duration: 200 },
};

export default function Chessboard({
  width = 500,
  height = 500,
  contained = false,
  config = {},
}: ChessboardProps) {
  const [api, setApi] = useState<Api | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  config = {
    ...defaultConfig,
    ...config,
  }

  useEffect(() => {
    if (!ref.current) return;
    const chessgroundApi = ChessgroundApi(ref.current, config);
    setApi(chessgroundApi);
    return () => chessgroundApi.destroy();
  }, []);

  useEffect(() => {
    api?.set(config);
  }, [api, config]);

  return (
    <div
      className="chessboard"
      data-chessboard
      style={{
        height: contained ? "100%" : height,
        width: contained ? "100%" : width,
      }}
    >
      <div
        ref={ref}
        style={{ height: "100%", width: "100%", display: "table" }}
      />
    </div>
  );
}
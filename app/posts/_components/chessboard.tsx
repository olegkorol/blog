"use client"

import { useEffect, useRef } from "react"
import { Chessboard as CMChessboard, FEN, COLOR, BORDER_TYPE } from "cm-chessboard"
import "cm-chessboard/assets/chessboard.css"

interface ChessboardProps {
  position?: string
  orientation?: "white" | "black"
}

export function ChessboardComponent({ 
  position = FEN.start,
  orientation = "white"
}: ChessboardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const boardRef = useRef<CMChessboard | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    
    boardRef.current = new CMChessboard(containerRef.current, {
      position,
      orientation: orientation === "white" ? COLOR.white : COLOR.black,
      responsive: true,
      assetsUrl: "/chessboard/",
      style: {
        pieces: { file: "pieces/staunty.svg" },
        cssClass: "green",
        borderType: BORDER_TYPE.frame,
        showCoordinates: true
      }
    })

    return () => {
      boardRef.current?.destroy()
      boardRef.current = null
    }
  }, [])

  useEffect(() => {
    boardRef.current?.setPosition(position)
  }, [position])

  useEffect(() => {
    boardRef.current?.setOrientation(
      orientation === "white" ? COLOR.white : COLOR.black
    )
  }, [orientation])

  return <div ref={containerRef} className="chessboard-wrapper" />
}

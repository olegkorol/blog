declare module "cm-chessboard" {
  export const FEN: {
    start: string
    empty: string
  }

  export const COLOR: {
    white: "w"
    black: "b"
  }

  export const BORDER_TYPE: {
    none: "none"
    thin: "thin"
    frame: "frame"
  }

  export const INPUT_EVENT_TYPE: {
    moveInputStarted: number
    validateMoveInput: number
    moveInputFinished: number
    moveInputCanceled: number
    movingOverSquare: number
  }

  export interface ChessboardProps {
    position?: string
    orientation?: "w" | "b"
    responsive?: boolean
    assetsUrl?: string
    assetsCache?: boolean
    style?: {
      cssClass?: string
      showCoordinates?: boolean
      borderType?: "none" | "thin" | "frame"
      aspectRatio?: number
      pieces?: {
        type?: string
        file?: string
        tileSize?: number
      }
      animationDuration?: number
    }
    extensions?: Array<{ class: unknown; props?: Record<string, unknown> }>
  }

  export class Chessboard {
    constructor(context: HTMLElement, props?: ChessboardProps)
    setPiece(square: string, piece: string | null, animated?: boolean): Promise<void>
    getPiece(square: string): string | null
    movePiece(squareFrom: string, squareTo: string, animated?: boolean): Promise<void>
    setPosition(fen: string, animated?: boolean): Promise<void>
    getPosition(): string
    setOrientation(color: "w" | "b", animated?: boolean): Promise<void>
    getOrientation(): "w" | "b"
    enableMoveInput(eventHandler: (event: unknown) => boolean | void, color?: "w" | "b"): void
    disableMoveInput(): void
    destroy(): void
  }
}

declare module "cm-chessboard/assets/chessboard.css" {
  const content: string
  export default content
}

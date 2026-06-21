import React, { forwardRef, useImperativeHandle } from 'react'

type Props = {
  penColor?: string
  canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>
  onEnd?: () => void
}

const SignatureCanvas = forwardRef<unknown, Props>(function SignatureCanvas(
  { canvasProps },
  ref
) {
  useImperativeHandle(ref, () => ({
    isEmpty: () => true,
    clear: () => {},
    toDataURL: () => 'data:image/png;base64,mock',
  }))
  return <canvas data-testid="signature-canvas" {...canvasProps} />
})

export default SignatureCanvas

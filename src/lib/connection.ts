const BEAM_PORT = 'beam.port'

export const connectToTarget = (target: any, port: MessagePort) => {
  try {
    // console.log('✅ check if target is a worker')
    if (target instanceof Worker) {
      // console.log('🔑 connecting to worker', target)
      target.postMessage({ type: BEAM_PORT }, [port])
      return
    }

    // console.log('✅ check if target is a window')
    if (target instanceof Window) {
      // console.log('🔑 connecting to window', target)
      target.postMessage({ type: BEAM_PORT }, '*', [port])
      return
    }

    // console.log('✅ check if target has a postMessage')
    if ('postMessage' in target) {
      // console.log('🔑 connecting to postMessage', target)
      target.postMessage({ type: BEAM_PORT }, '*', [port])
      return
    }

    // console.log('✅ check if target has a connect')
    if ('connect' in target) {
      // console.log('🔑 connecting to connect', target)
      target.connect(port)
      return
    }

    // could not connect to target
    console.log('❌ could not connect to target', target)
  } catch (e) {
    console.error(e)
  }
  return new Promise(resolve => setTimeout(resolve, 0))
}

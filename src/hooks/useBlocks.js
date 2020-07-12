/** @wordpress */
import {useBlockEditorStore} from './store/useBlockEditorStore'

/**
 * Hook: useBlocks
 */
const useBlocks = () => {
  const {select} = useBlockEditorStore()

  return {
    blocks: select.getBlocks(),
    count: select.getGlobalBlockCount(),
  }
}

export {useBlocks}

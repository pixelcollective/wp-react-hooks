/** @wordpress */
import {useBlockEditorStore} from './store/useBlockEditorStore'

/**
 * Hook: useBlocks
 */
const useBlocks = () => {
  const {select, dispatch} = useBlockEditorStore()

  return {
    selected: select.getSelectedBlock(),
    selectNext: dispatch.selectNextBlock(),
    selectPrevious: dispatch.selectPreviousBlock(),
    blocks: select.getBlocks(),
    count: select.getGlobalBlockCount(),
    settings: select.getSettings(),
  }
}

export {useBlocks}

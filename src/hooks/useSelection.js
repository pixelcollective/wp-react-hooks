/** @wordpress */
import {useBlockEditorStore} from './store/useBlockEditorStore'

/**
 * Hook: useSelected
 */
const useSelection = () => {
  const {select, dispatch} = useBlockEditorStore()

  return {
    enabled: select.isSelectionEnabled(),
    setEnabled: enabled => dispatch.toggleSelection(enabled),
    selection: select.getSelectedBlock(),
    setSelection: blockId => dispatch.selectBlock(blockId),
    start: select.getBlockSelectionStart(),
    end: select.getBlockSelectionEnd(),
    next: select.getNextBlockClientId(),
    setNext: dispatch.selectNextBlock(),
    previous: select.getPreviousBlockClientId(),
    setPrevious: dispatch.selectPreviousBlock(),
  }
}

export {useSelection}

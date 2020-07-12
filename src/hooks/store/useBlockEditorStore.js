import {select, dispatch} from '@wordpress/data'

const useBlockEditorStore = () => ({
  select: select('core/block-editor'),
  dispatch: dispatch('core/block-editor'),
})

export {useBlockEditorStore}

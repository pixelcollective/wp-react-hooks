import {select, dispatch} from '@wordpress/data'

const useEditorStore = () => ({
  select: select('core/editor'),
  dispatch: dispatch('core/editor'),
})

export {useEditorStore}

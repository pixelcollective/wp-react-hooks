import {select, dispatch} from '@wordpress/data'

const useEditorUIStore = () => ({
  select: select('core/edit-post'),
  dispatch: dispatch('core/edit-post'),
})

export {useEditorUIStore}

import {useEditorStore} from './store/useEditorStore'

/**
 * Hook: usePostTitle
 */
const usePostTitle = () => {
  const {select, dispatch} = useEditorStore()

  const title = select.getEditedPostAttribute('title')
  const setTitle = title => dispatch.editPost({title})

  return [title, setTitle]
}

export {usePostTitle}

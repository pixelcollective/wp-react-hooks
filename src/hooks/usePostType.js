import {useEditorStore} from './store/useEditorStore'

const usePostType = () => {
  const {select} = useEditorStore()
  const postType = select.getCurrentPostType()

  return [postType]
}

export {usePostType}

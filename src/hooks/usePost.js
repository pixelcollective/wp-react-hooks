import {useEditorStore} from './store/useEditorStore'

/**
 * Hook: usePost
 */
const usePost = () => {
  const {select, dispatch} = useEditorStore()

  const post = select.getCurrentPost()
  const setPost = post => dispatch.editPost(post)

  return [post, setPost]
}

export {usePost}

import { useSelect} from '@wordpress/data'

const usePostTemplate = () => {
  const {template} = useSelect(select => ({
    template: select('core/edit-post').getEditedPostAttribute('template'),
  }))

  return [template]
}

export {usePostTemplate}

/** @wordpress */
import {useBlockEditorStore} from './store/useBlockEditorStore'

/**
 * Hook: useFontSize
 */
const useFontSizes = () => {
  const {select, dispatch} = useBlockEditorStore()

  const {fontSizes} = select.getSettings()
  const setFontSizes = fontSizes => dispatch.updateSettings({fontSizes})
  const addFontSize = fontSize => dispatch.updateSettings({fontSizes: [...fontSizes, fontSize]})

  return {fontSizes, setFontSizes, addFontSize}
}

export {useFontSizes}

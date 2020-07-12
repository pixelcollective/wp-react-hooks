/** @wordpress */
import {useBlockEditorStore} from './store/useBlockEditorStore'

/**
 * Hook: useColors
 */
const useColors = () => {
  const {select, dispatch} = useBlockEditorStore()

  const {colors} = select.getSettings()
  const setColors = colors => dispatch.updateSettings({colors})
  const addColor = color => dispatch.updateSettings({colors: [...colors, color]})

  return {colors, setColors, addColor}
}

export {useColors}

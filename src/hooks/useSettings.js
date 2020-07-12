/** @wordpress */
import {useBlockEditorStore} from './store/useBlockEditorStore'

/**
 * Hook: useSettings
 */
const useSettings = () => {
  const {select, dispatch} = useBlockEditorStore()

  const settings = select.getSettings()
  const setSettings = settings => dispatch.updateSettings(settings)

  return [settings, setSettings]
}

export {useSettings}

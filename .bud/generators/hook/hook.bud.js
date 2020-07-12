/**
 * Starter Budfile
 *
 * Run `yarn generate example`
 */
module.exports = {
  name: 'hook',
  description: 'A block editor react hook.',
  default: {
    hookName: 'Hook',
  },
  prompts: [
    {
      type: 'input',
      name: 'hookName',
      message: 'Hook name (do not prepend with "use")',
      initial: 'hook',
      required: true,
    },
  ],
  tasks: [
    {
      task: 'compile',
      src: 'useHook.js.hbs',
      dest: 'src/hooks/use{{pascalcase hookName}}.js',
    },
  ],
}

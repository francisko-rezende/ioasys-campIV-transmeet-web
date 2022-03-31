module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logig',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name, please',
      },
    ],

    // actions to perform
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: 'templates/style.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
    ],
  })
}

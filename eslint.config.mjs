import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierConfig from 'eslint-config-prettier'

const eslintConfig = [
  // 1. Base ESLint recommended rules
  js.configs.recommended,

  // 2. TypeScript ESLint recommended rules (without type-checking for performance)
  ...tseslint.configs.recommended,

  // 3. React Hooks configuration for all JS/TS files
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // 4. TypeScript-specific overrides
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // Allow unused vars with underscore prefix (common pattern)
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      // Allow explicit any when necessary
      '@typescript-eslint/no-explicit-any': 'warn',
      // Allow require statements in config files
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // 5. Playwright test files
  {
    files: ['e2e/**/*.ts'],
    rules: {
      // Playwright tests use async/await extensively
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },

  // 6. Node.js scripts (build scripts, config files)
  {
    files: ['scripts/**/*.{js,mjs}', '*.config.{js,ts,mjs}'],
    languageOptions: {
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-console': 'off',
    },
  },

  // 7. Prettier integration (must be last to override formatting rules)
  prettierConfig,

  // 8. Ignore patterns
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'public/**',
      'coverage/**',
      '.cache/**',
      'dist/**',
      'build/**',
      '*.min.js',
      'next-env.d.ts',
    ],
  },
]

export default eslintConfig

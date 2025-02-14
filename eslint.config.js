import jsConfig from "@eslint/js";
import parser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import sortkeysPlugin from "eslint-plugin-sort-keys";
import vitestPlugin from "eslint-plugin-vitest";

/**
 * List of global variables or types.
 */
const GLOBAL_NAME_LIST = ["process", "console", "MediaQueryListEvent"];

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    ignores: ["dist/**/*", "node_modules/**/*"],
    languageOptions: {
      globals: {
        ...((keyList) => Object.fromEntries(keyList.map((key) => [key, true])))(
          GLOBAL_NAME_LIST,
        ),
      },
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
    },
    plugins: {
      import: importPlugin,
      sortkeys: sortkeysPlugin,
    },
    rules: {
      ...jsConfig.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      ...prettierConfig.rules,
      "arrow-body-style": ["error", "as-needed"],
      camelcase: [
        "error",
        {
          allow: ["^UNSAFE_"],
          properties: "always",
        },
      ],
      curly: "error",
      "default-case": "error",
      eqeqeq: [
        "error",
        "always",
        {
          null: "never",
        },
      ],
      "func-names": ["error", "always"],
      "id-length": [
        "error",
        {
          exceptions: [
            "_",
            "a",
            "b",
            "fs",
            "i",
            "id",
            "io",
            "j",
            "on",
            "to",
            "x",
            "y",
          ],
          min: 3,
          properties: "never",
        },
      ],
      "import/extensions": ["error", "always", { ignorePackages: true }],
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
          },
          "newlines-between": "always",
        },
      ],
      "jest/no-deprecated-functions": "off",
      "line-comment-position": [
        "error",
        {
          position: "above",
        },
      ],
      "no-console": [
        "error",
        {
          allow: ["warn", "error"],
        },
      ],
      "no-irregular-whitespace": [
        "error",
        {
          skipStrings: true,
          skipTemplates: true,
        },
      ],
      "no-param-reassign": "error",
      "no-redeclare": "off",
      "no-sequences": "error",
      "no-unused-vars": "off",
      "no-var": "error",
      "object-shorthand": ["error", "properties"],
      "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
      "prefer-const": "error",
      "prettier/prettier": "off",
      quotes: [
        "error",
        "double",
        {
          allowTemplateLiterals: false,
          avoidEscape: true,
        },
      ],
      "sort-imports": [
        "error",
        {
          allowSeparatedGroups: true,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],
      "sort-keys": "off",
      "sortkeys/sort-keys-fix": [
        "error",
        "asc",
        { caseSensitive: false, minKeys: 2, natural: true },
      ],
      "spaced-comment": [
        "error",
        "always",
        {
          line: {
            markers: ["/"],
          },
        },
      ],
    },
    settings: {
      ...importPlugin.configs.typescript.settings,
    },
  },
  {
    files: ["**/*.test.ts", "**/*.test.tsx"],
    plugins: {
      vitest: vitestPlugin,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
    },
  },
];

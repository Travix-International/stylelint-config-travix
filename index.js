module.exports = {
  plugins: [
    'stylelint-order',
  ],
  extends: [
    'stylelint-config-standard',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'value',
        ]
      }
    ],
    'color-hex-case': 'upper',
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: 'consecutive-duplicates',
      }
    ],
    'function-comma-space-after': 'always-single-line',
    'number-leading-zero': 'always',
    'order/order': [
      'custom-properties',
      'declarations',
    ],
    'order/properties-order': [
      [
        'composes',
      ],
      {
        unspecified: 'bottomAlphabetical'
      }
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          'composes',
        ]
      }
    ],
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'export',
          'import',
          'global',
          'local',
        ],
      }
    ],
  },
};

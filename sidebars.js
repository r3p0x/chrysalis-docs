/**
 * * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  mySidebar: [{
      type: 'doc',
      id: 'welcome',
      label: 'Welcome'
    }, {
      type: 'doc',
      id: 'introduction/what_is_chrysalis',
      label: 'What is Chrysalis?'
    }, {
      type: 'doc',
      id: 'introduction/path_to_chrysalis',
      label: 'Path to Chrysalis'
    },
    {
      type: 'category',
      label: 'Firefly',
      items: [{
          type: 'doc',
          id: 'firefly/introduction',
          label: 'Introduction'
        },
        {
          type: 'doc',
          id: 'firefly/verify_download',
          label: 'Verify Download'
        },
      ]
    },
    {
      type: 'doc',
      id: 'node_software',
      label: 'Node Software'
    }, {
      type: 'category',
      label: 'Libraries',
      items: [{
        type: 'doc',
        id: 'libraries/overview',
        label: 'Overview'
      }, {
        type: 'doc',
        id: 'libraries/client',
        label: 'Client Lib'
      }, {
        type: 'doc',
        id: 'libraries/wallet',
        label: 'Wallet Lib'
      }, ]
    },
    {
      type: 'category',
      label: 'Guides',
      items: [{
          type: 'doc',
          id: 'guides/overview',
          label: 'Overview'
        },
        {
          type: 'doc',
          id: 'guides/developer',
          label: 'Developer'
        },
        {
          type: 'doc',
          id: 'guides/exchange',
          label: 'Exchange'
        },
        {
          type: 'doc',
          id: 'guides/token_migration',
          label: 'Token Migration'
        },
        {
          type: 'doc',
          id: 'guides/migration_mechanism',
          label: 'Migration Mechanism'
        },
        {
          type: 'doc',
          id: 'guides/hub_migration',
          label: 'Hub Migration'
        },
        {
          type: 'doc',
          id: 'guides/backup_security',
          label: 'Backup and Security'
        },
        {
          type: 'doc',
          id: 'guides/snapshot_validation_bootstrapping',
          label: 'Chrysalis Snapshot Validation'
        },
      ]
    },
    {
      type: 'doc',
      id: 'mainnet',
      label: 'Mainnet'
    },
    {
      type: 'doc',
      id: 'devnet',
      label: 'Devnet'
    },
    {
      type: 'doc',
      id: 'tutorials/one_click_private_tangle',
      label: 'Private Tangle'
    },
    {
      type: 'doc',
      id: 'protocol_rfc',
      label: 'Protocol RFCs'
    },
    {
      type: 'doc',
      id: 'resources',
      label: 'Resources'
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ'
    },

  ]
};
Ext.define("SlatwallMobile.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Dashboard',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Slatwall Dashboard'
                },

                html: [
                    "Future dashboad goes here"
                ].join("")
            },
            {
                title: 'Products',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Products'
                    }
                ]
            },
            {
                title: 'Orders',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Orders'
                    }
                ]
            }
        ]
    }
});

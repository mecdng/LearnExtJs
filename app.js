Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',

   controllers: [
        'Users'
    ],
   launch: function () {
       console.log('applicaiton is launched.');
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Users',
                    html: 'List of users will go here'
                }
            ]
        });
    }
});
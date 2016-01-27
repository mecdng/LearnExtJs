Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    init: function() {
        console.log('Iniitialized Users! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render:this.onPanelRendered
            }
        });
    },

    onPanelRendered : function() {
        console.log('This panel was rendered');
    }
})
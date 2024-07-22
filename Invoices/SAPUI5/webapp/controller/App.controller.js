// @ts-nocheck
sap.ui.define([
    'sap/ui/core/mvc/Controller'
], 
/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 */
    function(Controller, MessageToast) {
    "use strict";

    return Controller.extend('logaligroup.SAPUI5.controller.App', {

        onInit: function(){
            

        },

        onShowHellow: function (){
            //read text
            var oBundle =  this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name")
            var msg = oBundle.getText("helloMsg", [sRecipient])
            MessageToast.show(msg);
        }
    });
    
});
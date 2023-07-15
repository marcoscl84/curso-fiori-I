sap.ui.define([
    "./BaseController"
], function (BaseController){
    "use strict";

    return BaseController.extend("com.prestativ.slc.followup.controller.List", {
        // Lifecycle methods
        onInit: function () {
           this.getRouter().getRoute("list").attachPatternMatched(this._onMasterMatched, this) 
        },

        // Event handlers

        // Begin: internal methods

        _onMasterMatched: function (oEvent){

        }
    })
})
sap.ui.define([
    "./BaseController",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (
    BaseController,
	Formatter,
	Filter,
	FilterOperator
){
    "use strict";

    return BaseController.extend("com.prestativ.slc.followup.controller.List", {
        formatter: Formatter,

        // Lifecycle methods
        onInit: function () {
           this.getRouter().getRoute("list").attachPatternMatched(this._onMasterMatched, this) 
        },

        // Event handlers
        onBeforeRebindTableFollowup: function(oEvent){
            let oFilters = oEvent.getParameter("bindingParams").filters;
            
            // busca os registros ligados a um email específico
            oFilters.push(new Filter("EMailAddress", FilterOperator.EQ, this._Email));
        },


        // Begin: internal methods

        _onMasterMatched: function (oEvent){
            this._Email = "lenon.soares@prestativ.com.br";

            try {
                // Busca todas informações do usuário no servidor SAP
                this._Email = sap.ushell.Container.getService("UserInfo").getEmail();
            } catch (error) {}
        }
    })
})
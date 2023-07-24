sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController,
	JSONModel) {
        "use strict";

        return BaseController.extend("com.prestativ.slc.followup.controller.App", {
            
            // Lifecycle methods
            onInit: function () {
                let oViewModel,
                    fnSetAppNotBusy,
                    iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

                oViewModel = new JSONModel({
                    busy: false,
                    delay: 0,
                    layout: "OneColumn",
                    previousLayout: "",
                    actionButtonsInfo: {
                        midolumn: {
                            fullscreem: false,
                        }
                    }

                });
                this.setModel(oViewModel, "appView")

                fnSetAppNotBusy = function(){
                    oViewModel.setProperty("/busy", false)
                    oViewModel.setProperty("/delay", iOriginalBusyDelay)
                }

                this.getOwnerComponent().getModel().metadataLoaded().then(fnSetAppNotBusy);
                this.getOwnerComponent().getModel().attachMetadataFailed(fnSetAppNotBusy);

                // this.getView().addStyleClass(this.getOwnerComponent().getComponentDestinyClass())
            }

            // Event handlers

            // Begin: internal methods
        });
    });

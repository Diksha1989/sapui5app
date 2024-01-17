sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.order.orderapp.controller.Home", {
            onInit: function () {
                
                /*var oData = {
                    "title" : "Sales Order",
                    "Order_Detail" : [{
                        "OrderID" : "121",
                        "Product" : "Samsung",
                        "Quantity" : "80" ,
                        "UnitPrice" : "999" ,
                        "State" : "Success"
                    
                    },
                    {
                        "OrderID" : "89",
                        "Product" : "Galaxy",
                        "Quantity" : "20" ,
                        "UnitPrice" : "789" ,
                        "State"  : "Error"

                    }
                ]
                }

                var oModel = new JSONModel(oData);
                oModel.setDefaultBindingMode("OneWay");
                this.getView().setModel(oModel);
                */
            },
            onSearch : function(){
                    alert("Search");
            },

            onSort : function(){
                alert("Sort");

            },

            onGroup : function(){

                alert("Group");
            }
        });
    });

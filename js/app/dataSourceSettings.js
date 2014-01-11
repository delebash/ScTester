isc.RestDataSource.addProperties({
    dataFormat: "json",
    jsonSuffix: "",
    jsonPrefix: "",
    sparseUpdates: true,
    prettyPrint: true,

    //Using key word params adds params to url
    // requestProperties: { params: { id: 5 }, className: "Contact"},

    fetchDataURL: "http://localhost:2480/scRequest/RestTester",
    addDataURL: "http://localhost:2480/scRequest/RestTester",
    updateDataURL: "http://localhost:2480/scRequest/RestTester",
    removeDataURL: "http://localhost:2480/scRequest/RestTester",

    operationBindings: [
        {operationType: "fetch", dataProtocol: "postMessage", requestProperties: {httpMethod: "POST", httpHeaders: {"Authorization": "Basic YWRtaW46YWRtaW4="}}},
        {operationType: "add", dataProtocol: "postMessage", requestProperties: {httpMethod: "POST", httpHeaders: {"Authorization": "Basic YWRtaW46YWRtaW4="}}},
        {operationType: "remove", dataProtocol: "postMessage", requestProperties: {httpMethod: "POST", httpHeaders: {"Authorization": "Basic YWRtaW46YWRtaW4="}}},
        {operationType: "update", dataProtocol: "postMessage", requestProperties: {httpMethod: "POST", httpHeaders: {"Authorization": "Basic YWRtaW46YWRtaW4="}}}
    ]
});
//var myObj = {
//    transformRequest: function(dsRequest){
//        debugger;
//        if (dsRequest.operationType == "update") {
//            var versionFld = dsRequest.oldValues["@version"] || 0;
//            dsRequest.data["@version"] = versionFld;
//        };
//        return this.Super("transformRequest", arguments);
//    }
//}
//isc.RestDataSource.setProperties(myObj);
//function myFunction(dsRequest){
//    debugger;
//if (dsRequest.operationType == "update") {
//            var versionFld = dsRequest.oldValues["@version"] || 0;
//            dsRequest.data["@version"] = versionFld;
//        };
//        return this.Super("transformRequest", arguments);
//}

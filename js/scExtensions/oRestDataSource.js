//Note run Alter Database DATETIMEFORMAT yyyy-MM-dd'T'HH:mm:ss.Z on OrientDB to set datetime format for SmartClientRest

isc.defineClass("oRestDataSource", RestDataSource);
isc.oRestDataSource.addProperties({
    dataFormat: "json",
    jsonSuffix: "",
    jsonPrefix: "",
    sparseUpdates: true,
    prettyPrint: true,
    dropExtraFields: true,
    fetchDataURL: "http://localhost:2480/scRequest/RestTester",
    addDataURL: "http://localhost:2480/scRequest/RestTester",
    updateDataURL: "http://localhost:2480/scRequest/RestTester",
    removeDataURL: "http://localhost:2480/scRequest/RestTester",

    operationBindings: [
        {operationType: "fetch", dataProtocol: "postMessage", requestProperties: {httpMethod: "POST", httpHeaders: {"Authorization": "Basic YWRtaW46YWRtaW4="}}},
        {operationType: "add", dataProtocol: "postMessage", requestProperties: {httpMethod: "POST", httpHeaders: {"Authorization": "Basic YWRtaW46YWRtaW4="}}},
        {operationType: "remove", dataProtocol: "postMessage", requestProperties: {httpMethod: "POST", httpHeaders: {"Authorization": "Basic YWRtaW46YWRtaW4="}}},
        {operationType: "update", dataProtocol: "postMessage", requestProperties: {httpMethod: "POST", httpHeaders: {"Authorization": "Basic YWRtaW46YWRtaW4="}}}
    ],
    transformRequest: function (dsRequest) {
        if (dsRequest.operationType == "update") {
            var versionFld = dsRequest.oldValues["@version"] || 0;
            dsRequest.data["@version"] = versionFld;
        }

        return this.Super("transformRequest", arguments);
    }
})


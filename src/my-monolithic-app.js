(function() {
    "use strict";

    const appModel = {
        title: "Tour of Heroes",
    };
    
    document.addEventListener("DOMContentLoaded", () => {
        ko.applyBindings(appModel);
    });
}());
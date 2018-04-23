(function() {
    "use strict";

    function Hero(data) {
        const self = this;
        
        self.id = data.id;
        self.name = ko.observable(data.name);
    }
    
    const appModel = {
        title: "Tour of Heroes",
        hero: new Hero({ id: 1, name: "Windstorm" }),
    };
    
    document.addEventListener("DOMContentLoaded", () => {
        ko.applyBindings(appModel);
    });
}());
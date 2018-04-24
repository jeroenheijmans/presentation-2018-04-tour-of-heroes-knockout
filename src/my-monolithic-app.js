(function() {
    "use strict";

    // More info on BindingHandlers: http://knockoutjs.com/documentation/custom-bindings.html
    ko.bindingHandlers['href'] = {
        update: function(element, valueAccessor) {
            element.href = ko.utils.unwrapObservable(valueAccessor());
        }
    };

    function Hero(model) {
        const self = this;

        self.id = model.id;
        self.name = ko.observable(model.name);

        self.upperName = ko.computed(() => self.name().toUpperCase());

        self.googleUrl = ko.computed(() => {
            const baseUrl = "https://www.google.com/search";
            const query = self.name().split(" ").join("+");
            return `${baseUrl}?q=${query}`
        });
    }

    const mockHeroes = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' },
    ];
    
    function App(model) {
        const self = this;

        self.title = "Tour of Heroes";
        self.projectUrl = "https://github.com/jeroenheijmans/presentation-2018-04-tour-of-heroes-knockout";
        
        self.heroes = model.mockHeroes.map(data => new Hero(data));
        
        self.selectedHero = ko.observable(null);

        self.selectHero = function (hero) {
            self.selectedHero(hero);
        };
    };
    
    document.addEventListener("DOMContentLoaded", () => {
        ko.applyBindings(new App({ mockHeroes: mockHeroes }));
    });
}());
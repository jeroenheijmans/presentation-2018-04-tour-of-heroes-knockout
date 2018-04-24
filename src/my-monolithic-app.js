(function() {
    "use strict";

    function HeroComponent(params) {
        const self = this;

        self.hero = params.hero;
    }

    ko.components.register('app-hero-detail', {
        template: { element: 'app-hero-detail' },
        viewModel: HeroComponent,
    });

    function Hero(model) {
        const self = this;

        self.id = model.id;
        self.name = ko.observable(model.name);

        self.upperName = ko.computed(() => self.name().toUpperCase());
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
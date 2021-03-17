describe('MoviesWebsite' , ()=>{
    it("cos", ()=>{
        cy.visit('https://movieswebsite.netlify.app/');
        cy.contains('a', 'Find Movie').click();
        cy.get('input[placeholder="Wyszukaj film, serial lub aktora..."]').type('batman');
        cy.contains('button', 'Szukaj').click();
        cy.contains('Batman Begins').click();
        cy.contains('h1', 'Christian Bale').click();
        cy.contains('Batman Begins').click();
        cy.contains('a', 'Popular Movies').click();
        cy.contains('div', 'Next page').click();
        cy.get('img[alt="Nomadland"]').click();
    })
})
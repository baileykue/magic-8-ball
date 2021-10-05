
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains body element', ()=>{
            cy.get('#body').should('be.visible');
        });
    });
});
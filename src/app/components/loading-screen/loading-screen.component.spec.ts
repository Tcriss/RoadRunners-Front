import { LoadingScreenComponent } from './loading-screen.component';

describe('LoadingScreenComponent', () => {
    it('should mount', () => {
        cy.mount(LoadingScreenComponent);
    });

    it('should recieve component height', () => {
        cy.mount(LoadingScreenComponent, {
            componentProperties: { 
                componentHeight: '100vh' 
            }
        });
        cy.get('.overlay').should('have.attr', 'style', 'not.be.empty');
    });
});
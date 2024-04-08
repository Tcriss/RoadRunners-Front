import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    it('should mount', () => {
        cy.mount(NavbarComponent);
    });

    it('should show links', () => {
        cy.mount(NavbarComponent, {
            componentProperties: {
                links: paths
            }
        });
        cy.get('.items')
    });
});
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('should mount', () => {
    cy.mount(FooterComponent);
  });

  describe('Logo section', () => {
    it('should display brand logo', () => {
      const logoUrl: string = './assets/images/RR-logo-brand.png'; 
  
      cy.mount(FooterComponent);
      cy.get('.image').should('contain.html', `<img src="${logoUrl}" />`);
    });
  });

  describe('Members section', () => {
    it('should have 3 members inside .members tag', () => {
      cy.mount(FooterComponent);
      cy.get('.member').should('have.length', 3);
    });

    it('should each member open his github profile', () => {
      cy.mount(FooterComponent);
      cy.get('.member').contains('href').should('not.have.attr', 'href', '#undefined');
    });
  });

  describe('Credits section', () => {
    it('should have credits', () => {
      cy.mount(FooterComponent);
      cy.get('.credits').should('have.value', 'Made with ❤️, <a href="https://github.com/Tcriss/RoadRunners-Front" target="_blank">Source code</a>');
    });

    it('credits should open source code', () => {
      cy.mount(FooterComponent);
      cy.get('source-code').should('have.value', 'Source code')
      cy.get('#source-code').should('have.attr', 'href', 'https://github.com/Tcriss/RoadRunners-Front');
      cy.get('#source-code').should('have.attr', 'target', '_blank');
    });
  });
});
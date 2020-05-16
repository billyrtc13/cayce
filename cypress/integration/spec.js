describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /contacto', () => {
		cy.get('nav a').contains('contacto').click();
		cy.url().should('include', '/contacto');
	});

	it('navigates to /explorar', () => {
		cy.get('nav a').contains('explorar').click();
		cy.url().should('include', '/explorar');
	});
});
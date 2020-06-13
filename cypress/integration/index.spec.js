context('Index', () => {
	beforeEach(() => {
		cy.visitLocalhost();
	});

	it('title should be valid', () => {
		cy.get('h1').should('contain', 'Welcome');
	});
});

context('About', () => {
	beforeEach(() => {
		cy.visitLocalhost('/about');
	});

	it('title should be valid', () => {
		cy.get('h1').should('contain', 'About');
	});

	it('should be able navigate to index page', () => {
		cy.get('a').click();

		cy.location().should((location) => {
			expect(location.hash).to.be.empty;
			expect(location.pathname).to.eq('/');
			expect(location.search).to.be.empty;
		});
	});
});

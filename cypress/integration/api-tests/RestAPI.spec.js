describe("Testing API Endpoints using Cypress", () => {
  it("Test GET Request", () => {
    cy.request(
      "https://originalfarm.com/wp-json/wp/v3/menu-products?per_page=10"
    ).then((response) => {
      expect(response.body).to.have.property('code', 200);
    });
  });

  // it("Test POST Request", () => {
  //   cypress
  //     .request({
  //       method: "POST",
  //       url: "https://localhost:3000/api/posts",
  //       body: {
  //         id: 2,
  //         title: "Automation",
  //       },
  //     })
  //     .then((response) => {
  //       expect(response.body).has.property("title", "Automation");
  //     });
  // });

  // it("Test PUT Request", () => {
  //   cy.request({
  //     method: "PUT",
  //     url: "https://localhost:3000/api/posts/2",
  //     body: {
  //       id: 2,
  //       title: " Test Automation",
  //     },
  //   }).then((response) => {
  //     expect(response.body).has.property("title", "Test Automation");
  //   });
  // });

  // it("Test DELETE Request", () => {
  //   cy.request({
  //     method: "DELETE",
  //     url: "https://localhost:3000/api/posts/2",
  //   }).then((response) => {
  //     expect(response.body).to.be.empty;
  //   });
  // });
});

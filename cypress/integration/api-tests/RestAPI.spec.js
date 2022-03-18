describe("Testing API Endpoints using Cypress", () => {
  let id = 10;
  it("Test GET Request", () => {
    cy.request("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        expect(response.body.length).to.eq(id);
        id++;
      }
    );
  });

  it("this should fail", () => {
    cy.request("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        expect(response.body.length).to.eq(id);
        id++;
      }
    );
  });

  describe("Testing POST Request", () => {
    it("POST Request", () => {
      cy.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("title", "foo");
        expect(response.body).to.have.property("body", "bar");
        expect(response.body).to.have.property("userId", 1);
      });
    });
  });

  it("Trying the PUT Request", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: JSON.stringify({
        id: 1,
        title: "Sujesh",
        body: "Shrestha",
        userId: 1,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      expect(response.body).to.have.property("title", "Sujesh");
    });
  });

  it("Trying the Patch Request", () => {
    cy.request({
      method: "Patch",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: JSON.stringify({
        title: "Saurav",
        userId: 1,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      expect(response.body).to.have.property("title", "Saurav");
    });
  });

  it("Trying the DELETE Request TEST CASE PASSED", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/2",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Trying the DELETE Request TEST CASE FAILED", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/2",
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });  
});

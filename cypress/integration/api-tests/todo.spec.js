const { expect } = require("chai");

describe("TODO api testing", () => {
  let todoItem;
  it("fetches Todo items - GET", () => {
    cy.request("/todos/").as("todoRequest");
    cy.get("@todoRequest").then((todos) => {
      expect(todos.status).to.eq(200);
      assert.isArray(todos.body, "Todos Response is an array");
    });
  });

  it('deletes Todo items - Delete', () => {
  cy.request('DELETE', `/todos/${todoItem}`).as('todoRequest'); //deletes todo item = 9
  cy.get('@todoRequest').then((todos)=>{
    expect(todos.status).to.eq(200);
    assert.isString(todos.body, "todo is deleted");
    });
  }); 

  it('Adds Todo item - POST',() => {
    cy.request('POST','/todos/',{task: "run tests"}).as('todoRequest');
    //adding new items by defining todo names. 
    cy.get('@todoRequest').then((todos)=>{
      expect(todos.status).to.eq(200);
      cy.wrap(todos.body).should('deep.include',{task: "run tests",completed: false});
    });
  });
});

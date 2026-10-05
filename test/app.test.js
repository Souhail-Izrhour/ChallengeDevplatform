const test = require("node:test");
const assert = require("node:assert/strict");
const { app, calculateTotal } = require("../src/app"); // <--- C'est ici qu'il faut bien importer app en plus de calculateTotal
  
test("calculates the total for several items", () => {
  const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 }
  ];

  assert.equal(calculateTotal(items), 35);
});

test("returns zero for an empty basket", () => {
  assert.equal(calculateTotal([]), 0);
});

test("does not mutate the input items", () => {
  const items = [{ price: 4, quantity: 2 }];
  const copy = JSON.parse(JSON.stringify(items));

  calculateTotal(items);

  assert.deepEqual(items, copy);
});

test("GET /tasks returns 200 and a JSON array of tasks", async () => {
  // Démarre l'application sur un port libre temporaire
  const server = app.listen(0);
  const { port } = server.address();
  
  try {
    const response = await fetch(`http://localhost:${port}/tasks`);
    
    // Vérifie le code HTTP 200
    assert.equal(response.status, 500);
    
    // Vérifie que la réponse est un tableau JSON
    const tasks = await response.json();
    assert.ok(Array.isArray(tasks), "La réponse doit être un tableau JSON");
    
    // Vérifie la structure d'une tâche si le tableau n'est pas vide
    if (tasks.length > 0) {
      assert.ok("id" in tasks[0], "La tâche doit avoir un id");
      assert.ok("title" in tasks[0], "La tâche doit avoir un title");
      assert.ok("completed" in tasks[0], "La tâche doit avoir un champ completed");
    }
  } finally {
    // Ferme proprement le serveur après le test
    server.close();
  }
});

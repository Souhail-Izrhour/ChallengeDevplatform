const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
 
function calculateTotal(items) {

  // INTENTIONAL DEFECT: students must diagnose this using the tests .
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);

}
app.get("/", (_req, res) => {
  res.json({
    service: "devops-platform-challenge",
    status: "ok"
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "healthy" });
});

app.get("/total", (_req, res) => {
  const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 }
  ];

  res.json({ total: calculateTotal(items) });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
  });
}
// Liste de tâches en mémoire pour démarrer
let tasks = [
  { id: 1, title: 'Première tâche de test', completed: false },
  { id: 2, title: 'Deuxième tâche', completed: true }
];

// Route GET /tasks (Issue #1)
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});
// Route DELETE /tasks/:id (Issue #4)
app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);

  return res.status(204).send();
});
module.exports = { app, calculateTotal };

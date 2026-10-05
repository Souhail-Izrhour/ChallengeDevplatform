const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
 app.use(express.json()); // <--- Indispensable pour lire le JSON des requêtes POST
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

// Route POST /tasks (Issue #2)
app.post('/tasks', (req, res) => {
  const { title } = req.body;

  // Critère : un titre vide ou absent retourne HTTP 400
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Le titre est obligatoire et ne peut pas être vide.' });
  }

  // Critère : génération d'un ID unique
  const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

  const newTask = {
    id: newId,
    title: title.trim(),
    completed: false
  };

  tasks.push(newTask);

  // Critère : la nouvelle tâche est renvoyée
  res.status(201).json(newTask);
});

module.exports = { app, calculateTotal };

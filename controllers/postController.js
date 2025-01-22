import connection from "../connection.js";

// fa una copia e filtra 
function index(req, res) {
    connection.query("SELECT * FROM posts"((error, res) => {
        if (error) {
            return res.status(500).json({
                error: "errore nella chiamata"
            })
            res.json({ lunghezza: results.length, posts: res });
        }        
    }))
};


// funzione che trova per l'id - una sola
function show(req, res) {
    
};

// Create - Store - crea uno nuovo
function store(req, res) {
    
};

// Update totale - Update - Modifica 
function update(req, res) {
    
}

// Update parziale - Modify - modifica solo parziale
function modify(req, res) {
    
};

// Delete (cancellazione) - Destroy - elimina
function destroy(req, res) {
    
}

export { index, show, store, update, modify, destroy };
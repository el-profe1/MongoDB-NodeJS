const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);

    try {
      
        await client.connect();

        // Invoque sus funciones aquí

    } finally {
        
        await client.close();
    }
}

main().catch(console.error);

// Agregue las funciones que van a operar sobre la base de datos a partir de esta linea

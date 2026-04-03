interface Book {
    title: string;  
    author: string;
    genre?: string; // optional property
    displayInfo(): void; // optional method
}

interface Book {
    bookPrice: number;
}

type Product ={
    id: number;
    name: string;
    description?: string; // optional property
    displayProductInfo(): void; // optional method
}


interface NewBook extends Book {
    publisher: string;
    yearPublished: number;
}



type NewProduct = Product & {
    price: number;
    stock: number;
}

var myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}`);
    }
}

var myProduct: Product = {
    id: 101,
    name: 'Laptop',
    description: 'A high-performance laptop',
    displayProductInfo() {
        console.log(`Product ID: ${this.id}, Name: ${this.name}, Description: ${this.description}`);
    }
}
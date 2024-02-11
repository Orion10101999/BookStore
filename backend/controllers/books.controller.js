import Book from "../models/book.model.js";


const getBooks = async (req, resp) => {
    try {
        const books = await Book.find({});
        
        return resp.status(200).json({
            count: books.length,
            data: books
        })
        
    } catch (error) {
        console.log(error.message);
        resp.status(500).send({ message: error.message })
    }
}

const updateBook = async (req, resp) => {
    if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        try {
            const {id} = req.params
        const books = await Book.findByIdAndUpdate(id, request.body);
        if(!books) {
            return resp.status(404).json({message : 'Book Not Found'})
        }
        return resp.status(200).json({
            message : "Book Updated SucessFully"
        })
        
    } catch (error) {
        console.log(error.message);
        resp.status(500).send({ message: error.message })
    }
}
const deleteBook = async (req, resp) => {
    try {
        const {id} = req.params
        const books = await Book.findByIdAndDelete(id);
        if(!books) {
            return resp.status(404).json({message : 'Book Not Found'})
        }
        
        return resp.status(200).json({
            message : "Book Deleted Sucessfully"
        })

    } catch (error) {
        console.log(error.message);
        resp.status(500).send({ message: error.message })
    }
}


const postBook = async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
        console.log('error occured');
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
}




export { getBooks, postBook , deleteBook , updateBook }
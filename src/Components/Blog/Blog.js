import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-4'>
            <h4 className='text-center mb-3'>This is Question Answer part!!</h4>
            <div >
                <h4>01.  Difference between javascript vs node js?</h4>
                <h5 className='text-success'>javascript:</h5>
                <p>
                    javascript is an open-source, interpreted scripting programming language to develop dynamic and web  application.It is generally used on the client-side.JavaScript can be run on any engine.	It is designed to build network-centric applications.
                </p>
                <h5 className='text-primary'>Node JS:</h5>
                <p>  Node JS is cross-platform. open-source JavaScript runtime.It is generally used on the server-side. Node JS is only supported by the V8 engine.It's designed for data-intensive real-time applications that run on several platforms.
                </p>
            </div>
            <div>
                <h4>02.Difference between SQL Vs NO-SQL?</h4>
                <p>

                    SQL databases are relational, and NoSQL databases are non-relational.
                    SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.

                </p>
            </div>
            <div>
                <h4>03.What is the purpose of jwt and how does it work?
                </h4>
                <p>JWT, or JSON Web Token, is an open value that is used to share security information between a client and a server. Each JWT contains an encoded JSON object, which contains a set of claims. JWTs are signed using a cryptographic algorithm to ensure that claims cannot be changed after the token is issued.</p>
                <h6>How does jwt work:</h6>
                <p>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64

                    if decoded, you will get the header, payload, and signature.
                    the header contains the type of token — JWT in this case — and the signing algorithm.
                    The payload contains the claims.his information is typically used by the server to verify that the user has permission to perform the action they are requesting. The signature ensures that the token hasn’t been altered. When the token is used, the receiving party verifies that the header and payload match the signature</p>
            </div>
        </div>
    );
};

export default Blog;
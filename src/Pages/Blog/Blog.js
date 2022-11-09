import React from "react";

const Blog = () => {
  return (
    <div className="w-3/4 mx-auto">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What are the difference between SQL and NoSQL?
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className="w-3/4 mx-auto">SQL</th>
                  <th className="w-3/4 mx-auto">NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                  <td>Non-relational or distributed database system.</td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>
                    These databases have fixed or static or predefined schema
                  </td>
                  <td>
                    or static or predefined schema They have dynamic schema
                  </td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>Vertically Scalable</td>
                  <td>Horizontally scalable</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Follows ACID property</td>
                  <td>
                    Follows CAP(consistency, availability, partition tolerance)
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>
                    Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc
                  </td>
                  <td>
                    Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            A JSON web token(JWT) is JSON Object which is used to securely
            transfer information over the web(between two parties). It can be
            used for an authentication system and can also be used for
            information exchange.The token is mainly composed of header,
            payload, signature. These three parts are separated by dots(.). JWT
            defines the structure of information we are sending from one party
            to the another, and it comes in two forms – Serialized,
            Deserialized.
          </p>
          <p>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
            <br />
            <br />
            A JWT is a string made up of three parts, separated by dots (.), and
            serialized using base64. In the most common serialization format,
            compact serialization, the JWT looks something like this:
            xxxxx.yyyyy.zzzzz.
            <br />
            <br />
            Once decoded, you will get two JSON strings:
            <br />
            The header and the payload.
            <br />
            The signature. <br />
            <br />
            The JOSE (JSON Object Signing and Encryption) header contains the
            type of token — JWT in this case — and the signing algorithm. <br />
            The payload contains the claims. This is displayed as a JSON string,
            usually containing no more than a dozen fields to keep the JWT
            compact. This information is typically used by the server to verify
            that the user has permission to perform the action they are
            requesting. There are no mandatory claims for a JWT, but overlaying
            standards may make claims mandatory. For example, when using JWT as
            bearer access token under OAuth2.0, iss, sub, aud, and exp must be
            present. some are more common than others
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className="w-3/4 mx-auto">Javascript</th>
                  <th className="w-3/4 mx-auto">NodeJS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    Javascript is a programming language
                    <br /> that is used for writing scripts on the website.{" "}
                  </td>
                  <td>NodeJS is a Javascript runtime environment.</td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>Javascript can only be run in the browsers.</td>
                  <td>
                    We can run Javascript outside the browser
                    <br /> with the help of NodeJS
                  </td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>It is basically used on the client-side.</td>
                  <td>It is mostly used on the server-side.</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>
                    Javascript is capable enough <br />
                    to add HTML and play with the DOM.{" "}
                  </td>
                  <td>
                    Nodejs does not have capability <br />
                    to add HTML tags.
                  </td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>
                    Javascript can run in any browser
                    <br /> engine as like JS core in safari and
                    <br /> Spidermonkey in Firefox.
                  </td>
                  <td>
                    V8 is the Javascript engine inside <br />
                    of node.js that parses and runs Javascript.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. <br />
            If NodeJS can process the request without I/O blocking then the
            event loop would itself process the request and sends the response
            back to the client by itself. But, it is possible to process
            multiple requests parallelly using the NodeJS cluster module or
            worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

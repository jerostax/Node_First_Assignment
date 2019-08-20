const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Assignments</title></head>');
    res.write(
      '<body><h1>My greeting text</h1><form action="/create-user" method="POST">Username : <input type="text" name="username" /><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Assignments Users</title></head>');
    res.write(
      '<body><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', chunk => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    })
  }
}

module.exports = requestHandler

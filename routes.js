const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Homepage';
    },
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return 'About page';
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method';
    },
  },

  /* 
    berikut ini merupakan path parameter
    jika  dipanggil curl -X GET http://localhost:5000/hello/dicoding ---> maka akan Hello, dicoding!
    jika fipanggil curl -X GET http://localhost:5000/hello/ ---> maka akan Hello, stranget! (karena defaultnya diberi value 'Stranger')
    tanda 'tanya' (?) menandakan tidak wajib/opsional
  */

  /* 
    query parameter
    curl -X GET http://localhost:5000/hello/dicoding?lang=id
    // output: Hai, dicoding!
    curl -X GET http://localhost:5000/hello/dicoding
    // output: Hello, dicoding!
  */

  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = 'stranger' } = request.params;
      const { lang } = request.query;

      if (lang === 'id') {
        return `Hai, ${name}!`;
      }

      return `Hello, ${name}!`;
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}!`;
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Halaman tidak ditemukan';
    },
  },
];

module.exports = routes;

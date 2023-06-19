import http from 'k6/http';

export default function () {
  http.get('http://localhost:3333/tasklists');

  http.post('http://localhost:3333/tasklists', { title: 'title-test' });
}

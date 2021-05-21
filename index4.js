const { ajax } = rxjs/ajax;

const githubusers = 'http://api.github.com/users?per_page=2';

const users = ajax(githubusers);

const subscribe = users.subscribe(
    res => console.log(res),
    err => console.error(err)
); 
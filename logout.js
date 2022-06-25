import fetch from "node-fetch";

fetch("http://localhost:3000/logout", {
  method: "delete",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NDZlZmI2OS1iYzRmLTQzOGQtOWM0My0zNDAzZmY4NzFlNjQiLCJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjU2MTE5MDA5LCJleHAiOjE2NTYxMjA4MDl9.K4jEi3jj2NAuik8G0GoCf91UWUy6s2u2XV64nl0ek3k",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((json) => Promise.reject(json));
    }
  })
  .then((json) => {
    console.dir(json);
  })
  .catch((err) => console.error(err));
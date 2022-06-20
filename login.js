fetch("http://localhost:3000/private/test", {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlNmQ4NzAzZS05NmM2LTQxZDgtODdiNS0wMzgxYTIzYjhmODMiLCJzdWIiOiI0Iiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjU1NjcyOTkwLCJleHAiOjE2NTU2NzQ3OTB9.FIFPEJsFqCaJFuiF1pm7lM_m0w3Tw58glBAhSXVCXEM",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else if (res.status == "401") {
      throw new Error("Unauthorized Request. Must be signed in.");
    }
  })
  .then((json) => console.dir(json))
  .catch((err) => console.error(err));
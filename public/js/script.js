const btn = document.querySelector('button');
const url = 'http://localhost:3000';
const accessToken =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyZDBiNmJjZC1iZDZkLTQwYjYtOGEwNC0yOWFiOGY2MDQwMzQiLCJlbWFpbCI6ImFsaUBnbWFpbC5jb20iLCJpYXQiOjE2NDc1MTU5MDAsImV4cCI6MTY0NzYwMjMwMH0._OAFBs29CwH7IupcRx1wcriGhTB0uvAJHitAnnvMLiE';
let planId = '';
let userId = '9e89c5c8-2973-4cb2-81a2-1e30b880ff14';
fetch(`${url}/subscription-plan/b7767de7-3e7e-470d-83b7-879b1a315590`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: accessToken,
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    planId = data.id;
  });

btn.addEventListener('click', () => {
  fetch(`${url}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken,
    },
    body: JSON.stringify({
      planId: planId,
      userId: userId,
      isActive: true,
      endDate: '2022-05-23T18:25:43.511Z',
    }),
  })
    .then((res) => {
      console.log(res);
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
    })

    .catch((e) => console.log(e.error));
});

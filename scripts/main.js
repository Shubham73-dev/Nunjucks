import CONFIG from "../settings/config.js";
window.addEventListener('load', bindEvents);

function bindEvents() {
  var promise = fetch(CONFIG.apiUrl);

  promise.then((response) => response.json()).then((data) => {
    data.forEach(user => {
      const section_1 = document.getElementsByClassName('section_1')[0];
      if (user.id % 2 === 0) {
        const userDetailContainer = document.createElement('DIV');
        userDetailContainer.className = 'userDetailContainer'
        section_1.appendChild(userDetailContainer);
        const name = document.createElement('span');
        const userName = document.createElement('span');
        const email = document.createElement('span');
        name.innerText = `Name: ${user.name}`
        userName.innerText = `Username: ${user.username}`
        email.innerText = `email: ${user.email}`
        userDetailContainer.appendChild(name)
        userDetailContainer.appendChild(userName)
        userDetailContainer.appendChild(email)
        // console.log(`Name: ${user.name}, Username: ${user.username}, Email: ${user.email}`);
      } else {
        const oddUserDetailContainer = document.createElement('DIV');
        oddUserDetailContainer.className = 'oddUserDetailContainer'
        section_1.appendChild(oddUserDetailContainer);
        oddUserDetailContainer.innerHTML = "<strong>I'm an odd user</strong>"
      }
      const section_2 = document.getElementsByClassName('section_2')[0];
      var ele = document.createElement('div')
      var ele_2 = document.createElement('div')
      section_2.appendChild(ele)
      section_2.appendChild(ele_2)

      // get address keys and values
      const address = user.address;
      const addressKeys = Object.keys(address);
      const addressValues = Object.values(address);

      // print address keys and values
      ele.innerHTML = `Address of User ${user.id}:`
      addressKeys.map((key, index) => {
        var spanele = document.createElement('span')
        spanele.innerHTML = `${key}`
        section_2.appendChild(ele)
      });

      // check if email ends with .biz
      if (user.email.endsWith('.biz')) {
        console.log(`User ${user.id} email: ${user.email}`);
      }

      // check if city is Aliyaview, Howemouth, or Gwenborough
      const city = user.address.city;
      const zipcode = user.address.zipcode;
      const geo = user.address.geo;
      if (city.includes('Aliyaview') || city.includes('Howemouth') || city.includes('Gwenborough')) {
        console.log(`The Zipcode and Geo of cityname ${city} is: ${zipcode} and ${JSON.stringify(geo)}`);
      }

      // print max 15 letters of catchphrase
      const catchPhrase = user.company.catchPhrase;
      const maxChars = Math.min(catchPhrase.length, 15);
      console.log(`User ${user.id} catchphrase: ${catchPhrase.slice(0, maxChars)}`);
    });
  }
  )
}
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

      // get address keys and values
      const userId = document.createElement('h2')
      userId.innerHTML = `Address details for userid: ${user.id}`
      section_2.appendChild(userId)
      const address = user.address;
      const addressKeys = Object.keys(address);
      const addressValues = Object.values(address);
      addressValues.map((value,index)=>{
        var addEle = document.createElement('div')
        addEle.innerHTML = value;
        section_2.appendChild(addEle)
      })

      // print address keys and values


      // check if email ends with .biz
      if (user.email.endsWith('.biz')) {
        console.log(`User ${user.id} email: ${user.email}`);
      }

      // check if city is Aliyaview, Howemouth, or Gwenborough
      const section_3 = document.getElementsByClassName('section_3')[0];
      const city = user.address.city;
      const zipcode = user.address.zipcode;
      const geo = user.address.geo;
      if (city.includes('Aliyaview') || city.includes('Howemouth') || city.includes('Gwenborough')) {
        var cityEle = document.createElement('div');
        cityEle.className = 'details';
        section_3.appendChild(cityEle)
        cityEle.innerHTML = `The Zipcode and Geo of cityname ${city} is: ${zipcode} and ${JSON.stringify(geo)}`
        // console.log(`The Zipcode and Geo of cityname ${city} is: ${zipcode} and ${JSON.stringify(geo)}`);
      }

      // print max 15 letters of catchphrase
      const section_4 = document.getElementsByClassName('section_4')[0];
      var catchPhraseEle = document.createElement('div')
      catchPhraseEle.className = 'details';
      section_4.appendChild(catchPhraseEle)
      const catchPhrase = user.company.catchPhrase;
      const maxChars = Math.min(catchPhrase.length, 15);
      catchPhraseEle.innerHTML = `User ${user.id} catchphrase: ${catchPhrase.slice(0, maxChars)}`
      // console.log(`User ${user.id} catchphrase: ${catchPhrase.slice(0, maxChars)}`);
    });
  }
  )
}
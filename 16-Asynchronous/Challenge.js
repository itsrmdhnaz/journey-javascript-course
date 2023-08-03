/////////////////////////////////////////////////
// Challenge #1

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
//           <img class="country__img" src="${data.flags.svg}" alt="${
//     data.flags.alt
//   }"/>
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫 ${(
//               +data.population / 1_000_000
//             ).toFixed(1)}</span>people</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.values(data.languages)[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.values(data.currencies)[0].name
//             }</p>
//           </div>
//         </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

//PART 1
/**
 * Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
and a longitude value ('lng') (these are GPS coordinates, examples are in test
data below).
 */
// const whereAmI = function (lat, lng) {
/**
     * Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
promises to get the data. Do not use the 'getJSON' function we created, that
is cheating �
     */
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=your_api_key`)
//     .then(response => {
/**
     * This API allows you to make only 3 requests per second. If you reload fast, you
will get this error with code 403. This is an error with the request. Remember,
fetch() does not reject the promise in this case. So create an error to reject
the promise yourself, with a meaningful error message   
     */
//   if (!response)
//     throw new Error(
//       `Too many requests ${response.status}, please wait for the response`
//     );
//   return response.json();
// })
// .then(data => {
/**
    * Once you have the data, take a look at it in the console to see all the attributes
    that you received about the provided location. Then, using this data, log a
    message like this to the console: “You are in Berlin, Germany”
     */
//   const text = `You are in ${data.city}, ${data.country}`;
//   console.log(text);

//Part 2
/**
         * Now it's time to use the received data to render a country. So take the relevant
        attribute from the geocoding API result, and plug it into the countries API that
        we have been using.
        */
//   return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
// })
// .then(response => {
//   if (!response.ok)
//     throw new Error(`Country not found: (${response.status})`);
//   return response.json();
// })
// .then(data => renderCountry(data[0]))
/**
     * Chain a .catch method to the end of the promise chain and log errors to the
    console

    * Render the country and catch any errors, just like we have done in the last
    lecture (you can even copy this code, no need to type the same code)
    */
//     .catch(err => {
//       console.error(`${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

/**
 * Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
 */

// whereAmI('52.508', '13.381');
// whereAmI('19.037', '72.873');
// whereAmI('-33.933', '18.474');
// end of Challenge #1
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Challenge #2

//PART 1

/**
 * Create a function 'createImage' which receives 'imgPath' as an input.
This function returns a promise which creates a new image (use
document.createElement('img')) and sets the .src attribute to the
provided image path
 */

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise((res, rej) => {
    const img = document.createElement('img');
    img.src = imgPath;

    /**
 * When the image is done loading, append it to the DOM element with the
'images' class, and resolve the promise. The fulfilled value should be the
image element itself. In case there is an error loading the image (listen for
the'error' event), reject the promise
 */
    img.addEventListener('load', () => {
      imgContainer.append(img);
      res(img);
    });

    img.addEventListener('error', () => {
      rej(new Error(`Image not found!`));
    });
  });
};

// /**
//  * Consume the promise using .then and also add an error handler
//  */
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log(`Image 1 loaded`);
//     /**
//  * After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
//  */
//     return wait(2);
//   })
//   /**
//  * After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element
// returned by the 'createImage' promise to hide the current image. You will
// need a global variable for that �)
//  */
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log(`Image 2 loaded`);
//     /**
//      * After the second image has loaded, pause execution for 2 seconds again
//      */
//     return wait(2);
//   })
//   .then(() => {
//     /**
//      * After the 2 seconds have passed, hide the current image
//      */
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// end of Challenge #2
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Challenge #3

//PART 1

/**
 * Write an async function 'loadNPause' that recreates Challenge #2, this time
using async/await (only the part where the promise is consumed, reuse the
'createImage' function from before)
 */
const loadNPause = async function () {
  try {
    let img1 = await createImage('img/img-1.jpg');
    console.log(`Log image 1 loaded`);
    await wait(2);
    img1.style.display = 'none';

    img1 = await createImage('img/img-2.jpg');
    console.log(`Log image 2 loaded`);
    await wait(2);
    img1.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

/**
 * Compare the two versions, think about the big differences, and see which one
you like more
 Don't forget to test the error handler, and to set the network speed to “Fast 3G”
in the dev tools Network tab
 */
// loadNPause();

// Part 2

/**
 * Create an async function 'loadAll' that receives an array of image paths
'imgArr'
 */
const loadAll = async function (imgArr) {
  try {
    /**
     * Use .map to loop over the array, to load all the images with the
  'createImage' function (call the resulting array 'imgs')
     */
    const imgs = imgArr.map(async img => await createImage(img));
    //Check out the 'imgs' array in the console! Is it like you expected?
    console.log(imgs);

    const imgEl = await Promise.all(imgs);
    console.log(imgEl);

    imgEl.forEach(img => img.classList.add('parallel'));
    /**
     * Use a promise combinator function to actually get the images from the array �
     */
  } catch (err) {
    console.log(err);
  }
};

/**
 * Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']. To test, turn off the 'loadNPause' function
 */
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// end of Challenge #3
/////////////////////////////////////////////////

# ID Verification Test

An attempt to make a digital camera reading using React.


Node used: 16.13.2
React version: 18.2.0 (woohoo!)
Bootstrapped with create-react-app

## Run project

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

(yes, i left it untouched, at least this part only)

### `yarn testsuite`

Runs the testsuite browser window. You need to install devDependencies for that.

## A bit of explanation

Since the API was a fake (sad-emoji here) i simulated a fake too. It's just an interval set which takes photos each 2 seconds. If the outcome is valid, it prints it. If not, it just prints it red.
I have commentaries over the important parts of the code. For example i tried to use styled components in Webcam, which i was not able to make it work along redux state vars, so i opted
to use the old-style style{{}} prop. 


I tried to be solid with the inVision styles along styled-components. I rarely used it since i was using MUI all the time along with a created theme. It interesting because it sets random classes and it's
far hardest to check any prop when you inspect from a navigator. I enjoyed, to be honest.

## Is this your best?

Maybe not but i want to think i gave it. Since i was always alone in my previous companies i learned all about googling, asking, and trying to apply good methodologies. But one thing is for certain: i am really not sure what is certain. What i mean: maybe a thing that i am applying since i was born was a complete failure and i had no one to tell me in the right moment.

If you find something like this i deeply apologize. I am ALWAYS open to listen and learn how to do it better.

## Hey, why did you use redux-saga?

It was more sort of a personal challenge than everything. I wanted to test myself using also Typescript, which i never used together with redux-saga. In these situations in which we have multiple calls and handlings, Sagas shine, so i opted for using sagas. Thunks tend to have a lot of inner callbacks making code unreadable the more stuff they do.

It is so easy to handle some new requests or states incoming multiple times with the use of saga helpers, such as takeEvery(sort like a thunk) or takeLatest(if an action is detonated multiple times it takes only the latest, ensuring proper responses).

I often use it whenever i have the possibility because i think its the best guideline for async stuff, maintainability and performance wise out there. Using generators functions makes our memory clean as a brand new mirror.

## What about testing?

I used cypress

## WTF is Cypress

The alternative to Selenium. What it matters that the product is working, so i tried to add a basic flux test. Its an End to End type.

## How do i run it?

With `yarn testsuite`. Its browser based. You click on "Specs" and run the only one.

## Used libraries

[redux](https://es.redux.js.org/).
[react-redux](https://react-redux.js.org/).
[redux-saga](https://redux-saga.js.org).
[axios](https://axios-http.com/es/docs/intro)
[react-webcam](httpshttps://www.npmjs.com/package/react-webcam)


## Credits

To wikipedia-commons for the Ajax metal loader gif.
To my dog for cheering me up whenever i was stuck with the project.
To the cookie i ate when i was writing this.
To favicon.cc for the favicon
And you, for your patience.
![TravelHack Logo](./src/images/travelhack_logo.png "TraveHhack Logo")

# TravelHack - an EG Hackathon
This is the repo for the informational website used during the hackathon. It contains information on things like who the team are & what tech they're good at. The goal for this site was to be as re-usable as possible, which is another reason why we used React.js. 
You can see how the website looks in it's current state [here](https://witaylor.github.io/travelhack-info).

Before you make any changes to this website, please **fork or download it** and don't change anything on this repo.

## How to update it for your hackathon
The feedback on this website was that it was *very* useful. We wanted to give you the opportunity to use it too, but realised that not everyone is going to know how React works (or want to learn it) so we wanted to make it as easy as possible for you to re-use. For this reason, all essential information that may be changed, such as the list of volunteers, has been extracted out into a separate JavaScript file - [constants.js](./src/constants.js).

Here you can update the list of events and timings, and add information on the team. The structure of each thing is quite strict, stuff may break or behave strangely if you don't keep the same structure. My goal was to go through and make everything as robust as possible, but I ran out of time. Here are how things are structured, in order of how they appear in `constants.js`:

**Note: All date/time strings follow the same pattern: "Month Date, Year hh:mm:ss"** *(for example, "December 31, 2019 23:59:59")*

### Icebreakers
```javascript
{
    title: "Icebreaker Title",
    body: "Icebreaker decription "
}
```

### The Event List
*A list of event objects.*
```javascript
[
    {
        name: "Event Name",
        time: "Time String, e.g. January 1, 2019 12:34:56"
    }
]
```

### The Team Members
```javascript
{
    name: "Jon Snow",
    imageUrl: 'https://travelaid-volunteer-photos.s3.eu-west-2.amazonaws.com/jonsnow',
    bio: "I'm Ned Stark’s bastard son. Since Catelyn is not my mother, I am not a proper member of the " +
    "Stark family, and often feel like an outsider. I believe I am a highly capable swordsman and thinker, " +
    "with a knack for piercing observations.",
    languages: [],
    otherSkills: []
}
```

This will be read in and auto-formatted. The name, imageUrl and bio is straight forward. Languages will be displayed as "I can help with X, Y and Z" and other skills will be a new line, and read "I'm also good at A and B". Feel free not to use these but, if you're not changing how it's read in, make sure there's a completely empty array, e.g. `languages: []`, otherwise things will break. 
The same structure is followed for the recruiters, volunteers and judges (and other team lists that you add).

### Changing the colour scheme 
We've tried to stay true to Expedia Groups colours but, if you want to change them, it's easy to do so! Just go to [App.css](./src/App.css) and change the colour variables to whatever you like - just remember to make sure it works in both the light & dark themes.

## Still confused?
If you want to make use of the website but still aren't sure, [reach out to me over email](mailto:will_taylor13@outlook.com).



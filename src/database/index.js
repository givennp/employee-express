const employeeDB = [
  {
    id: 1,
    full_name: "John Doe",
    occupation: "Software Engineer",
    gender: "Male"
  },
  {
    id: 2,
    full_name: "Jane Doe",
    occupation: "Digital Marketer",
    gender: "Female"
  },
  {
    id: 3,
    full_name: "Seto Siseto",
    occupation: "CEO",
    gender: "Male"
  },
]

const userDB = [
  {
    username: "seto",
    password: "password"
  },
  {
    username: "bill",
    password: "password"
  },
  {
    username: "mark",
    password: "password"
  },
]

const posts = [
  {
    userId: 1,
    username: "mamang",
    location: "rumah",
    caption: "dafuq",
    numbers_of_likes: 0,
    image_url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Jerinx.png",
    id: 1,
    avatar: ""
  },
  {
    userId: 1,
    username: "cublay",
    location: "JOGLO",
    caption: "i love u mr.bean",
    numbers_of_likes: 0,
    image_url:
      "https://cdn1-production-images-kly.akamaized.net/c-Auze6NB2I_11-9kfFcBz988Zg=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/840223/original/012309700_1427772429-rowan-atkinson-150331.jpg",
    id: 2,
    avatar: ""
  },
];


module.exports = {
  employeeDB,
  userDB,
  posts
}
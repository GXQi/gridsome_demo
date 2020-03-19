// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // const { data } = await axios.get('http://172.0.0.1:8080/static/posts.json')
    // var data = {
    //   "status": 0,
    //   "data": [
    //     {
    //       "id": "123",
    //       "title": "GXQi1"
    //     },
    //     {
    //       "id": "124",
    //       "title": "GXQi2"
    //     },
    //     {
    //       "id": "125",
    //       "title": "GXQi3"
    //     },
    //     {
    //       "id": "126",
    //       "title": "GXQi4"
    //     }
    //   ]
    // }
    // const collection = addCollection({
    //   typeName: 'BlogPosts'
    // })

    // for (const item of data.data) {
    //   collection.addNode({
    //     id: item.id,
    //     title: item.title
    //   })
    // }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}

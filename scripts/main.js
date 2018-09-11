var app = new Vue({
  el: '#app',
  data: {
    filters: [
      { name: 'medium', active: false },
      { name: 'quora', active: false },
      { name: 'both', active: true }
    ],
    posts: [] // posts will be sorted by timestamp prior to render,
  },
  methods: {
    selectFilter: function (event) {
      event.preventDefault()
      this.filters = this.filters.map(x => Object.assign(x, { active: x.name === event.target.id }))
    }
  },
  computed: {
    rankedAndFilteredPosts: function () {
      let filter = this.filters.find(x => x.active).name
      console.log(filter)
      return Object.assign([], this.posts)
        .filter(x => filter === 'both' ? true : x.source === filter)
    }
  }
})

console.log(app.data)

const url = 'https://api-apeast.graphcms.com/v1/cjkv3msuf0bg901aq8qzs7ea4/master'

const query = `
{
  posts(
    orderBy: timestamp_DESC
  ) {
    title
    timestamp
    source
    link
  }
}
`

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    query: query
  })
})
  .then(r => r.json())
  .then(data => { app.posts = data.data.posts })

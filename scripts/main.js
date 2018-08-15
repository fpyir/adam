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
        .sort((x, y) => {
          let xt = new Date(x.timestamp)
          let yt = new Date(y.timestamp)
          return yt > xt ? -1 : yt < xt ? 1 : 0
        })
    }
  },
  created: function () {
    let posts = [
      {
        source: 'quora',
        title: 'Is it true that Python is harder to learn than Go? Fifth',
        intro: 'I find it really, really, really hard to believe that anyone with no programming knowledge could find Go easier to learn than Python.\nLike, really hard.',
        link: 'https://www.quora.com/Is-it-true-that-Python-is-harder-to-learn-than-Go',
        timestamp: (new Date(2018, 5, 1)).getTime()
      },
      {
        source: 'quora',
        title: 'Is it true that Python is harder to learn than Go? Fourth',
        intro: 'If someone wins an argument, they are happy as hell. They were right. The other person was wrong. They generally do not get annoyed at anyone that was arguing with them - indeed, will often like them more than before - because they won.\nIf they lose the argument, the other person is arrogant. They’re foolish. They’re clearly not seeing it the right',
        link: 'https://www.quora.com/Is-it-true-that-Python-is-harder-to-learn-than-Go',
        timestamp: (new Date(2018, 4, 1)).getTime()
      },
      {
        source: 'quora',
        title: 'Is it true that Python is harder to learn than Go? Third',
        intro: 'I find it really, really, really hard to believe that anyone with no programming knowledge could find Go easier to learn than Python.\nLike, really hard.',
        link: 'https://www.quora.com/Is-it-true-that-Python-is-harder-to-learn-than-Go',
        timestamp: (new Date(2018, 3, 1)).getTime()
      },
      {
        source: 'medium',
        title: 'Is it true that Python is harder to learn than Go? Second',
        intro: 'I find it really, really, really hard to believe that anyone with no programming knowledge could find Go easier to learn than Python.\nLike, really hard.',
        link: 'https://www.quora.com/Is-it-true-that-Python-is-harder-to-learn-than-Go',
        timestamp: (new Date(2018, 2, 1)).getTime()
      },
      {
        source: 'medium',
        title: 'Is it true that Python is harder to learn than Go? First',
        intro: 'I find it really, really, really hard to believe that anyone with no programming knowledge could find Go easier to learn than Python.\nLike, really hard.',
        link: 'https://www.quora.com/Is-it-true-that-Python-is-harder-to-learn-than-Go',
        timestamp: (new Date(2018, 1, 1)).getTime()
      }
    ]
    posts.forEach(x => { x.intro = x.intro.replace('\n', '\n\n') })
    this.posts = posts
  }
})

console.log(app.data)

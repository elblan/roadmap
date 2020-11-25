import Vue from 'vue'

export default Vue.observable({
  lists: {
    backlog: [
      {
        name: 'Firebase Authentication',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        votes: 3,
        id: 0
      },
      {
        name: 'Settings',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        votes: 0,
        id: 1
      },
      {
        name: 'Voter verification',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        votes: 2,
        id: 2
      }
    ],
    planned: [
      {
        name: 'Add and Manage description',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        votes: 5,
        id: 3
      },
      {
        name: 'Vote system',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        votes: 12,
        id: 4
      }
    ],
    inProgress: [
      {
        name: 'Expand list',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        votes: 0,
        id: 5
      },
      {
        name: 'Card layout',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        votes: 9,
        id: 6
      }
    ],
    done: [
      {
        name: 'App foundations',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        votes: 0,
        id: 7
      },
      {
        name: 'Better component system',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
        votes: 0,
        id: 8
      }
    ]
  }
})

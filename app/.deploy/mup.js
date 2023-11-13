module.exports = {
  servers: {
    one: {
      host: '146.190.160.80',
      username: 'root',
      password: 'ics314FP'
    }
  },

  app: {
    name: 'manoa-campus-cravings',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: 'http://146.190.160.80',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      image: 'momenysr/meteor:root',
    },

    enableUploadProgressBar: true
  },

  mongo: {
    version: '5.0.5',
    servers: {
      one: {}
    }
  },
};

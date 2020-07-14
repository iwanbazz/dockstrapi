module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env(
          'DATABASE_HOST',
          'ec2-54-211-210-149.compute-1.amazonaws.com',
        ),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'dbt6bq99k206pc'),
        username: env('DATABASE_USERNAME', 'zhfimwyvqhohsr'),
        password: env(
          'DATABASE_PASSWORD',
          '143d36c75f2054e934f2613d91b2df2170c3256174cd69ffb6d6e7b7c8315b03',
        ),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {},
    },
  },
})

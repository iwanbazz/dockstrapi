module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DATABASE_HOST", "34.87.165.65"),
        srv: env.bool("DATABASE_SRV", false),
        port: env.int("DATABASE_PORT", 30144),
        database: env("DATABASE_NAME", "strapi"),
        username: env("DATABASE_USERNAME", ""),
        password: env("DATABASE_PASSWORD", ""),
      },
      options: {
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  },
});

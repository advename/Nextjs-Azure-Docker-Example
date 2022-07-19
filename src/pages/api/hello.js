// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "John Do",
    /**
     * Remember - Server side are runtime environment variables
     * Don't get confused between runtime variables here, that
     * you'd expect during build time which could be different!
     */
    server_env: process.env.APPSETTING_SERVER_ENV,
  });
}

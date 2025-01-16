/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
}

export default nextConfig

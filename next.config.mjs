import { createMDX } from 'fumadocs-mdx/next'
import path from 'path'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
    turbopack: {
        root: path.resolve('.')
    },
    serverExternalPackages: ['@takumi-rs/image-response'],
    reactStrictMode: true
}

export default withMDX(config)

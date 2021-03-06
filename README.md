# OAuth Example

This is a simple OAuth example, built with API routes in Next.js.

## Demo

A demo has been deployed here: [next-oauth-example.sammagee.me](https://next-oauth-example.sammagee.me)

## Usage

```bash
cp .env.local.example .env.local
```

[Create a new OAuth app on GitHub](https://github.com/settings/applications/new). Copy the Client ID and Secret
and add them to your `.env.local` file

```bash
# If pnpm is not installed, run `npm install -g pnpm`
pnpm install && pnpm dev
```

## Screenshots

![Screenshot of logged out state](screenshots/logged_out.png)
![Screenshot of logged in state](screenshots/logged_in.png)

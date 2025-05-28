# SlackClone Testing Variant

Drop these files into your `projects/SlackClone/` folder.

## What it Does
- Lets you toggle between User A and B.
- Connects Stream client per user via WebSocket.
- Renders ChannelList sorted by `last_message_at` and `unread_count`.

## Setup Instructions
1. Replace `YOUR_STREAM_API_KEY` with your actual key.
2. Replace `USER_A_DEV_TOKEN` and `USER_B_DEV_TOKEN` with actual dev tokens.
3. Import and render `TestWrapper` from your main `App.tsx` (for test mode only).
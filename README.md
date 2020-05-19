# Execute Microsoft Teams shortcuts from Node.js via applescript

```
npm i msteams-node-applescript-shortcuts@next
```

## Usage

```typescript
import { MeetingsAndCalls } from 'msteams-node-applescript-shortcuts';

(async () => {
  await MeetingsAndCalls.mute();
})();
```
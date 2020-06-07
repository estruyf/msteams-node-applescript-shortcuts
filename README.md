# Execute Microsoft Teams shortcuts from Node.js via applescript

```
npm i msteams-node-applescript-shortcuts
```

## Usage

```typescript
import { MeetingsAndCalls } from 'msteams-node-applescript-shortcuts';

(async () => {
  await MeetingsAndCalls.mute(true);
})();
```

## Commands

All commands accept the following arguments:

- *Reactivate* (boolean - default: false): Reactivates the original application. If this is true, it will open Microsoft Teams, run the shortcut, and reactivates the original appliction again.

### Accept

Accept a call coming in.

```typescript
await MeetingsAndCalls.accept(true);
```

### Decline

Decline a call coming in.

```typescript
await MeetingsAndCalls.decline(true);
```

### Mute

Toggles your microphone (mute/unmute) in a call/meeting

```typescript
await MeetingsAndCalls.mute(true);
```

### Camera

Toggles your camera in a call/meeting

```typescript
await MeetingsAndCalls.camera(true);
```


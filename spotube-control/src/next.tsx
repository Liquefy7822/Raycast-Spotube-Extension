import { buildScriptEnsuringSpotifyIsRunning, runAppleScriptSilently } from "./utils";
import { showNextTrackNotification } from "./trackNotification";

export default async () => {
  const script = buildScriptEnsuringSpotubeIsRunning(`next track`);
  await runAppleScriptSilently(script);
  await showNextTrackNotification();
};

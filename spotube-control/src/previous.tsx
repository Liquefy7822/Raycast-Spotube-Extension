import { buildScriptEnsuringSpotubeIsRunning, runAppleScriptSilently } from "./utils";
import { showPreviousTrackNotification } from "./trackNotification";

export default async () => {
  const script = buildScriptEnsuringSpotubeIsRunning("previous track");
  await runAppleScriptSilently(script);
  await showPreviousTrackNotification();
};

import { buildScriptEnsuringSpotubeIsRunning, runAppleScriptSilently } from "./utils";

export default async () => {
  const script = buildScriptEnsuringSpotubeIsRunning("playpause");
  await runAppleScriptSilently(script);
};

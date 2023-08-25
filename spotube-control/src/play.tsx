import { buildScriptEnsuringSpotubeIsRunning, runAppleScriptSilently } from "./utils";
export default async () => {
  const script = buildScriptEnsuringSpotubeIsRunning(`play`);
  await runAppleScriptSilently(script);
};

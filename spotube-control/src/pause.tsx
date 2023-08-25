import { buildScriptEnsuringSpotubeIsRunning, runAppleScriptSilently } from "./utils";

export default async () => {
  const script = buildScriptEnsuringSpotubeIsRunning("pause");
  await runAppleScriptSilently(script);
};

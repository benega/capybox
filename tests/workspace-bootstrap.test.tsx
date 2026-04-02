import { describe, expect, it } from "vitest";

import { createBootstrapQuizState, INITIAL_SESSION_PHASE, POC_QUESTION_COUNT } from "@capybox/game-engine";
import { DEFAULT_ROOM_CODE, readPublicCapyboxEnv } from "@capybox/services";
import { SURFACE_LABELS, SURFACE_ROLES } from "@capybox/types";

import { metadata as mobileMetadata } from "../apps/mobile/app/layout";
import mobileManifest from "../apps/mobile/app/manifest";
import MobilePage from "../apps/mobile/app/page";
import { metadata as tvMetadata } from "../apps/tv/app/layout";
import tvManifest from "../apps/tv/app/manifest";
import TvPage from "../apps/tv/app/page";

describe("workspace bootstrap", () => {
  it("resolves shared package boundaries through the workspace", () => {
    expect(SURFACE_ROLES).toEqual(["tv", "mobile"]);
    expect(SURFACE_LABELS.tv).toContain("TV");
    expect(POC_QUESTION_COUNT).toBe(5);
    expect(INITIAL_SESSION_PHASE).toBe("waiting");
    expect(createBootstrapQuizState("ROOM42")).toEqual({
      roomCode: "ROOM42",
      phase: "waiting",
      questionCount: 5
    });
  });

  it("keeps env defaults stable for both surfaces", () => {
    const env = readPublicCapyboxEnv({});

    expect(env.roomCode).toBe(DEFAULT_ROOM_CODE);
    expect(env.missingKeys.length).toBe(2);
  });

  it("scaffolds both Next.js surfaces with metadata, manifests, and root pages", () => {
    expect(tvMetadata.title).toBe("Capybox TV");
    expect(mobileMetadata.title).toBe("Capybox Mobile");
    expect(tvManifest().display).toBe("standalone");
    expect(mobileManifest().display).toBe("standalone");
    expect(TvPage()).toBeTruthy();
    expect(MobilePage()).toBeTruthy();
  });
});

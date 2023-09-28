import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import Box from "@mui/material/Box";

import { InteractiveDiceRoll } from "../dice/InteractiveDiceRoll";
import { DiceRollControls } from "../controls/DiceRollControls";
import environment from "../environment.hdr";
import { AudioListenerProvider } from "../audio/AudioListenerProvider";
import { Tray } from "./Tray";
import { useDebugStore } from "../debug/store";
import { TraySuspense } from "./TraySuspense";
import { PreviewDiceRoll } from "../dice/PreviewDiceRoll";

/** Dice tray that controls the dice roll store */
export function InteractiveTray() {
  const allowOrbit = useDebugStore((state) => state.allowOrbit);

  return (
    <Box
      component="div"
      borderRadius={1}
      height="100vh"
      width="calc(100vh / 2)"
      overflow="hidden"
      position="relative"
      id="interactive-tray"
      sx={{
        "& canvas": {
          touchAction: "manipulation",
          userSelect: "none",
        },
      }}
    >
      <TraySuspense>
        <Canvas frameloop="demand">
          <AudioListenerProvider>
            <Environment files={environment} />
            <ContactShadows
              resolution={256}
              scale={[1, 2]}
              position={[-0.002, 0, -0.005]}
              blur={1}
              opacity={0.75}
              far={1}
              color="#1A2018"
            />
            <Tray />
            <PreviewDiceRoll />
            <InteractiveDiceRoll />
            <PerspectiveCamera
              makeDefault
              fov={27.7}
              position={[0, 4.25, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            {allowOrbit && <OrbitControls />}
          </AudioListenerProvider>
        </Canvas>
      </TraySuspense>
      <DiceRollControls />
    </Box>
  );
}

import { useTexture } from "@react-three/drei";

import albedo from "./albedo.jpg";
import orm from "./orm.jpg";
import normal from "./normal.jpg";
import { gltfTexture } from "../../helpers/gltfTexture";

export function T2K1Material(
  props: JSX.IntrinsicElements["meshPhysicalMaterial"]
) {
  const [albedoMap, ormMap, normalMap] = useTexture(
    [albedo, orm, normal],
    (textures) => gltfTexture(textures, ["SRGB", "LINEAR", "LINEAR"])
  );

  return (
    <meshPhysicalMaterial
      map={albedoMap}
      aoMap={ormMap}
      metalnessMap={ormMap}
      roughnessMap={ormMap}
      normalMap={normalMap}
      clearcoat={0.2}
      clearcoatRoughness={2}
      {...props}
    />
  );
}

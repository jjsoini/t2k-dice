/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import glb from "./d100.glb";

type GLTFResult = GLTF & {
  nodes: {
    d100: THREE.Mesh;
  };
  materials: {};
};

export const D100 = React.forwardRef<
  THREE.Group,
  JSX.IntrinsicElements["group"]
>(({ children, ...props }, ref) => {
  const { nodes } = useGLTF(glb) as unknown as GLTFResult;
  return (
    <group ref={ref} {...props} scale={0.1} dispose={null}>
      <group name="dice">
        <mesh
          name="d100"
          castShadow
          receiveShadow
          geometry={nodes.d100.geometry}
          material={nodes.d100.material}
        >
          {children}
          <group
            name="100_locator_00"
            position={[0.4, 0.42, -0.56]}
            rotation={[2.21, 0.4, -2.65]}
          />
          <group
            name="100_locator_10"
            position={[-0.7, -0.37, -0.22]}
            rotation={[1.27, 0.68, 2]}
          />
          <group
            name="100_locator_20"
            position={[0.01, 0.42, 0.69]}
            rotation={[0.83, 0.01, 0]}
          />
          <group
            name="100_locator_30"
            position={[0.69, -0.37, -0.23]}
            rotation={[1.33, -0.7, -1.97]}
          />
          <group
            name="100_locator_40"
            position={[-0.41, 0.42, -0.55]}
            rotation={[2.2, -0.42, 2.65]}
          />
          <group
            name="100_locator_50"
            position={[0.44, -0.37, 0.59]}
            rotation={[2.22, -0.39, -0.49]}
          />
          <group
            name="100_locator_60"
            position={[-0.65, 0.42, 0.22]}
            rotation={[1.28, -0.69, 1.15]}
          />
          <group
            name="100_locator_70"
            position={[-0.01, -0.37, -0.73]}
            rotation={[0.83, -0.02, -Math.PI]}
          />
          <group
            name="100_locator_80"
            position={[0.66, 0.42, 0.21]}
            rotation={[1.31, 0.7, -1.17]}
          />
          <group
            name="100_locator_90"
            position={[-0.42, -0.37, 0.6]}
            rotation={[2.19, 0.43, 0.5]}
          />
        </mesh>
      </group>
    </group>
  );
});

useGLTF.preload(glb);

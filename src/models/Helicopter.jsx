
import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from '../assets/3d/heli.glb'
import { useFrame } from "@react-three/fiber";


const Helicopter = ({...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    
    actions["Take 001"].play();
    
  }, [actions]);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    group.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    // Check if the bird reached a certain endpoint relative to the camera
    if (group.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      group.current.rotation.y = Math.PI;
    } else if (group.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      group.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (group.current.rotation.y === 0) {
      // Moving forward
      group.current.position.x += 0.01;
      group.current.position.z -= 0.01;
    } else {
      // Moving backward
      group.current.position.x -= 0.01;
      group.current.position.z += 0.01;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="a6dc614eef6a41ae9558a5c6ccd15e94fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Nody"
                  position={[0.00001938, 126.51744843, 89.70824432]}
                  rotation={[Math.PI / 2, -8.6e-7, -Math.PI / 2]}
                  scale={-1.52716994}
                >
                  <group name="Object_5" position={[0, 2e-8, 0.02849057]}>
                    <mesh
                      name="Nody_03_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_03_-_Default_0"].geometry}
                      material={materials["03_-_Default"]}
                    />
                    <mesh
                      name="Nody_08_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_08_-_Default_0"].geometry}
                      material={materials["08_-_Default"]}
                    />
                    <mesh
                      name="Nody_09_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_09_-_Default_0"].geometry}
                      material={materials["09_-_Default"]}
                    />
                    <mesh
                      name="Nody_09_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_09_-_Default_0_1"].geometry}
                      material={materials["09_-_Default"]}
                    />
                    <mesh
                      name="Nody_14_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_14_-_Default_0"].geometry}
                      material={materials["14_-_Default"]}
                    />
                    <mesh
                      name="Nody_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_01_-_Default_0"].geometry}
                      material={materials["01_-_Default"]}
                    />
                    <mesh
                      name="Nody_02_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_02_-_Default_0"].geometry}
                      material={materials["02_-_Default"]}
                    />
                    <mesh
                      name="Nody_07_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_07_-_Default_0"].geometry}
                      material={materials["07_-_Default"]}
                    />
                    <mesh
                      name="Nody_08_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_08_-_Default_0_1"].geometry}
                      material={materials["08_-_Default_0"]}
                    />
                    <mesh
                      name="Nody_16_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_16_-_Default_0"].geometry}
                      material={materials["16_-_Default"]}
                    />
                    <mesh
                      name="Nody_10_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_10_-_Default_0"].geometry}
                      material={materials["10_-_Default"]}
                    />
                    <mesh
                      name="Nody_22_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_22_-_Default_0"].geometry}
                      material={materials["22_-_Default"]}
                    />
                    <mesh
                      name="Nody_12_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_12_-_Default_0"].geometry}
                      material={materials["12_-_Default"]}
                    />
                    <mesh
                      name="Nody_12_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_12_-_Default_0_1"].geometry}
                      material={materials["12_-_Default"]}
                    />
                    <mesh
                      name="Nody_12_-_Default_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_12_-_Default_0_2"].geometry}
                      material={materials["12_-_Default"]}
                    />
                    <mesh
                      name="Nody_18_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_18_-_Default_0"].geometry}
                      material={materials["18_-_Default"]}
                    />
                    <mesh
                      name="Nody_18_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_18_-_Default_0_1"].geometry}
                      material={materials["18_-_Default"]}
                    />
                    <mesh
                      name="Nody_18_-_Default_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_18_-_Default_0_2"].geometry}
                      material={materials["18_-_Default"]}
                    />
                    <mesh
                      name="Nody_Material_#59_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_Material_#59_0"].geometry}
                      material={materials.Material_59}
                    />
                    <mesh
                      name="Nody_06_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_06_-_Default_0"].geometry}
                      material={materials["06_-_Default"]}
                    />
                    <mesh
                      name="Nody_17_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_17_-_Default_0"].geometry}
                      material={materials["17_-_Default"]}
                    />
                    <mesh
                      name="Nody_17_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_17_-_Default_0_1"].geometry}
                      material={materials["17_-_Default"]}
                    />
                    <mesh
                      name="Nody_17_-_Default_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_17_-_Default_0_2"].geometry}
                      material={materials["17_-_Default"]}
                    />
                    <mesh
                      name="Nody_24_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_24_-_Default_0"].geometry}
                      material={materials["24_-_Default"]}
                    />
                    <mesh
                      name="Nody_24_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_24_-_Default_0_1"].geometry}
                      material={materials["24_-_Default"]}
                    />
                    <mesh
                      name="Nody_24_-_Default_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_24_-_Default_0_2"].geometry}
                      material={materials["24_-_Default"]}
                    />
                    <mesh
                      name="Nody_13_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_13_-_Default_0"].geometry}
                      material={materials["13_-_Default"]}
                    />
                    <mesh
                      name="Nody_15_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_15_-_Default_0"].geometry}
                      material={materials["15_-_Default"]}
                    />
                    <mesh
                      name="Nody_500-D_Negro_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_500-D_Negro_0"].geometry}
                      material={materials["500-D_Negro"]}
                    />
                    <mesh
                      name="Nody_Material_#226_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_Material_#226_0"].geometry}
                      material={materials.Material_226}
                    />
                    <mesh
                      name="Nody_04_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_04_-_Default_0"].geometry}
                      material={materials["04_-_Default"]}
                    />
                    <mesh
                      name="Nody_6656_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Nody_6656_0.geometry}
                      material={materials["6656"]}
                    />
                    <mesh
                      name="Nody_6656_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Nody_6656_0_1.geometry}
                      material={materials["6656"]}
                    />
                    <mesh
                      name="Nody_20_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_20_-_Default_0"].geometry}
                      material={materials["20_-_Default"]}
                    />
                    <mesh
                      name="Nody_13_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_13_-_Default_0_1"].geometry}
                      material={materials["13_-_Default_0"]}
                    />
                    <mesh
                      name="Nody_21_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_21_-_Default_0"].geometry}
                      material={materials["21_-_Default"]}
                    />
                    <mesh
                      name="Nody_554545_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Nody_554545_0.geometry}
                      material={materials["554545"]}
                    />
                    <mesh
                      name="Nody_01_-_123_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_01_-_123_0"].geometry}
                      material={materials["01_-_123"]}
                    />
                    <mesh
                      name="Nody_Material_#738_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_Material_#738_0"].geometry}
                      material={materials.Material_738}
                    />
                    <mesh
                      name="Nody_Material_#740_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_Material_#740_0"].geometry}
                      material={materials.Material_740}
                    />
                    <mesh
                      name="Nody_09_-_564_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_09_-_564_0"].geometry}
                      material={materials["09_-_564"]}
                    />
                    <mesh
                      name="Nody_07_-_Default_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_07_-_Default_0_1"].geometry}
                      material={materials["07_-_Default_0"]}
                    />
                    <mesh
                      name="Nody_08_-_5445467_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Nody_08_-_5445467_0"].geometry}
                      material={materials["08_-_5445467"]}
                    />
                    <mesh
                      name="Nody_Color_009_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Nody_Color_009_0.geometry}
                      material={materials.Color_009}
                    />
                    <mesh
                      name="Nody_material_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Nody_material_0.geometry}
                      material={materials.material}
                    />
                    <mesh
                      name="Nody_Color_007_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Nody_Color_007_0.geometry}
                      material={materials.Color_007}
                    />
                    <mesh
                      name="Nody_material_0_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Nody_material_0_0.geometry}
                      material={materials.material_0}
                    />
                    <mesh
                      name="Nody_Airspeed_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Nody_Airspeed_0.geometry}
                      material={materials.Airspeed}
                    />
                  </group>
                  <group
                    name="Rot2"
                    position={[-308.35925293, -0.00002465, 33.9417572]}
                    rotation={[-7.8e-7, 0, 0]}
                  >
                    <group
                      name="Object_55"
                      position={[308.35928345, 0.00004727, -33.91327286]}
                    >
                      <mesh
                        name="Rot2_08_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Rot2_08_-_Default_0"].geometry}
                        material={materials["08_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Rot"
                    position={[-73.63394165, 6.84444904, 32.22415924]}
                    rotation={[-7.8e-7, 0, 0]}
                  >
                    <group
                      name="Object_58"
                      position={[73.63394928, -6.84442854, -32.19567871]}
                    >
                      <mesh
                        name="Rot_08_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Rot_08_-_Default_0"].geometry}
                        material={materials["08_-_Default"]}
                      />
                      <mesh
                        name="Rot_09_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["Rot_09_-_Default_0"].geometry}
                        material={materials["09_-_Default"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Cylinder001"
                    position={[-73.00424194, 6.95275116, 34.38528442]}
                    rotation={[Math.PI, 9e-8, -Math.PI / 2]}
                    scale={-1.516487}
                  >
                    <mesh
                      name="Cylinder001_09_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Cylinder001_09_-_Default_0"].geometry}
                      material={materials["09_-_Default"]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Helicopter;

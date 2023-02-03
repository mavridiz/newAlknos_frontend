import Navbar from "./navbar"
import Atom from "./Atom"
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import React, { Suspense } from "react";
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
]


export default function Contactanos() {
    return (
      <div className="bg-black w-full">
        <Navbar/>
        
        <div className="relative pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
              </div>
              <div className="mt-6">
                <h1 className="font-raleway text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Misma química.
                </h1>
                <br/>
                <h1 className="font-raleway text-white text-7xl">
                  Mejor ciencia.
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Bienvenido a una nueva forma de ver la química.  Impulsado por IA, ofrecemos las mejores herramientas con los mejores resultados.
                </p>
                <div className="mt-8 w-max">
          <div class="p-1 rounded-lg bg-gradient-to-r from-pink-600 to-purple-400">
            <button class="px-6 py-2 rounded-lg bg-black">
              <h1 class="px-6 py-2 rounded-lg text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-raleway">¡Empieza ya!</h1>
            </button>
          </div>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur
                    donec aliquet. Mi venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Marcia Hill, Digital Marketing Manager</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Canvas camera={{ position: [0, 0, 7] }} className="canvas">
              <Suspense fallback={null}>
        <color attach="background" args={['black']} />
        <Float speed={4} rotationIntensity={0.2} floatIntensity={2}>
                <Atom position={[0, 0, 0]}  r={15} g={2} b={12} rBall = {9} gBall = {2} bBall = {16}/ >
              </Float>

          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={5} radius={0.2} />
          </EffectComposer>
          
        </Suspense>
              </Canvas>
              
            </div>
            
          </div>
        </div>
        
      </div>

      <div className="py-12 bg-transparent">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="font-poppins text-transparent text-sm bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">I A &nbsp; P O W E R E D</h3>
        <h1 className="font-raleway text-5xl text-white">Detección de fórmulas química.</h1> 
<div className="py-5">
<p className="font-raleway text-gray-400 font-bold font-base">Nuestro nuevo sistema de visión artificial permite detectar compuestos tanto inorgánicos como orgánicos</p>
</div>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-white">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-gray-200">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
      </div>
      
    </div>
    )
  }
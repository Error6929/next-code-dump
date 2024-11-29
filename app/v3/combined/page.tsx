import { MaterialSymbolsCircle } from "@/components/icons/material-symbols"
import { BgLines } from "@/app/test/int/Component"

import { Grid, Heading, Para, Subheading } from "./components"

export default function Page() {
  return (
    <>
      {/* <Nav /> */}

      <Child />

      <BgLines />
    </>
  )
}

function Child() {
  return (
    <>
      <Grid className="gap-y-8 bg-grn-2/60">
        <Subheading className="col-span-2 col-start-4">
          <MaterialSymbolsCircle />
          Shaders Light effects
        </Subheading>

        <Para className="col-span-3 col-start-4">
          Over the course of my career, <br />
          Ive strived to develop a diverse set of core skills.
          <br />
          Ever since I started working with <em>WebGL and Shaders</em>.
        </Para>

        <Heading className="col-span-3 col-start-4">Education</Heading>

        <div className="col-start-2 -col-end-2 h-32 w-full rounded-md bg-grey-1" />
      </Grid>

      <Grid className="gap-y-8 bg-grn-2/40">
        <Subheading className="col-span-2 col-start-4">
          <MaterialSymbolsCircle />
          Space and Rocket
        </Subheading>

        <Para className="col-span-3 col-start-4">
          Over the course of my career, <br />
          Ive strived to develop a diverse set of core skills.
          <br />
          Ever since I started working with <em>WebGL and Shaders</em>.
        </Para>

        <Heading className="col-span-3 col-start-3">Known Technologies</Heading>

        <div className="col-start-2 -col-end-2 h-32 w-full rounded-md bg-grey-1" />
      </Grid>
    </>
  )
}

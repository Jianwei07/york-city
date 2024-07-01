import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <Container className="mb-36 pb-16 pt-20 text-center lg:mb-44 lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-blue-600 sm:text-7xl">
        York City Management
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque
        eaque eos. Aperiam, eum aspernatur vel voluptatum, impedit est illo
        nihil amet blanditiis, sint asperiores.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/rental">Check our listings</Button>

        <Button href="/contact" variant="outline">
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Contact Us</span>
        </Button>
      </div>
    </Container>
  );
}

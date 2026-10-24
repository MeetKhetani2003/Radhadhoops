import ArrowButton from "../components/ArrowButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-cream px-5 pt-24">
      <div className="text-center">
        <span className="font-serif text-7xl text-violet-brand/20">404</span>
        <h1 className="mt-4 font-serif text-3xl text-ink">This Page Wandered Off.</h1>
        <p className="mx-auto mt-4 max-w-sm text-ink-soft">
          The page you're looking for doesn't exist. Let's guide you back to the collection.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ArrowButton href="/" variant="solid">Back Home</ArrowButton>
          <ArrowButton href="/products" variant="outline">Explore Products</ArrowButton>
        </div>
      </div>
    </div>
  );
}

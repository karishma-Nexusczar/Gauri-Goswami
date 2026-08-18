import Link from "next/link";

export default function NotFound() {
  return <main className="not-found-page"><p>404</p><h1>Page not found</h1><Link className="gold-button" href="/">Return home</Link></main>;
}

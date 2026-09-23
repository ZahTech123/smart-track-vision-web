import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

type LegalPageLayoutProps = {
  title: string;
  children: ReactNode;
};

const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => (
  <main className="min-h-screen bg-gray-50 px-4 py-8 text-gray-700 md:px-8">
    <article className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm md:p-10">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-smarttrack-red hover:underline"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        Back to Home
      </Link>
      <h1 className="mb-2 text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mb-8 text-sm text-gray-600">Last updated 23 September 2026</p>
      <div className="prose max-w-none prose-headings:text-gray-900 prose-a:text-smarttrack-red">
        {children}
      </div>
    </article>
  </main>
);

export default LegalPageLayout;

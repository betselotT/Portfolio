import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-16 px-4 md:px-6 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-3 md:max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight">Resume</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Download my resume to learn more about my qualifications and
            experience.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <a href="/Betselot_Tesfa_Resume.pdf" download>
            <Button
              size="lg"
              className="shadow-sm hover:shadow-md transition-shadow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

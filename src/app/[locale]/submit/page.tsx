import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-root-500">60-second submission</p>
        <h1 className="mt-3 font-heading text-4xl text-root-800">Submit a Remedy</h1>
        <p className="mt-3 text-root-600">
          Share what your family swears by. Our research team will validate it and assign a Roots Score.
        </p>
      </div>

      <Card>
        <CardContent className="grid gap-6 pt-6">
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-root-700">Remedy name</label>
            <Input placeholder="e.g., Turmeric + Black Pepper" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-root-700">What is it for?</label>
            <Input placeholder="Condition or symptom" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-root-700">Key ingredients</label>
            <Input placeholder="List the core ingredients" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-root-700">Preparation method</label>
            <Input placeholder="Tea, paste, tincture, topical, etc." />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-root-700">Preparation details</label>
            <Textarea placeholder="Describe how it is made and used." />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-root-700">Cultural origin</label>
            <Input placeholder="Country/region + community" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-root-700">Source of knowledge</label>
            <Input placeholder="Family elder, practitioner, book, etc." />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-root-700">Personal story (optional)</label>
            <Textarea placeholder="Share a short story (500 characters max)." />
          </div>
          <div className="grid gap-4 rounded-lg border border-dashed border-root-300 bg-old-paper px-4 py-6 text-sm text-root-600">
            <p className="font-semibold text-root-700">Media upload</p>
            <p>Add a photo or video of the ingredient or preparation. (Optional)</p>
            <Button variant="secondary" size="sm">Upload file</Button>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-root-500">
              By submitting, you agree that this is not medical advice and may be researched by AAS.
            </p>
            <Button size="lg">Submit Remedy</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

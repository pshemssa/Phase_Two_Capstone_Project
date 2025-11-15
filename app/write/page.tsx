"use client";
import { useState } from "react";


export default function Write() {
const [title, setTitle] = useState("");
const [body, setBody] = useState("");


return (
<section className="app-container py-16 max-w-3xl">
<h2 className="text-2xl font-semibold">Start writing</h2>
<input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" className="mt-4 w-full p-3 border rounded" />
<textarea value={body} onChange={(e)=>setBody(e.target.value)} rows={10} className="mt-3 w-full p-3 border rounded" placeholder="Write your story..."></textarea>
<div className="mt-3 flex gap-3">
<button className="px-4 py-2 rounded bg-[var(--color-accent)] text-white">Publish</button>
<button className="px-4 py-2 rounded border">Save draft</button>
</div>
</section>
);
}
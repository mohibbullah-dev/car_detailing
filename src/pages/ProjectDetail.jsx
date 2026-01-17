import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { usePortfolioList } from "../hooks/usePortfolio";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = usePortfolioList();

  if (isLoading)
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  if (!data) return null;

  // Find current project and its index for pagination
  const currentIndex = data.findIndex((p) => p._id === id);
  const project = data[currentIndex];
  const prevProject = data[currentIndex - 1];
  const nextProject = data[currentIndex + 1];

  if (!project)
    return (
      <div className="text-white py-24 text-center">Project not found</div>
    );

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Navigation Top */}
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-500 mb-12 transition-colors uppercase text-[10px] font-black tracking-widest"
        >
          <ArrowLeft size={14} /> Back to Gallery
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest rounded-full">
              Verified Result
            </span>
            <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
              <Calendar size={12} /> Recent Work
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            {project.title}
          </h1>
          <div className="flex items-center gap-6 text-zinc-400">
            <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
              <MapPin size={16} className="text-blue-500" /> {project.location}
            </span>
          </div>
        </header>

        {/* Hero Comparison Area */}
        <div className="grid gap-6 mb-20">
          <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 shadow-2xl">
            <img
              src={project.afterUrl}
              className="w-full aspect-[16/9] object-cover"
              alt="Showroom Result"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-2">
                Final Finish
              </p>
              <h3 className="text-2xl font-bold italic group-hover:translate-x-2 transition-transform">
                Showroom Perfection.
              </h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/50 border border-white/5 rounded-[2rem] p-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-4 flex items-center gap-2">
                <ShieldCheck size={14} className="text-blue-500" /> The
                Assignment
              </h4>
              <p className="text-xl text-zinc-300 leading-relaxed italic">
                "{project.notes}"
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/5">
              <span className="absolute left-4 top-4 z-10 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase">
                Initial State
              </span>
              <img
                src={project.beforeUrl}
                className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-700"
                alt="Before"
              />
            </div>
          </div>
        </div>

        {/* Pagination System */}
        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link
                to={`/portfolio/${prevProject._id}`}
                className="group flex flex-col items-start gap-2"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 flex items-center gap-2 group-hover:text-blue-500">
                  <ChevronLeft size={14} /> Previous Project
                </span>
                <span className="text-lg font-bold text-zinc-400 group-hover:text-white transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/portfolio/${nextProject._id}`}
                className="group flex flex-col items-end gap-2 text-right"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 flex items-center gap-2 group-hover:text-blue-500">
                  Next Project <ChevronRight size={14} />
                </span>
                <span className="text-lg font-bold text-zinc-400 group-hover:text-white transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}

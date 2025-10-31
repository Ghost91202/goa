"use client";
import React from "react";

export default function Card({ children, className = "", centered = false }) {
  return (
    <div className={`card ${centered ? "mx-auto" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}

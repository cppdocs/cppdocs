---
title: "Memory model"
description: "Ownership, allocation, and memory-ordering related concepts."
---

Use this hub to reason about memory visibility and ownership in modern C++.
Start from language guarantees, then connect them to atomics, fences, and allocator/resource APIs.
The goal is a practical model for writing lock-free and lock-based code safely.

## Mental Model Diagram
<svg viewBox="0 0 1120 280" role="img" aria-label="Memory model flow from release/acquire synchronization to happens-before and visibility" xmlns="http://www.w3.org/2000/svg">
  <style>
    .box { fill: rgba(148, 163, 184, 0.10); stroke: currentColor; stroke-width: 2; rx: 10; ry: 10; }
    .txt { font: 600 18px sans-serif; fill: currentColor; }
    .small { font: 400 14px sans-serif; fill: currentColor; opacity: 0.85; }
    .arrow { stroke: currentColor; stroke-width: 2.5; marker-end: url(#mm-arrow); }
    .sync { stroke: #0f766e; stroke-width: 3; stroke-dasharray: 8 6; marker-end: url(#mm-arrow-sync); }
    .syncText { font: 600 13px sans-serif; fill: #115e59; }
  </style>
  <defs>
    <marker id="mm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
    <marker id="mm-arrow-sync" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f766e"/>
    </marker>
  </defs>

  <rect class="box" x="30" y="40" width="320" height="180"/>
  <text class="txt" x="50" y="72">Thread A</text>
  <text class="small" x="50" y="104">x.store(1, relaxed)</text>
  <text class="small" x="50" y="132">y.store(1, release)</text>

  <rect class="box" x="760" y="40" width="320" height="180"/>
  <text class="txt" x="780" y="72">Thread B</text>
  <text class="small" x="780" y="104">if (y.load(acquire) == 1)</text>
  <text class="small" x="780" y="132">  r = x.load(relaxed)</text>

  <line class="sync" x1="350" y1="132" x2="760" y2="132"/>
  <text class="syncText" x="555" y="120" text-anchor="middle">release/acquire synchronizes-with</text>

  <rect class="box" x="410" y="200" width="300" height="58"/>
  <text class="small" x="560" y="236" text-anchor="middle">happens-before => x write is visible to B</text>
</svg>

Key idea: release/acquire creates a synchronization edge; synchronization contributes to happens-before; happens-before constrains what reads may observe.

## Language Semantics
- [C++ memory model](/cpp/language/memory_model/)
- [Object lifetime](/cpp/language/lifetime/)
- [new-expression](/cpp/language/new/)

## Ownership and Smart Pointers
- [Memory utilities overview](/cpp/memory/)
- [std::unique_ptr](/cpp/memory/unique_ptr/)
- [std::shared_ptr](/cpp/memory/shared_ptr/)
- [std::weak_ptr](/cpp/memory/weak_ptr/)

## Allocation and Resources
- [Allocator requirements and APIs](/cpp/memory/allocator/)
- [std::pmr::memory_resource](/cpp/memory/memory_resource/)
- [Global operator new/delete](/cpp/memory/new/)

## Concurrency-Safe Memory Ordering
- [std::memory_order](/cpp/atomic/memory_order/)
- [std::atomic_thread_fence](/cpp/atomic/atomic_thread_fence/)

## Fast Entry Points
- Start here for rules: [C++ memory model](/cpp/language/memory_model/)
- Then ordering details: [std::memory_order](/cpp/atomic/memory_order/)
- Then ownership APIs: [Memory utilities overview](/cpp/memory/)

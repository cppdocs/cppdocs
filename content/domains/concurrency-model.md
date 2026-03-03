---
title: "Concurrency model"
description: "Threads, synchronization primitives, and asynchronous execution."
---

This hub maps the main concurrency building blocks in C++ and how they fit together.
Use it to navigate from low-level thread primitives to async results and coroutine-based flows.
Keep the model simple: execution units, shared state, synchronization edges, and completion channels.

## Mental Model Diagram
<svg viewBox="0 0 1120 320" role="img" aria-label="Concurrency model: producers update shared state, synchronization orders access, futures deliver completion" xmlns="http://www.w3.org/2000/svg">
  <style>
    .box { fill: rgba(148, 163, 184, 0.10); stroke: currentColor; stroke-width: 2; rx: 10; ry: 10; }
    .txt { font: 600 18px sans-serif; fill: currentColor; }
    .small { font: 400 14px sans-serif; fill: currentColor; opacity: 0.85; }
    .arrow { stroke: currentColor; stroke-width: 2.5; marker-end: url(#cm-arrow); }
    .guard { stroke: #7c3aed; stroke-width: 2.5; stroke-dasharray: 7 5; marker-end: url(#cm-arrow-guard); }
    .guardText { font: 600 13px sans-serif; fill: #6d28d9; }
  </style>
  <defs>
    <marker id="cm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
    <marker id="cm-arrow-guard" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c3aed"/>
    </marker>
  </defs>

  <rect class="box" x="20" y="30" width="230" height="80"/>
  <text class="txt" x="135" y="62" text-anchor="middle">Execution Units</text>
  <text class="small" x="135" y="84" text-anchor="middle">thread / jthread / coroutine</text>

  <rect class="box" x="430" y="30" width="260" height="80"/>
  <text class="txt" x="560" y="62" text-anchor="middle">Shared State</text>
  <text class="small" x="560" y="84" text-anchor="middle">objects, queues, work items</text>

  <rect class="box" x="860" y="30" width="240" height="80"/>
  <text class="txt" x="980" y="62" text-anchor="middle">Completion Channel</text>
  <text class="small" x="980" y="84" text-anchor="middle">promise -> future</text>

  <line class="arrow" x1="250" y1="70" x2="430" y2="70"/>
  <line class="arrow" x1="690" y1="70" x2="860" y2="70"/>

  <rect class="box" x="300" y="190" width="520" height="90"/>
  <text class="txt" x="560" y="224" text-anchor="middle">Synchronization Layer</text>
  <text class="small" x="560" y="247" text-anchor="middle">mutex / condition_variable / latch / barrier / atomics</text>
  <text class="small" x="560" y="268" text-anchor="middle">establishes ordering and visibility</text>

  <line class="guard" x1="560" y1="110" x2="560" y2="190"/>
  <text class="guardText" x="575" y="154">guards access + ordering</text>
</svg>

Key idea: execution units communicate through shared state; synchronization defines visibility/order; futures/promises carry completion and result transfer.

## Execution Units
- [Thread support library](/cpp/thread/)
- [std::thread](/cpp/thread/thread/)
- [std::jthread](/cpp/thread/jthread/)
- [Coroutines](/cpp/language/coroutines/)

## Synchronization Primitives
- [std::mutex](/cpp/thread/mutex/)
- [std::condition_variable](/cpp/thread/condition_variable/)
- [std::latch](/cpp/thread/latch/)
- [std::barrier](/cpp/thread/barrier/)

## Atomics and Ordering
- [Atomics overview](/cpp/atomic/)
- [std::memory_order](/cpp/atomic/memory_order/)
- [std::atomic_thread_fence](/cpp/atomic/atomic_thread_fence/)

## Async Results and Cancellation
- [std::future](/cpp/thread/future/)
- [std::promise](/cpp/thread/promise/)
- [std::stop_token](/cpp/thread/stop_token/)

## Fast Entry Points
- Base primitives: [Thread support library](/cpp/thread/)
- Shared-state ordering: [Atomics overview](/cpp/atomic/)
- Async composition: [std::future](/cpp/thread/future/)
- Suspension model: [Coroutines](/cpp/language/coroutines/)

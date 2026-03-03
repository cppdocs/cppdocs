---
title: "Concurrency support library"
description: "Curated hub for C++ atomic operations: std::atomic, atomic_ref, atomic_flag, memory ordering, fences, wait/notify, and lock-free boundaries."
source_path: "cpp/atomic"
category: "atomic"
since: "C++11"
layout: "overview-hub"
---

The atomics area covers the low-level synchronization primitives of the C++ memory model: atomic object types, free atomic functions, ordering constraints, fences, wait/notify operations, and the boundaries between lock-free coordination and higher-level thread primitives.

<div class="overview-note">
Use this page when the question is about the atomics model itself. If you need threads, mutexes, condition variables, futures, or stop tokens, jump to <a href="/cpp/thread/">thread support</a>. If you need the language rules behind data races and ordering, see the <a href="/cpp/language/memory_model/">C++ memory model</a>.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/atomic/atomic/">Atomic object types</a></h3>
    <p class="card-desc">Start here for the primary atomic templates and specializations used to make reads, writes, and RMW operations well-defined across threads.</p>
    <p class="card-links"><a href="/cpp/atomic/atomic/">atomic</a> · <a href="/cpp/atomic/atomic_ref/">atomic_ref</a> · <a href="/cpp/atomic/atomic_flag/">atomic_flag</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/atomic/memory_order/">Memory ordering</a></h3>
    <p class="card-desc">Use this route when correctness depends on acquire/release, sequential consistency, relaxed ordering, or the visibility of writes between threads.</p>
    <p class="card-links"><a href="/cpp/atomic/memory_order/">memory_order</a> · <a href="/cpp/language/memory_model/">language memory model</a> · <a href="/cpp/atomic/atomic_thread_fence/">atomic_thread_fence</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/atomic/atomic_wait/">Wait and notify</a></h3>
    <p class="card-desc">Choose this route for blocking-style coordination built on atomics rather than condition variables.</p>
    <p class="card-links"><a href="/cpp/atomic/atomic_wait/">atomic_wait</a> · <a href="/cpp/atomic/atomic_notify_one/">atomic_notify_one</a> · <a href="/cpp/atomic/atomic_notify_all/">atomic_notify_all</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/atomic/atomic_thread_fence/">Fences and barriers</a></h3>
    <p class="card-desc">Use this route when ordering must be enforced independently of a specific atomic object access.</p>
    <p class="card-links"><a href="/cpp/atomic/atomic_thread_fence/">thread fence</a> · <a href="/cpp/atomic/atomic_signal_fence/">signal fence</a> · <a href="/cpp/atomic/memory_order/">memory orders</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/atomic/atomic_load/">Free atomic functions</a></h3>
    <p class="card-desc">Start here when you are working with the non-member atomic API surface or historical/free-function style operations.</p>
    <p class="card-links"><a href="/cpp/atomic/atomic_load/">atomic_load</a> · <a href="/cpp/atomic/atomic_store/">atomic_store</a> · <a href="/cpp/atomic/atomic_compare_exchange/">atomic_compare_exchange</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/atomic/atomic/is_lock_free/">Lock-free boundaries</a></h3>
    <p class="card-desc">Use this route when you need to know whether operations are lock-free in practice, what progress guarantees exist, or when you should move up to mutex-based designs.</p>
    <p class="card-links"><a href="/cpp/atomic/atomic/is_lock_free/">is_lock_free</a> · <a href="/cpp/atomic/atomic/is_always_lock_free/">is_always_lock_free</a> · <a href="/cpp/thread/">thread support</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need...</th>
        <th>Start with</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>An atomic wrapper that owns its own value</td>
        <td><a href="/cpp/atomic/atomic/">std::atomic</a></td>
        <td>The default entry point for atomic objects and operations in the standard library.</td>
      </tr>
      <tr>
        <td>Atomic access to an existing object without changing its type</td>
        <td><a href="/cpp/atomic/atomic_ref/">std::atomic_ref</a></td>
        <td>Lets you apply atomic operations to suitably aligned existing storage.</td>
      </tr>
      <tr>
        <td>A minimal flag-style atomic primitive</td>
        <td><a href="/cpp/atomic/atomic_flag/">std::atomic_flag</a></td>
        <td>The lightweight test-and-set style primitive used for simple signaling/spin patterns.</td>
      </tr>
      <tr>
        <td>To reason about visibility, ordering, and synchronization</td>
        <td><a href="/cpp/atomic/memory_order/">std::memory_order</a></td>
        <td>Ordering modes are the key to understanding which cross-thread observations are guaranteed.</td>
      </tr>
      <tr>
        <td>To block and wake on atomic state changes</td>
        <td><a href="/cpp/atomic/atomic_wait/">atomic_wait</a> and notify operations</td>
        <td>Modern atomic waiting avoids hand-rolled spin loops in many use cases.</td>
      </tr>
      <tr>
        <td>Ordering constraints without directly reading or writing an atomic object</td>
        <td><a href="/cpp/atomic/atomic_thread_fence/">atomic_thread_fence</a> or <a href="/cpp/atomic/atomic_signal_fence/">atomic_signal_fence</a></td>
        <td>Fences provide ordering edges independent of a specific atomic variable access.</td>
      </tr>
      <tr>
        <td>To know whether a design really stays lock-free</td>
        <td><a href="/cpp/atomic/atomic/is_lock_free/">is_lock_free</a> and <a href="/cpp/atomic/atomic/is_always_lock_free/">is_always_lock_free</a></td>
        <td>They clarify implementation guarantees and when to escalate to higher-level synchronization.</td>
      </tr>
    </tbody>
  </table>
</div>

## Atomic Families

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Family</th>
        <th>Key pages</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Primary atomic object types</td>
        <td><a href="/cpp/atomic/atomic/">atomic</a>, <a href="/cpp/atomic/atomic_ref/">atomic_ref</a>, <a href="/cpp/atomic/atomic_flag/">atomic_flag</a></td>
        <td>Owning or non-owning atomic access to shared state.</td>
      </tr>
      <tr>
        <td>Free atomic operations</td>
        <td><a href="/cpp/atomic/atomic_load/">atomic_load</a>, <a href="/cpp/atomic/atomic_store/">atomic_store</a>, <a href="/cpp/atomic/atomic_exchange/">atomic_exchange</a>, <a href="/cpp/atomic/atomic_compare_exchange/">atomic_compare_exchange</a></td>
        <td>Non-member operation style, including overloads and historical/free-function APIs.</td>
      </tr>
      <tr>
        <td>Read-modify-write helpers</td>
        <td><a href="/cpp/atomic/atomic_fetch_add/">atomic_fetch_add</a>, <a href="/cpp/atomic/atomic_fetch_sub/">atomic_fetch_sub</a>, <a href="/cpp/atomic/atomic_fetch_and/">atomic_fetch_and</a>, <a href="/cpp/atomic/atomic_fetch_or/">atomic_fetch_or</a>, <a href="/cpp/atomic/atomic_fetch_xor/">atomic_fetch_xor</a></td>
        <td>Common RMW patterns for counters, bitmasks, and synchronization state.</td>
      </tr>
      <tr>
        <td>Ordering and fences</td>
        <td><a href="/cpp/atomic/memory_order/">memory_order</a>, <a href="/cpp/atomic/atomic_thread_fence/">atomic_thread_fence</a>, <a href="/cpp/atomic/atomic_signal_fence/">atomic_signal_fence</a></td>
        <td>Defining how operations synchronize and how writes become visible across threads.</td>
      </tr>
      <tr>
        <td>Wait/notify primitives</td>
        <td><a href="/cpp/atomic/atomic_wait/">atomic_wait</a>, <a href="/cpp/atomic/atomic_notify_one/">atomic_notify_one</a>, <a href="/cpp/atomic/atomic_notify_all/">atomic_notify_all</a>, <a href="/cpp/atomic/atomic_flag_wait/">atomic_flag_wait</a></td>
        <td>Blocking-style coordination built directly on atomics.</td>
      </tr>
      <tr>
        <td>Auxiliary boundaries and legacy corners</td>
        <td><a href="/cpp/atomic/kill_dependency/">kill_dependency</a>, <a href="/cpp/atomic/ATOMIC_FLAG_INIT/">ATOMIC_FLAG_INIT</a>, <a href="/cpp/atomic/ATOMIC_VAR_INIT/">ATOMIC_VAR_INIT</a></td>
        <td>Niche support points, legacy macros, and corners of the atomics surface.</td>
      </tr>
    </tbody>
  </table>
</div>

## Member Ops Vs. Free Functions

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Style</th>
        <th>Representative APIs</th>
        <th>When to prefer it</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Member operations</td>
        <td><a href="/cpp/atomic/atomic/load/">atomic::load</a>, <a href="/cpp/atomic/atomic/store/">atomic::store</a>, <a href="/cpp/atomic/atomic/exchange/">atomic::exchange</a>, <a href="/cpp/atomic/atomic/compare_exchange/">atomic::compare_exchange_*</a></td>
        <td>When you already have an `std::atomic` or `std::atomic_ref` object and want the object-centric API.</td>
      </tr>
      <tr>
        <td>Free functions</td>
        <td><a href="/cpp/atomic/atomic_load/">atomic_load</a>, <a href="/cpp/atomic/atomic_store/">atomic_store</a>, <a href="/cpp/atomic/atomic_exchange/">atomic_exchange</a>, <a href="/cpp/atomic/atomic_compare_exchange/">atomic_compare_exchange</a></td>
        <td>When interoperating with code that uses the free-function style or when overloads matter.</td>
      </tr>
      <tr>
        <td>Flag-specific operations</td>
        <td><a href="/cpp/atomic/atomic_flag_test_and_set/">atomic_flag_test_and_set</a>, <a href="/cpp/atomic/atomic_flag_clear/">atomic_flag_clear</a>, <a href="/cpp/atomic/atomic_flag_test/">atomic_flag_test</a></td>
        <td>When a single-bit atomic state is enough and you do not need a general typed atomic object.</td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/atomic/memory_order/">I need to understand ordering</a></h3>
    <p class="card-desc">Start here when correctness depends on acquire/release, relaxed ordering, or the sequencing guarantees between threads.</p>
    <p class="card-links"><a href="/cpp/language/memory_model/">Language memory model</a> · <a href="/cpp/atomic/atomic_thread_fence/">thread fence</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/atomic/atomic_wait/">I need atomic wait/notify</a></h3>
    <p class="card-desc">Start here when a thread should sleep until an atomic value changes instead of spinning continuously.</p>
    <p class="card-links"><a href="/cpp/atomic/atomic_notify_one/">notify_one</a> · <a href="/cpp/atomic/atomic_notify_all/">notify_all</a> · <a href="/cpp/thread/condition_variable/">condition_variable</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/atomic/atomic/is_lock_free/">I need lock-free guarantees</a></h3>
    <p class="card-desc">Start here when performance or progress assumptions depend on whether operations actually stay lock-free on the target platform.</p>
    <p class="card-links"><a href="/cpp/atomic/atomic_ref/is_lock_free/">atomic_ref::is_lock_free</a> · <a href="/cpp/thread/">thread support</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/thread/">I may need higher-level primitives instead</a></h3>
    <p class="card-desc">If the problem is coordination rather than low-level shared-state correctness, mutexes, latches, semaphores, and condition variables may be the better fit.</p>
    <p class="card-links"><a href="/cpp/thread/">thread support</a> · <a href="/cpp/thread/mutex/">mutex</a> · <a href="/cpp/thread/latch/">latch</a></p>
  </section>
</div>

## Boundary Lines

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you actually need...</th>
        <th>Go here</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Thread objects, locks, condition variables, futures, stop tokens, or coordination primitives</td>
        <td><a href="/cpp/thread/">Thread support</a></td>
      </tr>
      <tr>
        <td>The core language rules for data races, happens-before, and multi-threaded execution</td>
        <td><a href="/cpp/language/memory_model/">C++ language memory model</a>, <a href="/cpp/language/multithread/">multi-threaded executions</a></td>
      </tr>
      <tr>
        <td>C-side atomics or `_Atomic` compatibility instead of the C++ library surface</td>
        <td><a href="/c/atomic/">C atomics</a></td>
      </tr>
    </tbody>
  </table>
</div>

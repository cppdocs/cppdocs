---
title: "Experimental C++ Features"
description: "Curated hub for Technical Specifications and experimental C++ facilities: status, domain clusters, and migration paths toward standardized library areas."
source_path: "cpp/experimental"
category: "experimental"
layout: "overview-hub"
---

The experimental C++ area collects facilities that appeared in Library Fundamentals TSes, Concurrency TSes, Filesystem TSes, Ranges TSes, Networking proposals, and other incubation tracks before or instead of standardization in the main C++ standard library.

<div class="overview-note">
Treat this hub as a status and migration map, not as a recommendation to start new code on experimental APIs by default. Many of these facilities later moved into standardized C++ areas such as <a href="/cpp/filesystem/">filesystem</a>, <a href="/cpp/ranges/">ranges</a>, <a href="/cpp/utility/">utility</a>, <a href="/cpp/thread/">thread support</a>, and <a href="/cpp/memory/">memory</a>.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/experimental/lib_extensions/">Library Fundamentals and vocabulary types</a></h3>
    <p class="card-desc">Use this route for facilities that incubated common modern library building blocks before their standardized forms stabilized.</p>
    <p class="card-links"><a href="/cpp/experimental/optional/">optional</a> · <a href="/cpp/experimental/any/">any</a> · <a href="/cpp/experimental/basic_string_view/">string_view</a> · <a href="/cpp/experimental/observer_ptr/">observer_ptr</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/experimental/memory_resource/">Memory resource and ownership experiments</a></h3>
    <p class="card-desc">Polymorphic memory resources, pool resources, and ownership-adjacent helper types that informed later standardized memory facilities.</p>
    <p class="card-links"><a href="/cpp/experimental/memory_resource/">memory_resource</a> · <a href="/cpp/experimental/monotonic_buffer_resource/">monotonic_buffer_resource</a> · <a href="/cpp/experimental/propagate_const/">propagate_const</a> · <a href="/cpp/experimental/observer_ptr/">observer_ptr</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/experimental/concurrency/">Concurrency and futures experiments</a></h3>
    <p class="card-desc">Use this route for Concurrency TS features, continuation-style futures, barriers, latches, and atomic smart pointer experiments.</p>
    <p class="card-links"><a href="/cpp/experimental/future/">future</a> · <a href="/cpp/experimental/latch/">latch</a> · <a href="/cpp/experimental/barrier/">barrier</a> · <a href="/cpp/experimental/atomic_shared_ptr/">atomic_shared_ptr</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/experimental/fs/">Filesystem and networking</a></h3>
    <p class="card-desc">Use this route for larger domain TSes that eventually fed standard filesystem and still-not-yet-mainline networking work.</p>
    <p class="card-links"><a href="/cpp/experimental/fs/">Filesystem TS</a> · <a href="/cpp/filesystem/">standard filesystem</a> · <a href="/cpp/experimental/networking/">networking</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/experimental/ranges/">Ranges and execution incubation</a></h3>
    <p class="card-desc">Historical TS surfaces that predate the standardized ranges model or execution-related standardization.</p>
    <p class="card-links"><a href="/cpp/experimental/ranges/">experimental ranges</a> · <a href="/cpp/ranges/">standard ranges</a> · <a href="/cpp/experimental/execution/">execution</a> · <a href="/cpp/execution/">standard execution</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/experimental/reflect/">Reflection and other incubators</a></h3>
    <p class="card-desc">Use this route for proposal-heavy or still-emerging tracks that are useful mainly for status awareness and historical context.</p>
    <p class="card-links"><a href="/cpp/experimental/reflect/">reflect</a> · <a href="/cpp/experimental/parallelism/">parallelism</a> · <a href="/cpp/experimental/source_location/">source_location</a></p>
  </section>
</div>

## Status Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Experimental area</th>
        <th>What it contains</th>
        <th>Typical migration target</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Library Fundamentals</td>
        <td>Vocabulary types, helpers, memory-resource work, observer/ownership utilities, and scope-guard style tools.</td>
        <td><a href="/cpp/utility/">Utility</a>, <a href="/cpp/memory/">Memory</a>, <a href="/cpp/string/">String</a></td>
      </tr>
      <tr>
        <td>Concurrency TS</td>
        <td>Continuation-friendly futures, latch/barrier family, and smart-pointer atomics that informed later standard APIs.</td>
        <td><a href="/cpp/thread/">Thread support</a>, <a href="/cpp/atomic/">Atomic operations</a></td>
      </tr>
      <tr>
        <td>Filesystem TS</td>
        <td>Pre-standard filesystem paths, directory traversal, file status, and related error types.</td>
        <td><a href="/cpp/filesystem/">Filesystem</a></td>
      </tr>
      <tr>
        <td>Ranges TS</td>
        <td>Historical experimental ranges taxonomy that predates the standardized C++20 ranges model.</td>
        <td><a href="/cpp/ranges/">Ranges</a></td>
      </tr>
      <tr>
        <td>Networking / reflection / other incubators</td>
        <td>Proposal-driven areas that may still be experimental or evolve independently from the main standard library surface.</td>
        <td>Track the experimental pages directly first; only jump to a standardized hub if one now exists.</td>
      </tr>
    </tbody>
  </table>
</div>

## Domain Clusters

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Cluster</th>
        <th>Key pages</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Vocabulary and value wrappers</td>
        <td><a href="/cpp/experimental/optional/">optional</a>, <a href="/cpp/experimental/any/">any</a>, <a href="/cpp/experimental/basic_string_view/">basic_string_view</a>, <a href="/cpp/experimental/function/">function</a></td>
        <td>Historical TS forms of value wrappers and callable wrappers that later influenced standardized utility surfaces.</td>
      </tr>
      <tr>
        <td>Memory resource ecosystem</td>
        <td><a href="/cpp/experimental/memory_resource/">memory_resource</a>, <a href="/cpp/experimental/monotonic_buffer_resource/">monotonic_buffer_resource</a>, <a href="/cpp/experimental/polymorphic_allocator/">polymorphic_allocator</a>, <a href="/cpp/experimental/synchronized_pool_resource/">synchronized_pool_resource</a>, <a href="/cpp/experimental/unsynchronized_pool_resource/">unsynchronized_pool_resource</a></td>
        <td>Allocator and PMR-adjacent experiments that led toward modern resource-oriented memory management.</td>
      </tr>
      <tr>
        <td>Ownership and scope helpers</td>
        <td><a href="/cpp/experimental/observer_ptr/">observer_ptr</a>, <a href="/cpp/experimental/propagate_const/">propagate_const</a>, <a href="/cpp/experimental/unique_resource/">unique_resource</a>, <a href="/cpp/experimental/scope_exit/">scope_exit</a>, <a href="/cpp/experimental/scope_fail/">scope_fail</a>, <a href="/cpp/experimental/scope_success/">scope_success</a></td>
        <td>Non-owning pointers, const-propagation wrappers, and RAII-style cleanup helpers.</td>
      </tr>
      <tr>
        <td>Concurrency and continuations</td>
        <td><a href="/cpp/experimental/concurrency/">concurrency</a>, <a href="/cpp/experimental/future/">future</a>, <a href="/cpp/experimental/latch/">latch</a>, <a href="/cpp/experimental/barrier/">barrier</a>, <a href="/cpp/experimental/flex_barrier/">flex_barrier</a>, <a href="/cpp/experimental/atomic_shared_ptr/">atomic_shared_ptr</a>, <a href="/cpp/experimental/atomic_weak_ptr/">atomic_weak_ptr</a></td>
        <td>Synchronization, continuation-based async workflows, and experimental concurrent ownership primitives.</td>
      </tr>
      <tr>
        <td>Filesystem, networking, and system-adjacent domains</td>
        <td><a href="/cpp/experimental/fs/">fs</a>, <a href="/cpp/experimental/networking/">networking</a></td>
        <td>Broader domain TSes that either standardized later or remain incubating separately.</td>
      </tr>
      <tr>
        <td>Execution, ranges, and parallelism</td>
        <td><a href="/cpp/experimental/execution/">execution</a>, <a href="/cpp/experimental/parallelism/">parallelism</a>, <a href="/cpp/experimental/ranges/">ranges</a>, <a href="/cpp/experimental/ostream_joiner/">ostream_joiner</a></td>
        <td>Pre-standard models for algorithms, execution policy work, range composition, and related utilities.</td>
      </tr>
      <tr>
        <td>Metaprogramming and reflection incubators</td>
        <td><a href="/cpp/experimental/is_detected/">is_detected</a>, <a href="/cpp/experimental/not_fn/">not_fn</a>, <a href="/cpp/experimental/reflect/">reflect</a>, <a href="/cpp/experimental/source_location/">source_location</a></td>
        <td>Detection idiom helpers, callable adapters, reflection work, and proposal-stage compile-time support.</td>
      </tr>
      <tr>
        <td>Early numeric and algorithm extras</td>
        <td><a href="/cpp/experimental/gcd/">gcd</a>, <a href="/cpp/experimental/lcm/">lcm</a>, <a href="/cpp/experimental/simd/">simd</a>, <a href="/cpp/experimental/special_functions/">special functions</a></td>
        <td>Experimental numerics that later moved into or influenced standard numeric facilities.</td>
      </tr>
    </tbody>
  </table>
</div>

## Migration Notes

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you find an experimental page for...</th>
        <th>Check first whether you should now prefer...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>`fs`, path, directory traversal, file status</td>
        <td><a href="/cpp/filesystem/">standard filesystem</a></td>
      </tr>
      <tr>
        <td>`optional`, `any`, `string_view`, `not_fn`, `source_location`</td>
        <td><a href="/cpp/utility/">utility</a> and related standardized library pages</td>
      </tr>
      <tr>
        <td>`memory_resource`, PMR allocators and pool resources</td>
        <td><a href="/cpp/memory/">memory</a> and standardized PMR facilities</td>
      </tr>
      <tr>
        <td>experimental ranges taxonomy</td>
        <td><a href="/cpp/ranges/">standard ranges</a></td>
      </tr>
      <tr>
        <td>concurrency primitives such as latch/barrier</td>
        <td><a href="/cpp/thread/">thread support</a> and <a href="/cpp/atomic/">atomic operations</a></td>
      </tr>
      <tr>
        <td>facilities with no obvious standardized counterpart yet</td>
        <td>Stay in the experimental page and verify your toolchain/library support before adopting them.</td>
      </tr>
    </tbody>
  </table>
</div>

## Boundary Notes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/filesystem/">Prefer standardized hubs when they exist</a></h3>
    <p class="card-desc">This page should often be your status map, not your final destination. If a facility has a modern standard counterpart, that counterpart is usually the better primary reference.</p>
    <p class="card-links"><a href="/cpp/filesystem/">filesystem</a> · <a href="/cpp/ranges/">ranges</a> · <a href="/cpp/utility/">utility</a> · <a href="/cpp/memory/">memory</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/compiler_support/">Check implementation support</a></h3>
    <p class="card-desc">Experimental facilities are more likely to vary by library vendor, compiler mode, and TS availability than standardized facilities.</p>
    <p class="card-links"><a href="/cpp/compiler_support/">compiler support</a> · <a href="/cpp/current_status/">current status</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/experimental/">C experimental</a></h3>
    <p class="card-desc">Keep the C experimental area separate; this hub is specifically for C++ TS and experimental-library surfaces.</p>
    <p class="card-links"><a href="/c/experimental/">C experimental</a> · <a href="/cpp/">C++ root</a></p>
  </section>
</div>

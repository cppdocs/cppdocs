---
title: "Memory management library"
description: "Smart pointers, allocators and PMR, raw memory algorithms, operator new/delete, and lifetime-oriented utilities."
source_path: "cpp/memory"
layout: "overview-hub"
overview_page_class: "overview-page-memory"
category: "memory"
---

The C++ memory area spans ownership models, allocation strategies, polymorphic memory resources, raw storage algorithms, low-level pointer utilities, and the language-adjacent rules around object lifetime. This hub is the curated starting point when the problem is about how objects are stored, owned, created, destroyed, or allocated.

<div class="overview-note">
This page is a navigation hub. It points to canonical smart-pointer, allocator, PMR, raw-memory, and `new`/`delete` routes without duplicating their member inventories or absorbing adjacent container and utility documentation.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/memory/unique_ptr/">Exclusive ownership</a></h3>
    <p class="card-desc">Use <code>unique_ptr</code> when one owner controls an object or array and transfer-by-move is the intended ownership model.</p>
    <p class="card-links"><a href="/cpp/memory/unique_ptr/">unique_ptr</a> · <a href="/cpp/memory/unique_ptr/make_unique/">make_unique</a> · <a href="/cpp/memory/default_delete/">default_delete</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/memory/shared_ptr/">Shared ownership</a></h3>
    <p class="card-desc">Use shared ownership when multiple parts of a program intentionally co-own an object and lifetime ends with the last owner.</p>
    <p class="card-links"><a href="/cpp/memory/shared_ptr/">shared_ptr</a> · <a href="/cpp/memory/weak_ptr/">weak_ptr</a> · <a href="/cpp/memory/enable_shared_from_this/">enable_shared_from_this</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/memory/memory_resource/">Allocators and PMR</a></h3>
    <p class="card-desc">Start here when allocation strategy matters more than pointer ownership, especially for containers, arenas, and custom memory-resource wiring.</p>
    <p class="card-links"><a href="/cpp/memory/allocator/">allocator</a> · <a href="/cpp/memory/allocator_traits/">allocator_traits</a> · <a href="/cpp/memory/memory_resource/">memory_resource</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/memory/new/">Raw storage and object lifetime</a></h3>
    <p class="card-desc">Use this route when the question is about `operator new/delete`, uninitialized storage, constructing into raw memory, or starting object lifetime explicitly.</p>
    <p class="card-links"><a href="/cpp/memory/new/">new/delete</a> · <a href="/cpp/memory/construct_at/">construct_at</a> · <a href="/cpp/memory/uninitialized_copy/">uninitialized_copy</a> · <a href="/cpp/memory/start_lifetime_as/">start_lifetime_as</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need to...</th>
        <th>Start with</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Own an object with a single clear owner</td>
        <td><a href="/cpp/memory/unique_ptr/">unique_ptr</a></td>
        <td>It expresses exclusive ownership directly and is the default RAII pointer for heap objects that do not require shared lifetime.</td>
      </tr>
      <tr>
        <td>Share ownership across multiple objects or callbacks</td>
        <td><a href="/cpp/memory/shared_ptr/">shared_ptr</a>, <a href="/cpp/memory/weak_ptr/">weak_ptr</a></td>
        <td>These types model shared control blocks and non-owning observers for graph-like lifetime structures.</td>
      </tr>
      <tr>
        <td>Customize allocation for containers or object construction</td>
        <td><a href="/cpp/memory/allocator/">allocator</a>, <a href="/cpp/memory/allocator_traits/">allocator_traits</a>, <a href="/cpp/memory/polymorphic_allocator/">polymorphic_allocator</a></td>
        <td>Use the allocator path when the issue is allocation policy, propagation, fancy pointers, or container integration.</td>
      </tr>
      <tr>
        <td>Use arena-like or shared memory resources</td>
        <td><a href="/cpp/memory/memory_resource/">memory_resource</a>, <a href="/cpp/memory/monotonic_buffer_resource/">monotonic_buffer_resource</a>, <a href="/cpp/memory/synchronized_pool_resource/">synchronized_pool_resource</a></td>
        <td>PMR is the standardized route for runtime-selectable allocation backends.</td>
      </tr>
      <tr>
        <td>Allocate raw storage and construct objects manually</td>
        <td><a href="/cpp/memory/new/">new/delete</a>, <a href="/cpp/memory/construct_at/">construct_at</a>, <a href="/cpp/memory/destroy/">destroy</a>, <a href="/cpp/memory/uninitialized_copy/">uninitialized algorithms</a></td>
        <td>This is the route for low-level object placement and lifetime control in buffers that do not yet hold live objects.</td>
      </tr>
      <tr>
        <td>Recover raw addresses from fancy pointers or contiguous handles</td>
        <td><a href="/cpp/memory/to_address/">to_address</a>, <a href="/cpp/memory/pointer_traits/">pointer_traits</a></td>
        <td>These helpers bridge pointer-like abstractions with raw-address-based low-level code.</td>
      </tr>
      <tr>
        <td>Reach the C allocation surface</td>
        <td><a href="/cpp/memory/c/">C memory management</a>, <a href="/c/memory/">C documentation</a></td>
        <td>Use this route when the code is intentionally using `malloc`/`free`-style APIs or interoperating with C allocation rules.</td>
      </tr>
    </tbody>
  </table>
</div>

## Raw Memory And Lifetime Helpers

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Helper</th>
        <th>Use it for</th>
        <th>Primary destinations</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Object construction and destruction</td>
        <td>Explicitly creating and tearing down objects in already-allocated storage.</td>
        <td><a href="/cpp/memory/construct_at/">construct_at</a>, <a href="/cpp/memory/destroy/">destroy</a>, <a href="/cpp/memory/destroy_at/">destroy_at</a></td>
      </tr>
      <tr>
        <td>Uninitialized algorithms</td>
        <td>Copying, moving, filling, or default-constructing across raw storage ranges.</td>
        <td><a href="/cpp/memory/uninitialized_copy/">uninitialized_copy</a>, <a href="/cpp/memory/uninitialized_fill/">uninitialized_fill</a>, <a href="/cpp/memory/uninitialized_default_construct/">uninitialized_default_construct</a></td>
      </tr>
      <tr>
        <td>Lifetime start utilities</td>
        <td>Beginning object lifetime in storage without the classic placement-new model alone.</td>
        <td><a href="/cpp/memory/start_lifetime_as/">start_lifetime_as</a></td>
      </tr>
      <tr>
        <td>Address and alignment helpers</td>
        <td>Working with fancy pointers, raw addresses, alignment contracts, and address recovery.</td>
        <td><a href="/cpp/memory/to_address/">to_address</a>, <a href="/cpp/memory/addressof/">addressof</a>, <a href="/cpp/memory/align/">align</a>, <a href="/cpp/memory/assume_aligned/">assume_aligned</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Modern Additions

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Standard</th>
        <th>What changed navigation-wise</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">C++11</span></td>
        <td><a href="/cpp/memory/unique_ptr/">unique_ptr</a>, <a href="/cpp/memory/shared_ptr/">shared_ptr</a>, <a href="/cpp/memory/weak_ptr/">weak_ptr</a>, allocator traits, and the new allocation/lifetime model became the dominant modern memory story.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++17</span></td>
        <td>PMR introduced a second major allocation path centered on <a href="/cpp/memory/memory_resource/">memory_resource</a> and <a href="/cpp/memory/polymorphic_allocator/">polymorphic_allocator</a>.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++20</span></td>
        <td><a href="/cpp/memory/construct_at/">construct_at</a>, <a href="/cpp/memory/to_address/">to_address</a>, and ranges-aware/lifetime-adjacent helpers made raw-memory code more explicit and more reusable.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++23</span></td>
        <td><a href="/cpp/memory/start_lifetime_as/">start_lifetime_as</a>, <a href="/cpp/memory/out_ptr_t/">out_ptr</a>/<a href="/cpp/memory/inout_ptr_t/">inout_ptr</a>, and allocator refinements expanded the interoperability and lifetime-control surface.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++26</span></td>
        <td>New alignment and allocation-result helpers continue broadening the low-level memory toolset beyond classic smart-pointer navigation.</td>
      </tr>
    </tbody>
  </table>
</div>

## Boundary Lines

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>This hub covers</th>
        <th>Use a different hub for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ownership, allocation strategies, raw storage algorithms, and lifetime-oriented memory helpers.</td>
        <td><a href="/cpp/container/">Containers</a> for container selection and access models, <a href="/cpp/utility/">Utility</a> for general-purpose support types, and <a href="/cpp/types/">Type support</a> for traits/limits not primarily about storage or ownership.</td>
      </tr>
      <tr>
        <td>C++ memory-management abstractions.</td>
        <td><a href="/c/memory/">C memory</a> when you need the plain C allocation family or cross-language allocation guidance.</td>
      </tr>
    </tbody>
  </table>
</div>

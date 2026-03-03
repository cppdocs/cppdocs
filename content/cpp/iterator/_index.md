---
title: "Iterator library"
description: "Iterator concepts, traits, adaptors, range-access utilities, and the boundary between classic iterators and ranges."
source_path: "cpp/iterator"
layout: "overview-hub"
overview_page_class: "overview-page-iterator"
category: "iterator"
---

The iterator library is the bridge between algorithms and data structures: it defines how code traverses, reads, writes, advances through, and adapts sequences. This hub is the curated starting point when the question is about iterator capabilities, categories, utilities, or adaptor types rather than a specific container or ranges view.

<div class="overview-note">
This page stays focused on iterators and iterator-shaped utilities. It links outward to <a href="/cpp/ranges/">Ranges</a>, <a href="/cpp/container/">Containers</a>, and <a href="/cpp/algorithm/">Algorithms</a> where the navigation problem becomes broader than iterator mechanics.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/input_iterator/">Iterator concepts and traversal strength</a></h3>
    <p class="card-desc">Start here when you need to know what an iterator is allowed to do: single-pass input, multi-pass forward, bidirectional movement, random access, or contiguous storage guarantees.</p>
    <p class="card-links"><a href="/cpp/iterator/input_iterator/">input_iterator</a> · <a href="/cpp/iterator/forward_iterator/">forward_iterator</a> · <a href="/cpp/iterator/contiguous_iterator/">contiguous_iterator</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/iterator_traits/">Traits and associated types</a></h3>
    <p class="card-desc">Use the traits route when generic code needs `value_type`, `difference_type`, tags, or pointer-like adaptation across iterator types.</p>
    <p class="card-links"><a href="/cpp/iterator/iterator_traits/">iterator_traits</a> · <a href="/cpp/iterator/iterator_tags/">iterator tags</a> · <a href="/cpp/iterator/incrementable_traits/">incrementable_traits</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/reverse_iterator/">Iterator adaptors</a></h3>
    <p class="card-desc">Start here when you need to wrap an existing iterator to reverse, move, insert, count, or normalize sentinel/iterator pairs.</p>
    <p class="card-links"><a href="/cpp/iterator/reverse_iterator/">reverse_iterator</a> · <a href="/cpp/iterator/move_iterator/">move_iterator</a> · <a href="/cpp/iterator/insert_iterator/">insert_iterator</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/advance/">Navigation helpers</a></h3>
    <p class="card-desc">Use these utilities when you already have iterators and need to move them, measure distance, or obtain begin/end/data/size-style access uniformly.</p>
    <p class="card-links"><a href="/cpp/iterator/advance/">advance</a> · <a href="/cpp/iterator/distance/">distance</a> · <a href="/cpp/iterator/begin/">begin/end</a></p>
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
        <td>Describe how far an iterator can move and what guarantees it has</td>
        <td><a href="/cpp/iterator/input_iterator/">concepts</a>, <a href="/cpp/iterator/iterator_tags/">iterator tags</a></td>
        <td>This is the route for capability modeling: readable vs writable, single-pass vs multi-pass, random access vs contiguous layout.</td>
      </tr>
      <tr>
        <td>Write generic code against iterator-associated types</td>
        <td><a href="/cpp/iterator/iterator_traits/">iterator_traits</a>, <a href="/cpp/iterator/incrementable_traits/">incrementable_traits</a></td>
        <td>Traits provide the canonical metadata and defaults that algorithms and generic adapters rely on.</td>
      </tr>
      <tr>
        <td>Reverse or move through an existing iterator interface</td>
        <td><a href="/cpp/iterator/reverse_iterator/">reverse_iterator</a>, <a href="/cpp/iterator/move_iterator/">move_iterator</a></td>
        <td>These adaptors change traversal or value category behavior without requiring a different underlying container.</td>
      </tr>
      <tr>
        <td>Insert through an iterator facade into a container</td>
        <td><a href="/cpp/iterator/insert_iterator/">insert_iterator</a>, <a href="/cpp/iterator/back_insert_iterator/">back_insert_iterator</a>, <a href="/cpp/iterator/front_insert_iterator/">front_insert_iterator</a></td>
        <td>Insertion adaptors are the canonical output-iterator route for algorithms that write into containers.</td>
      </tr>
      <tr>
        <td>Advance iterators, compute distances, or get neighboring positions</td>
        <td><a href="/cpp/iterator/advance/">advance</a>, <a href="/cpp/iterator/distance/">distance</a>, <a href="/cpp/iterator/next/">next</a>, <a href="/cpp/iterator/prev/">prev</a></td>
        <td>These helpers abstract over traversal strength while preserving the iterator model.</td>
      </tr>
      <tr>
        <td>Access a range through non-member `begin`/`end`/`data`/`size` utilities</td>
        <td><a href="/cpp/iterator/begin/">begin</a>, <a href="/cpp/iterator/end/">end</a>, <a href="/cpp/iterator/data/">data</a>, <a href="/cpp/iterator/size/">size</a>, <a href="/cpp/iterator/empty/">empty</a></td>
        <td>These are the classic range-access endpoints that bridge arrays, containers, and some view-like types.</td>
      </tr>
      <tr>
        <td>Use iterators backed by streams rather than containers</td>
        <td><a href="/cpp/iterator/istream_iterator/">istream_iterator</a>, <a href="/cpp/iterator/ostream_iterator/">ostream_iterator</a>, <a href="/cpp/iterator/istreambuf_iterator/">istreambuf_iterator</a></td>
        <td>Stream iterators connect iterator-oriented algorithms to formatted or buffer-level I/O.</td>
      </tr>
      <tr>
        <td>Navigate the modern ranges-based iterator/sentinel world</td>
        <td><a href="/cpp/iterator/ranges/">ranges iterator utilities</a>, <a href="/cpp/ranges/">Ranges hub</a></td>
        <td>Ranges reuse iterator ideas but add sentinels, CPOs, and view-oriented navigation beyond the classic iterator page split.</td>
      </tr>
    </tbody>
  </table>
</div>

## Iterator Strength Ladder

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Concept</th>
        <th>Main guarantee</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="/cpp/iterator/input_iterator/">input_iterator</a></td>
        <td>Readable, single-pass traversal</td>
        <td>Basic read pipelines, streaming inputs, and sentinel-based one-pass algorithms.</td>
      </tr>
      <tr>
        <td><a href="/cpp/iterator/output_iterator/">output_iterator</a></td>
        <td>Writable output progression</td>
        <td>Algorithm sinks and iterator-based output destinations.</td>
      </tr>
      <tr>
        <td><a href="/cpp/iterator/forward_iterator/">forward_iterator</a></td>
        <td>Multi-pass readable traversal</td>
        <td>Stable traversal where revisiting positions is meaningful.</td>
      </tr>
      <tr>
        <td><a href="/cpp/iterator/bidirectional_iterator/">bidirectional_iterator</a></td>
        <td>Can move backward as well as forward</td>
        <td>Reverse traversal and predecessor-based algorithms.</td>
      </tr>
      <tr>
        <td><a href="/cpp/iterator/random_access_iterator/">random_access_iterator</a></td>
        <td>Constant-time jumps and distance</td>
        <td>Index-like traversal, arithmetic on iterators, and random-access algorithms.</td>
      </tr>
      <tr>
        <td><a href="/cpp/iterator/contiguous_iterator/">contiguous_iterator</a></td>
        <td>Elements occupy contiguous memory</td>
        <td>APIs that need raw pointers or contiguous storage guarantees.</td>
      </tr>
    </tbody>
  </table>
</div>

## Iterator Families

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/iterator_traits/">Traits and tags</a></h3>
    <p class="card-desc">Type metadata, iterator categories, difference types, and machinery that generic algorithms inspect.</p>
    <p class="card-links"><a href="/cpp/iterator/iterator_traits/">iterator_traits</a> · <a href="/cpp/iterator/iterator_tags/">iterator tags</a> · <a href="/cpp/iterator/incrementable_traits/">incrementable_traits</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/reverse_iterator/">Traversal adaptors</a></h3>
    <p class="card-desc">Adaptors that change how an underlying iterator is traversed or interpreted.</p>
    <p class="card-links"><a href="/cpp/iterator/reverse_iterator/">reverse_iterator</a> · <a href="/cpp/iterator/move_iterator/">move_iterator</a> · <a href="/cpp/iterator/counted_iterator/">counted_iterator</a> · <a href="/cpp/iterator/common_iterator/">common_iterator</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/insert_iterator/">Insertion adaptors</a></h3>
    <p class="card-desc">Output-iterator facades that write into containers via insert, push_back, or push_front semantics.</p>
    <p class="card-links"><a href="/cpp/iterator/insert_iterator/">insert_iterator</a> · <a href="/cpp/iterator/back_insert_iterator/">back_insert_iterator</a> · <a href="/cpp/iterator/front_insert_iterator/">front_insert_iterator</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/istream_iterator/">Stream iterators</a></h3>
    <p class="card-desc">Iterator-shaped interfaces for stream extraction/insertion and stream-buffer-level traversal.</p>
    <p class="card-links"><a href="/cpp/iterator/istream_iterator/">istream_iterator</a> · <a href="/cpp/iterator/ostream_iterator/">ostream_iterator</a> · <a href="/cpp/iterator/istreambuf_iterator/">istreambuf_iterator</a> · <a href="/cpp/iterator/ostreambuf_iterator/">ostreambuf_iterator</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/begin/">Range access helpers</a></h3>
    <p class="card-desc">Non-member utility functions that discover iteration endpoints, storage pointers, or size/emptiness information.</p>
    <p class="card-links"><a href="/cpp/iterator/begin/">begin</a> · <a href="/cpp/iterator/end/">end</a> · <a href="/cpp/iterator/data/">data</a> · <a href="/cpp/iterator/size/">size</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/ranges/">Ranges iterator utilities</a></h3>
    <p class="card-desc">The CPO-based, sentinel-friendly iterator utilities that live on the boundary between classic iterators and the ranges library.</p>
    <p class="card-links"><a href="/cpp/iterator/ranges/">ranges utilities</a> · <a href="/cpp/ranges/">Ranges hub</a></p>
  </section>
</div>

## Utility Operations

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Operation</th>
        <th>Use it for</th>
        <th>Primary destinations</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Advance / next / prev</td>
        <td>Moving iterators without manually spelling out repeated increment/decrement logic.</td>
        <td><a href="/cpp/iterator/advance/">advance</a>, <a href="/cpp/iterator/next/">next</a>, <a href="/cpp/iterator/prev/">prev</a></td>
      </tr>
      <tr>
        <td>Distance</td>
        <td>Measuring how far apart two positions are according to iterator strength.</td>
        <td><a href="/cpp/iterator/distance/">distance</a>, <a href="/cpp/iterator/ranges/distance/">ranges::distance</a></td>
      </tr>
      <tr>
        <td>Begin/end/data/size/empty</td>
        <td>Uniform access to endpoints and shape information for arrays, containers, and some range-like types.</td>
        <td><a href="/cpp/iterator/begin/">begin</a>, <a href="/cpp/iterator/end/">end</a>, <a href="/cpp/iterator/data/">data</a>, <a href="/cpp/iterator/size/">size</a>, <a href="/cpp/iterator/empty/">empty</a></td>
      </tr>
      <tr>
        <td>Iterator-sentinel normalization</td>
        <td>Bridging differing iterator/sentinel forms into algorithm-friendly shapes.</td>
        <td><a href="/cpp/iterator/common_iterator/">common_iterator</a>, <a href="/cpp/iterator/default_sentinel_t/">default_sentinel_t</a>, <a href="/cpp/iterator/unreachable_sentinel_t/">unreachable_sentinel_t</a></td>
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
        <td>Iterator concepts, traits, adaptors, stream iterators, and endpoint/navigation utilities.</td>
        <td><a href="/cpp/ranges/">Ranges</a> for view pipelines and CPO-heavy range navigation, <a href="/cpp/container/">Containers</a> for choosing data structures, and <a href="/cpp/algorithm/">Algorithms</a> for task-oriented operation selection.</td>
      </tr>
      <tr>
        <td>Classic iterator-based traversal surfaces.</td>
        <td><a href="/cpp/ranges/">Ranges</a> when the code is primarily range/view/sentinel-first instead of iterator-pair-first.</td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/input_iterator/">I need to specify iterator requirements</a></h3>
    <p class="card-desc">Start from iterator concepts when the job is to constrain templates or understand what a generic algorithm may legally assume.</p>
    <p class="card-links"><a href="/cpp/iterator/input_iterator/">input</a> · <a href="/cpp/iterator/forward_iterator/">forward</a> · <a href="/cpp/iterator/random_access_iterator/">random access</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/reverse_iterator/">I need to adapt an existing iterator</a></h3>
    <p class="card-desc">Use iterator adaptors when you want a different traversal or insertion behavior without designing a new container interface.</p>
    <p class="card-links"><a href="/cpp/iterator/reverse_iterator/">reverse_iterator</a> · <a href="/cpp/iterator/move_iterator/">move_iterator</a> · <a href="/cpp/iterator/back_inserter/">back_inserter</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/iterator/advance/">I need common iterator operations</a></h3>
    <p class="card-desc">Use the classic utilities first when the problem is traversal math, endpoint discovery, or generic access helpers over existing ranges.</p>
    <p class="card-links"><a href="/cpp/iterator/advance/">advance</a> · <a href="/cpp/iterator/distance/">distance</a> · <a href="/cpp/iterator/data/">data</a></p>
  </section>
</div>

---
title: "Containers library"
description: "Curated hub for choosing the right C++ container family: sequence, associative, unordered, adaptor, fixed-capacity, and view-like access tools."
source_path: "cpp/container"
category: "container"
layout: "overview-hub"
overview_page_class: "overview-page-container"
---

The containers area is where most data-structure choices start in the C++ standard library. This hub helps you choose the right container family first, then the right concrete type, instead of starting from a flat list of names.

<div class="overview-note">
Use this page for owning containers and closely related access surfaces. <a href="/cpp/string/">Strings</a>, <a href="/cpp/ranges/">Ranges</a>, and <a href="/cpp/algorithm/">Algorithms</a> remain separate hubs and are linked here only where the boundary matters.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/container/vector/">Sequence containers</a></h3>
    <p class="card-desc">General-purpose owning sequences when element order matters and you care about growth, insertion position, or iterator stability.</p>
    <p class="card-links"><a href="/cpp/container/vector/">vector</a> · <a href="/cpp/container/deque/">deque</a> · <a href="/cpp/container/list/">list</a> · <a href="/cpp/container/forward_list/">forward_list</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/container/map/">Ordered associative containers</a></h3>
    <p class="card-desc">Key-based lookup with deterministic sorted order, tree-style traversal, and ordered range queries.</p>
    <p class="card-links"><a href="/cpp/container/map/">map</a> · <a href="/cpp/container/set/">set</a> · <a href="/cpp/container/multimap/">multimap</a> · <a href="/cpp/container/multiset/">multiset</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/container/unordered_map/">Unordered associative containers</a></h3>
    <p class="card-desc">Hash-table lookup when average-case key access matters more than sorted order or ordered traversal.</p>
    <p class="card-links"><a href="/cpp/container/unordered_map/">unordered_map</a> · <a href="/cpp/container/unordered_set/">unordered_set</a> · <a href="/cpp/container/unordered_multimap/">unordered_multimap</a> · <a href="/cpp/container/unordered_multiset/">unordered_multiset</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/container/stack/">Container adaptors</a></h3>
    <p class="card-desc">Restricted interfaces layered on top of an underlying container when you want stack, queue, or priority semantics directly.</p>
    <p class="card-links"><a href="/cpp/container/stack/">stack</a> · <a href="/cpp/container/queue/">queue</a> · <a href="/cpp/container/priority_queue/">priority_queue</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/container/array/">Fixed-capacity and contiguous storage</a></h3>
    <p class="card-desc">Use compile-time or fixed-capacity storage when size constraints are known and allocation strategy matters.</p>
    <p class="card-links"><a href="/cpp/container/array/">array</a> · <a href="/cpp/container/inplace_vector/">inplace_vector</a> · <a href="/cpp/container/vector/">vector</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/container/span/">Views and access surfaces</a></h3>
    <p class="card-desc">Non-owning or layout-oriented views when you need to pass or interpret data without taking ownership.</p>
    <p class="card-links"><a href="/cpp/container/span/">span</a> · <a href="/cpp/container/mdspan/">mdspan</a> · <a href="/cpp/ranges/">ranges</a></p>
  </section>
</div>

## Quick Choice Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need...</th>
        <th>Start with</th>
        <th>Why</th>
        <th>Common alternatives</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>A default owning sequence</td>
        <td><a href="/cpp/container/vector/">vector</a></td>
        <td>Contiguous storage, fast random access, and the best general-purpose default for most value sequences.</td>
        <td><a href="/cpp/container/deque/">deque</a>, <a href="/cpp/container/list/">list</a></td>
      </tr>
      <tr>
        <td>Cheap insertion/removal at both ends</td>
        <td><a href="/cpp/container/deque/">deque</a></td>
        <td>Efficient front/back growth without the pointer-heavy tradeoffs of linked lists.</td>
        <td><a href="/cpp/container/vector/">vector</a>, <a href="/cpp/container/list/">list</a></td>
      </tr>
      <tr>
        <td>Frequent splicing or stable node ownership</td>
        <td><a href="/cpp/container/list/">list</a> or <a href="/cpp/container/forward_list/">forward_list</a></td>
        <td>Node-based structure favors stable references and link-level operations over cache locality.</td>
        <td><a href="/cpp/container/deque/">deque</a>, <a href="/cpp/container/vector/">vector</a></td>
      </tr>
      <tr>
        <td>Sorted key lookup and ordered iteration</td>
        <td><a href="/cpp/container/map/">map</a> or <a href="/cpp/container/set/">set</a></td>
        <td>Tree-based ordering gives deterministic traversal and range queries such as lower/upper bound.</td>
        <td><a href="/cpp/container/unordered_map/">unordered_map</a>, <a href="/cpp/container/flat_map/">flat_map</a></td>
      </tr>
      <tr>
        <td>Fast average-case key lookup</td>
        <td><a href="/cpp/container/unordered_map/">unordered_map</a> or <a href="/cpp/container/unordered_set/">unordered_set</a></td>
        <td>Hash-based access is usually the starting point when ordering is irrelevant.</td>
        <td><a href="/cpp/container/map/">map</a>, <a href="/cpp/container/flat_map/">flat_map</a></td>
      </tr>
      <tr>
        <td>Sorted associative storage with flat contiguous backing</td>
        <td><a href="/cpp/container/flat_map/">flat_map</a> or <a href="/cpp/container/flat_set/">flat_set</a></td>
        <td>Offers sorted semantics with vector-like storage tradeoffs, useful when lookup and locality dominate mutation cost.</td>
        <td><a href="/cpp/container/map/">map</a>, <a href="/cpp/container/unordered_map/">unordered_map</a></td>
      </tr>
      <tr>
        <td>A stack, FIFO queue, or heap-style priority interface</td>
        <td><a href="/cpp/container/stack/">stack</a>, <a href="/cpp/container/queue/">queue</a>, or <a href="/cpp/container/priority_queue/">priority_queue</a></td>
        <td>These adaptors intentionally expose a narrower API than their underlying storage container.</td>
        <td><a href="/cpp/container/deque/">deque</a>, <a href="/cpp/container/vector/">vector</a></td>
      </tr>
      <tr>
        <td>Non-owning access to contiguous data</td>
        <td><a href="/cpp/container/span/">span</a></td>
        <td>A view over existing memory when you do not want ownership or reallocation behavior.</td>
        <td><a href="/cpp/container/mdspan/">mdspan</a>, <a href="/cpp/ranges/">ranges views</a></td>
      </tr>
      <tr>
        <td>Multidimensional indexing without owning storage</td>
        <td><a href="/cpp/container/mdspan/">mdspan</a></td>
        <td>Models extents, layout, and accessor policy for array-like multidimensional data.</td>
        <td><a href="/cpp/container/span/">span</a>, <a href="/cpp/container/array/">array</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Container Families

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Family</th>
        <th>Representative types</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sequence containers</td>
        <td><a href="/cpp/container/vector/">vector</a>, <a href="/cpp/container/deque/">deque</a>, <a href="/cpp/container/list/">list</a>, <a href="/cpp/container/forward_list/">forward_list</a></td>
        <td>Owning ordered collections where element position matters more than key lookup.</td>
      </tr>
      <tr>
        <td>Ordered associative containers</td>
        <td><a href="/cpp/container/map/">map</a>, <a href="/cpp/container/set/">set</a>, <a href="/cpp/container/multimap/">multimap</a>, <a href="/cpp/container/multiset/">multiset</a></td>
        <td>Sorted key-based storage with logarithmic lookup and ordered traversal.</td>
      </tr>
      <tr>
        <td>Unordered associative containers</td>
        <td><a href="/cpp/container/unordered_map/">unordered_map</a>, <a href="/cpp/container/unordered_set/">unordered_set</a>, <a href="/cpp/container/unordered_multimap/">unordered_multimap</a>, <a href="/cpp/container/unordered_multiset/">unordered_multiset</a></td>
        <td>Hash-based key lookup when iteration order is not part of the problem.</td>
      </tr>
      <tr>
        <td>Container adaptors</td>
        <td><a href="/cpp/container/stack/">stack</a>, <a href="/cpp/container/queue/">queue</a>, <a href="/cpp/container/priority_queue/">priority_queue</a></td>
        <td>Restricted queue/stack/priority interfaces layered over another container.</td>
      </tr>
      <tr>
        <td>Fixed-capacity and contiguous tools</td>
        <td><a href="/cpp/container/array/">array</a>, <a href="/cpp/container/inplace_vector/">inplace_vector</a>, <a href="/cpp/container/vector/">vector</a></td>
        <td>Storage with strong locality properties where capacity model is a major choice.</td>
      </tr>
      <tr>
        <td>View-like access surfaces</td>
        <td><a href="/cpp/container/span/">span</a>, <a href="/cpp/container/mdspan/">mdspan</a></td>
        <td>Data access without ownership, especially for APIs, slices, and multidimensional layouts.</td>
      </tr>
      <tr>
        <td>Flat associative additions</td>
        <td><a href="/cpp/container/flat_map/">flat_map</a>, <a href="/cpp/container/flat_set/">flat_set</a>, <a href="/cpp/container/flat_multimap/">flat_multimap</a>, <a href="/cpp/container/flat_multiset/">flat_multiset</a></td>
        <td>Sorted associative semantics backed by flat storage, introduced for newer locality-oriented use cases.</td>
      </tr>
    </tbody>
  </table>
</div>

## Ownership And Access Model

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Model</th>
        <th>Choose it when</th>
        <th>Typical types</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Owning dynamic container</td>
        <td>You want the container to manage element lifetime and usually allow growth or mutation.</td>
        <td><a href="/cpp/container/vector/">vector</a>, <a href="/cpp/container/map/">map</a>, <a href="/cpp/container/unordered_map/">unordered_map</a></td>
      </tr>
      <tr>
        <td>Owning fixed-size storage</td>
        <td>The size or capacity model is constrained up front and allocation behavior matters.</td>
        <td><a href="/cpp/container/array/">array</a>, <a href="/cpp/container/inplace_vector/">inplace_vector</a></td>
      </tr>
      <tr>
        <td>Non-owning contiguous view</td>
        <td>You are borrowing data from elsewhere and want to pass it safely without copying.</td>
        <td><a href="/cpp/container/span/">span</a></td>
      </tr>
      <tr>
        <td>Non-owning multidimensional view</td>
        <td>You need indexing and layout metadata over existing multidimensional storage.</td>
        <td><a href="/cpp/container/mdspan/">mdspan</a></td>
      </tr>
      <tr>
        <td>Interface adaptor over another container</td>
        <td>You want queue, stack, or heap behavior and intentionally do not want the full underlying container API.</td>
        <td><a href="/cpp/container/stack/">stack</a>, <a href="/cpp/container/queue/">queue</a>, <a href="/cpp/container/priority_queue/">priority_queue</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Recent Standard Additions

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Standard</th>
        <th>Notable additions</th>
        <th>Why it changes navigation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">C++11</span></td>
        <td><a href="/cpp/container/array/">array</a>, <a href="/cpp/container/forward_list/">forward_list</a>, <a href="/cpp/container/unordered_map/">unordered associative containers</a></td>
        <td>Introduced modern fixed-size and hash-based container choices into the main decision tree.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++20</span></td>
        <td><a href="/cpp/container/span/">span</a></td>
        <td>Made non-owning contiguous views a first-class route instead of treating borrowed arrays as raw pointers only.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++23</span></td>
        <td><a href="/cpp/container/flat_map/">flat_map</a>, <a href="/cpp/container/flat_set/">flat_set</a>, <a href="/cpp/container/mdspan/">mdspan</a></td>
        <td>Added locality-oriented sorted associative containers and multidimensional access models.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++26</span></td>
        <td><a href="/cpp/container/inplace_vector/">inplace_vector</a></td>
        <td>Provides a standard fixed-capacity vector-like option between `array` and dynamically growing `vector`.</td>
      </tr>
    </tbody>
  </table>
</div>

## Related Navigation

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/ranges/">Ranges</a></h3>
    <p class="card-desc">Use ranges when the main problem is traversal pipelines, lazy views, and adaptor composition rather than container ownership.</p>
    <p class="card-links"><a href="/cpp/iterator/">Iterators</a> · <a href="/cpp/algorithm/">Algorithms</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/string/">Strings</a></h3>
    <p class="card-desc">`basic_string` and `basic_string_view` often feel container-like, but text, encodings, literals, and conversion concerns live in the string hub.</p>
    <p class="card-links"><a href="/cpp/string/basic_string/">basic_string</a> · <a href="/cpp/string/basic_string_view/">basic_string_view</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/named_req/container/">Named requirements</a></h3>
    <p class="card-desc">Use the requirements pages when you need the formal semantic contracts shared by container families.</p>
    <p class="card-links"><a href="/cpp/named_req/sequencecontainer/">SequenceContainer</a> · <a href="/cpp/named_req/associativecontainer/">AssociativeContainer</a> · <a href="/cpp/named_req/unorderedassociativecontainer/">UnorderedAssociativeContainer</a></p>
  </section>
</div>

<section class="overview-see-also" aria-labelledby="container-see-also">
  <p id="container-see-also" class="overview-minor-heading">See also</p>
  <div class="overview-link-chip-list">
    <a class="overview-link-chip" href="/cpp/named_req/container/">Container</a>
    <a class="overview-link-chip" href="/cpp/named_req/sequencecontainer/">SequenceContainer</a>
    <a class="overview-link-chip" href="/cpp/named_req/contiguouscontainer/">ContiguousContainer</a>
    <a class="overview-link-chip" href="/cpp/named_req/reversiblecontainer/">ReversibleContainer</a>
    <a class="overview-link-chip" href="/cpp/named_req/associativecontainer/">AssociativeContainer</a>
    <a class="overview-link-chip" href="/cpp/named_req/allocatorawarecontainer/">AllocatorAwareContainer</a>
    <a class="overview-link-chip" href="/cpp/named_req/unorderedassociativecontainer/">UnorderedAssociativeContainer</a>
    <a class="overview-link-chip" href="/cpp/numeric/valarray/">valarray</a>
    <a class="overview-link-chip" href="/cpp/string/basic_string/">basic_string</a>
    <a class="overview-link-chip" href="/cpp/string/basic_string_view/">basic_string_view</a>
  </div>
</section>

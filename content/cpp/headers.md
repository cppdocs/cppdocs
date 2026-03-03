---
title: "C++ Standard Library headers"
description: "Curated entry point for C++ library headers: choose by task, library family, or standard version instead of scanning a flat list."
source_path: "cpp/headers"
category: "headers"
layout: "standard-library"
---

The C++ standard library is delivered through headers, but most readers do not start from a raw alphabetical list. This page groups headers by job, library family, and standard version so you can move from a task to the right include quickly.

<div class="overview-note">
This page is a curated hub for choosing the right header family. If you already know the exact header name and want the full flat index, jump to <a href="/cpp/header/">all C++ standard library headers</a>.
</div>

## Start By Task

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/container/">Store and traverse data</a></h3>
    <p class="card-desc">Containers, iterator entry points, views, and lightweight object wrappers used to move data through generic code.</p>
    <p class="card-links"><a href="/cpp/header/vector/"><code>&lt;vector&gt;</code></a> · <a href="/cpp/header/map/"><code>&lt;map&gt;</code></a> · <a href="/cpp/header/span/"><code>&lt;span&gt;</code></a> · <a href="/cpp/header/ranges/"><code>&lt;ranges&gt;</code></a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/algorithm/">Search, transform, and compute</a></h3>
    <p class="card-desc">Generic algorithms, reductions, random engines, numeric helpers, chrono, and newer math-oriented facilities.</p>
    <p class="card-links"><a href="/cpp/header/algorithm/"><code>&lt;algorithm&gt;</code></a> · <a href="/cpp/header/numeric/"><code>&lt;numeric&gt;</code></a> · <a href="/cpp/header/random/"><code>&lt;random&gt;</code></a> · <a href="/cpp/header/chrono/"><code>&lt;chrono&gt;</code></a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/text/">Process text and I/O</a></h3>
    <p class="card-desc">Strings, formatting, streams, filesystems, regex, locale, and newer text encoding facilities.</p>
    <p class="card-links"><a href="/cpp/header/string/"><code>&lt;string&gt;</code></a> · <a href="/cpp/header/format/"><code>&lt;format&gt;</code></a> · <a href="/cpp/header/filesystem/"><code>&lt;filesystem&gt;</code></a> · <a href="/cpp/header/regex/"><code>&lt;regex&gt;</code></a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/">Build vocabulary and support types</a></h3>
    <p class="card-desc">Pairs, tuples, optionals, variants, callable wrappers, type traits, concepts, and other language support utilities.</p>
    <p class="card-links"><a href="/cpp/header/utility/"><code>&lt;utility&gt;</code></a> · <a href="/cpp/header/tuple/"><code>&lt;tuple&gt;</code></a> · <a href="/cpp/header/optional/"><code>&lt;optional&gt;</code></a> · <a href="/cpp/header/type_traits/"><code>&lt;type_traits&gt;</code></a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/memory/">Manage memory and lifetime</a></h3>
    <p class="card-desc">Allocation primitives, smart pointers, allocators, polymorphic memory resources, and uninitialized storage helpers.</p>
    <p class="card-links"><a href="/cpp/header/memory/"><code>&lt;memory&gt;</code></a> · <a href="/cpp/header/new/"><code>&lt;new&gt;</code></a> · <a href="/cpp/header/scoped_allocator/"><code>&lt;scoped_allocator&gt;</code></a> · <a href="/cpp/header/memory_resource/"><code>&lt;memory_resource&gt;</code></a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/thread/">Coordinate threads and shared state</a></h3>
    <p class="card-desc">Thread creation, atomics, locks, futures, stop tokens, barriers, semaphores, and newer low-level concurrency building blocks.</p>
    <p class="card-links"><a href="/cpp/header/thread/"><code>&lt;thread&gt;</code></a> · <a href="/cpp/header/atomic/"><code>&lt;atomic&gt;</code></a> · <a href="/cpp/header/mutex/"><code>&lt;mutex&gt;</code></a> · <a href="/cpp/header/stop_token/"><code>&lt;stop_token&gt;</code></a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need to...</th>
        <th>Start with</th>
        <th>Common headers</th>
        <th>Related section</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Own, index, or organize collections</td>
        <td>Sequence and associative containers</td>
        <td><code>&lt;vector&gt;</code>, <code>&lt;deque&gt;</code>, <code>&lt;map&gt;</code>, <code>&lt;unordered_map&gt;</code>, <code>&lt;flat_map&gt;</code></td>
        <td><a href="/cpp/container/">Containers</a></td>
      </tr>
      <tr>
        <td>Express non-owning views over data</td>
        <td>Ranges and span-like interfaces</td>
        <td><code>&lt;span&gt;</code>, <code>&lt;string_view&gt;</code>, <code>&lt;ranges&gt;</code>, <code>&lt;mdspan&gt;</code></td>
        <td><a href="/cpp/ranges/">Ranges</a>, <a href="/cpp/string/">Strings</a></td>
      </tr>
      <tr>
        <td>Search, sort, compare, or reduce values</td>
        <td>Generic algorithms and numeric helpers</td>
        <td><code>&lt;algorithm&gt;</code>, <code>&lt;numeric&gt;</code>, <code>&lt;execution&gt;</code>, <code>&lt;functional&gt;</code></td>
        <td><a href="/cpp/algorithm/">Algorithms</a>, <a href="/cpp/numeric/">Numerics</a></td>
      </tr>
      <tr>
        <td>Format, parse, or stream text</td>
        <td>String and I/O facilities</td>
        <td><code>&lt;string&gt;</code>, <code>&lt;format&gt;</code>, <code>&lt;print&gt;</code>, <code>&lt;iostream&gt;</code>, <code>&lt;spanstream&gt;</code></td>
        <td><a href="/cpp/io/">I/O</a>, <a href="/cpp/text/">Text</a></td>
      </tr>
      <tr>
        <td>Work with files, paths, and OS-facing text</td>
        <td>Filesystem and locale-aware processing</td>
        <td><code>&lt;filesystem&gt;</code>, <code>&lt;fstream&gt;</code>, <code>&lt;locale&gt;</code>, <code>&lt;codecvt&gt;</code>, <code>&lt;text_encoding&gt;</code></td>
        <td><a href="/cpp/filesystem/">Filesystem</a>, <a href="/cpp/locale/">Locale</a></td>
      </tr>
      <tr>
        <td>Represent optional, variant, or error-carrying values</td>
        <td>Vocabulary types</td>
        <td><code>&lt;optional&gt;</code>, <code>&lt;variant&gt;</code>, <code>&lt;any&gt;</code>, <code>&lt;expected&gt;</code></td>
        <td><a href="/cpp/utility/">Utility</a>, <a href="/cpp/error/">Diagnostics</a></td>
      </tr>
      <tr>
        <td>Share work across threads</td>
        <td>Thread and synchronization facilities</td>
        <td><code>&lt;thread&gt;</code>, <code>&lt;mutex&gt;</code>, <code>&lt;future&gt;</code>, <code>&lt;barrier&gt;</code>, <code>&lt;semaphore&gt;</code></td>
        <td><a href="/cpp/thread/">Thread support</a>, <a href="/cpp/atomic/">Atomic operations</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Header Families

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Family</th>
        <th>Representative headers</th>
        <th>Use this family for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Language support and traits</td>
        <td><a href="/cpp/header/type_traits/"><code>&lt;type_traits&gt;</code></a>, <a href="/cpp/header/typeindex/"><code>&lt;typeindex&gt;</code></a>, <a href="/cpp/header/typeinfo/"><code>&lt;typeinfo&gt;</code></a>, <a href="/cpp/header/concepts/"><code>&lt;concepts&gt;</code></a>, <a href="/cpp/header/compare/"><code>&lt;compare&gt;</code></a></td>
        <td>Compile-time inspection, constraints, type relationships, and comparison categories.</td>
      </tr>
      <tr>
        <td>Utilities and vocabulary types</td>
        <td><a href="/cpp/header/utility/"><code>&lt;utility&gt;</code></a>, <a href="/cpp/header/tuple/"><code>&lt;tuple&gt;</code></a>, <a href="/cpp/header/optional/"><code>&lt;optional&gt;</code></a>, <a href="/cpp/header/variant/"><code>&lt;variant&gt;</code></a>, <a href="/cpp/header/expected/"><code>&lt;expected&gt;</code></a></td>
        <td>Pairs, tuples, monadic-style value wrappers, and common glue types used across the library.</td>
      </tr>
      <tr>
        <td>Containers and storage</td>
        <td><a href="/cpp/header/vector/"><code>&lt;vector&gt;</code></a>, <a href="/cpp/header/list/"><code>&lt;list&gt;</code></a>, <a href="/cpp/header/map/"><code>&lt;map&gt;</code></a>, <a href="/cpp/header/unordered_map/"><code>&lt;unordered_map&gt;</code></a>, <a href="/cpp/header/inplace_vector/"><code>&lt;inplace_vector&gt;</code></a></td>
        <td>Owning data structures and their specialized storage/performance tradeoffs.</td>
      </tr>
      <tr>
        <td>Iterators, views, and ranges</td>
        <td><a href="/cpp/header/iterator/"><code>&lt;iterator&gt;</code></a>, <a href="/cpp/header/span/"><code>&lt;span&gt;</code></a>, <a href="/cpp/header/string_view/"><code>&lt;string_view&gt;</code></a>, <a href="/cpp/header/ranges/"><code>&lt;ranges&gt;</code></a>, <a href="/cpp/header/mdspan/"><code>&lt;mdspan&gt;</code></a></td>
        <td>Non-owning traversal, iterator categories, lazy views, and multidimensional data access.</td>
      </tr>
      <tr>
        <td>Algorithms and callable support</td>
        <td><a href="/cpp/header/algorithm/"><code>&lt;algorithm&gt;</code></a>, <a href="/cpp/header/execution/"><code>&lt;execution&gt;</code></a>, <a href="/cpp/header/functional/"><code>&lt;functional&gt;</code></a></td>
        <td>Generic processing, projections/predicates, comparison helpers, and policy-based execution.</td>
      </tr>
      <tr>
        <td>Numerics and random</td>
        <td><a href="/cpp/header/numeric/"><code>&lt;numeric&gt;</code></a>, <a href="/cpp/header/cmath/"><code>&lt;cmath&gt;</code></a>, <a href="/cpp/header/complex/"><code>&lt;complex&gt;</code></a>, <a href="/cpp/header/random/"><code>&lt;random&gt;</code></a>, <a href="/cpp/header/linalg/"><code>&lt;linalg&gt;</code></a>, <a href="/cpp/header/simd/"><code>&lt;simd&gt;</code></a></td>
        <td>Arithmetic building blocks, statistics/randomness, complex numbers, and newer high-performance numeric APIs.</td>
      </tr>
      <tr>
        <td>Text, formatting, and I/O</td>
        <td><a href="/cpp/header/string/"><code>&lt;string&gt;</code></a>, <a href="/cpp/header/format/"><code>&lt;format&gt;</code></a>, <a href="/cpp/header/print/"><code>&lt;print&gt;</code></a>, <a href="/cpp/header/istream/"><code>&lt;istream&gt;</code></a>, <a href="/cpp/header/spanstream/"><code>&lt;spanstream&gt;</code></a></td>
        <td>String storage, formatting/parsing, stream APIs, and textual presentation.</td>
      </tr>
      <tr>
        <td>Filesystem, locale, and regex</td>
        <td><a href="/cpp/header/filesystem/"><code>&lt;filesystem&gt;</code></a>, <a href="/cpp/header/locale/"><code>&lt;locale&gt;</code></a>, <a href="/cpp/header/regex/"><code>&lt;regex&gt;</code></a>, <a href="/cpp/header/text_encoding/"><code>&lt;text_encoding&gt;</code></a></td>
        <td>Paths, internationalization, pattern matching, and text encoding metadata.</td>
      </tr>
      <tr>
        <td>Memory management</td>
        <td><a href="/cpp/header/new/"><code>&lt;new&gt;</code></a>, <a href="/cpp/header/memory/"><code>&lt;memory&gt;</code></a>, <a href="/cpp/header/scoped_allocator/"><code>&lt;scoped_allocator&gt;</code></a>, <a href="/cpp/header/memory_resource/"><code>&lt;memory_resource&gt;</code></a></td>
        <td>Dynamic allocation, allocator models, smart pointers, and polymorphic memory resources.</td>
      </tr>
      <tr>
        <td>Concurrency and diagnostics</td>
        <td><a href="/cpp/header/thread/"><code>&lt;thread&gt;</code></a>, <a href="/cpp/header/atomic/"><code>&lt;atomic&gt;</code></a>, <a href="/cpp/header/future/"><code>&lt;future&gt;</code></a>, <a href="/cpp/header/debugging/"><code>&lt;debugging&gt;</code></a>, <a href="/cpp/header/stacktrace/"><code>&lt;stacktrace&gt;</code></a>, <a href="/cpp/header/stop_token/"><code>&lt;stop_token&gt;</code></a></td>
        <td>Shared-state concurrency, synchronization, task results, cancellation, and runtime debugging support.</td>
      </tr>
      <tr>
        <td>C compatibility surface</td>
        <td><a href="/cpp/header/cstdio/"><code>&lt;cstdio&gt;</code></a>, <a href="/cpp/header/cstdlib/"><code>&lt;cstdlib&gt;</code></a>, <a href="/cpp/header/cstring/"><code>&lt;cstring&gt;</code></a>, <a href="/cpp/header/cmath/"><code>&lt;cmath&gt;</code></a>, <a href="/cpp/header/cassert/"><code>&lt;cassert&gt;</code></a></td>
        <td>Standard C library facilities exposed through the C++ header model, usually in namespace <code>std</code>.</td>
      </tr>
    </tbody>
  </table>
</div>

## Headers Added In Newer Standards

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Standard</th>
        <th>Notable headers</th>
        <th>What changed</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">C++11</span></td>
        <td><a href="/cpp/header/array/"><code>&lt;array&gt;</code></a>, <a href="/cpp/header/chrono/"><code>&lt;chrono&gt;</code></a>, <a href="/cpp/header/condition_variable/"><code>&lt;condition_variable&gt;</code></a>, <a href="/cpp/header/forward_list/"><code>&lt;forward_list&gt;</code></a>, <a href="/cpp/header/future/"><code>&lt;future&gt;</code></a>, <a href="/cpp/header/random/"><code>&lt;random&gt;</code></a>, <a href="/cpp/header/regex/"><code>&lt;regex&gt;</code></a>, <a href="/cpp/header/thread/"><code>&lt;thread&gt;</code></a>, <a href="/cpp/header/type_traits/"><code>&lt;type_traits&gt;</code></a>, <a href="/cpp/header/unordered_map/"><code>&lt;unordered_map&gt;</code></a></td>
        <td>Modernized the library baseline with concurrency, type traits, chrono, regex, and unordered containers.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++14</span></td>
        <td><a href="/cpp/header/shared_mutex/"><code>&lt;shared_mutex&gt;</code></a></td>
        <td>Added shared locking primitives.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++17</span></td>
        <td><a href="/cpp/header/any/"><code>&lt;any&gt;</code></a>, <a href="/cpp/header/charconv/"><code>&lt;charconv&gt;</code></a>, <a href="/cpp/header/execution/"><code>&lt;execution&gt;</code></a>, <a href="/cpp/header/filesystem/"><code>&lt;filesystem&gt;</code></a>, <a href="/cpp/header/memory_resource/"><code>&lt;memory_resource&gt;</code></a>, <a href="/cpp/header/optional/"><code>&lt;optional&gt;</code></a>, <a href="/cpp/header/string_view/"><code>&lt;string_view&gt;</code></a>, <a href="/cpp/header/variant/"><code>&lt;variant&gt;</code></a></td>
        <td>Added vocabulary types, filesystem, string views, text conversion, and parallel algorithm support.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++20</span></td>
        <td><a href="/cpp/header/barrier/"><code>&lt;barrier&gt;</code></a>, <a href="/cpp/header/bit/"><code>&lt;bit&gt;</code></a>, <a href="/cpp/header/compare/"><code>&lt;compare&gt;</code></a>, <a href="/cpp/header/concepts/"><code>&lt;concepts&gt;</code></a>, <a href="/cpp/header/format/"><code>&lt;format&gt;</code></a>, <a href="/cpp/header/latch/"><code>&lt;latch&gt;</code></a>, <a href="/cpp/header/ranges/"><code>&lt;ranges&gt;</code></a>, <a href="/cpp/header/semaphore/"><code>&lt;semaphore&gt;</code></a>, <a href="/cpp/header/source_location/"><code>&lt;source_location&gt;</code></a>, <a href="/cpp/header/stop_token/"><code>&lt;stop_token&gt;</code></a>, <a href="/cpp/header/syncstream/"><code>&lt;syncstream&gt;</code></a></td>
        <td>Brought concepts, ranges, richer synchronization, formatting, and better low-level utility support.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++23</span></td>
        <td><a href="/cpp/header/expected/"><code>&lt;expected&gt;</code></a>, <a href="/cpp/header/flat_map/"><code>&lt;flat_map&gt;</code></a>, <a href="/cpp/header/flat_set/"><code>&lt;flat_set&gt;</code></a>, <a href="/cpp/header/generator/"><code>&lt;generator&gt;</code></a>, <a href="/cpp/header/mdspan/"><code>&lt;mdspan&gt;</code></a>, <a href="/cpp/header/print/"><code>&lt;print&gt;</code></a>, <a href="/cpp/header/spanstream/"><code>&lt;spanstream&gt;</code></a>, <a href="/cpp/header/stacktrace/"><code>&lt;stacktrace&gt;</code></a></td>
        <td>Added modern error transport, new flat containers, coroutine generator support, and improved output APIs.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++26</span></td>
        <td><a href="/cpp/header/debugging/"><code>&lt;debugging&gt;</code></a>, <a href="/cpp/header/hazard_pointer/"><code>&lt;hazard_pointer&gt;</code></a>, <a href="/cpp/header/inplace_vector/"><code>&lt;inplace_vector&gt;</code></a>, <a href="/cpp/header/linalg/"><code>&lt;linalg&gt;</code></a>, <a href="/cpp/header/rcu/"><code>&lt;rcu&gt;</code></a>, <a href="/cpp/header/simd/"><code>&lt;simd&gt;</code></a>, <a href="/cpp/header/text_encoding/"><code>&lt;text_encoding&gt;</code></a></td>
        <td>Extends the library with low-level concurrent reclamation, fixed-capacity containers, numerics, SIMD, and encoding metadata.</td>
      </tr>
    </tbody>
  </table>
</div>

## Include, Import, And Modules

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Model</th>
        <th>Form</th>
        <th>Choose it when</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Classic include</td>
        <td><code>#include &lt;vector&gt;</code></td>
        <td>You need the most portable and currently most universal way to access library declarations.</td>
      </tr>
      <tr>
        <td>Header unit import</td>
        <td><code>import &lt;vector&gt;;</code></td>
        <td>Your toolchain supports importing library headers as header units and you are already using modules-aware builds.</td>
      </tr>
      <tr>
        <td>Named library module</td>
        <td><code>import std;</code> or <code>import std.compat;</code></td>
        <td>You want the standardized library module surface instead of importing many separate headers one by one.</td>
      </tr>
    </tbody>
  </table>
</div>

`std.compat` corresponds to the compatibility-oriented surface that also makes the C-library-derived names available in the traditional way. For most current codebases, headers remain the baseline entry point even if module support is being introduced incrementally.

## C Compatibility Headers

The `c...` headers are the C++ wrappers around the C standard library. They are usually the preferred spelling in C++ code because they fit the C++ header model and commonly provide declarations in namespace `std`.

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>C++ header</th>
        <th>Legacy C name</th>
        <th>Typical use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="/cpp/header/cstdio/"><code>&lt;cstdio&gt;</code></a></td>
        <td><code>&lt;stdio.h&gt;</code></td>
        <td>FILE-based I/O, formatted printing, and stream-like C APIs.</td>
      </tr>
      <tr>
        <td><a href="/cpp/header/cstdlib/"><code>&lt;cstdlib&gt;</code></a></td>
        <td><code>&lt;stdlib.h&gt;</code></td>
        <td>Conversion, allocation, process control, and miscellaneous runtime utilities.</td>
      </tr>
      <tr>
        <td><a href="/cpp/header/cstring/"><code>&lt;cstring&gt;</code></a></td>
        <td><code>&lt;string.h&gt;</code></td>
        <td>Byte-string manipulation and memory block operations.</td>
      </tr>
      <tr>
        <td><a href="/cpp/header/cmath/"><code>&lt;cmath&gt;</code></a></td>
        <td><code>&lt;math.h&gt;</code></td>
        <td>Mathematical functions and classification utilities.</td>
      </tr>
      <tr>
        <td><a href="/cpp/header/cassert/"><code>&lt;cassert&gt;</code></a></td>
        <td><code>&lt;assert.h&gt;</code></td>
        <td>Assertions controlled by <code>NDEBUG</code>.</td>
      </tr>
    </tbody>
  </table>
</div>

## See also

- [All C++ standard library headers](/cpp/header/)
- [C standard library headers](/c/header/)
- [C++ Standard Library overview](/cpp/standard_library/)

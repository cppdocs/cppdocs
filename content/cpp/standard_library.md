---
title: "C++ Standard Library"
description: "Overview of the major library families, header entry points, and modern include/import models."
source_path: "cpp/standard_library"
category: "standard_library"
layout: "standard-library"
---

The C++ standard library provides the reusable building blocks of the language: containers, algorithms, numerics, strings, I/O, concurrency, utilities, and the language support facilities that make the rest of the library work.

<div class="overview-note">
This page is an overview hub, not just a raw converted reference leaf. Use it to choose the right library area first, then jump into the more detailed section or header pages.
</div>

## Library Families

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/">Foundations and utilities</a></h3>
    <p class="card-desc">General-purpose support types, tuples, pairs, optionals, variants, formatting helpers, and language support utilities.</p>
    <p class="card-links"><a href="/cpp/types/">Type support</a> · <a href="/cpp/concepts/">Concepts</a> · <a href="/cpp/standard_library/synth-three-way/">synth-three-way</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/container/">Containers and access</a></h3>
    <p class="card-desc">Sequence, associative, and adaptor containers together with iterators and range-based traversal models.</p>
    <p class="card-links"><a href="/cpp/iterator/">Iterators</a> · <a href="/cpp/ranges/">Ranges</a> · <a href="/cpp/string/">Strings</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/algorithm/">Algorithms and numerics</a></h3>
    <p class="card-desc">Search, sort, transform, reduce, random generation, mathematical constants, and numeric computation support.</p>
    <p class="card-links"><a href="/cpp/numeric/">Numerics</a> · <a href="/cpp/chrono/">Chrono</a> · <a href="/cpp/utility/format/">Formatting</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/io/">Text, I/O, and locale</a></h3>
    <p class="card-desc">Stream I/O, regular expressions, locale-aware processing, and newer text formatting and encoding facilities.</p>
    <p class="card-links"><a href="/cpp/text/">Text processing</a> · <a href="/cpp/regex/">Regex</a> · <a href="/cpp/locale/">Locale</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/memory/">Memory and lifetime</a></h3>
    <p class="card-desc">Dynamic allocation, allocators, smart pointers, uninitialized memory algorithms, and object-lifetime helpers.</p>
    <p class="card-links"><a href="/cpp/memory/new/">operator new/delete</a> · <a href="/cpp/memory/shared_ptr/">shared_ptr</a> · <a href="/cpp/memory/allocator/">allocator</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/thread/">Concurrency and runtime</a></h3>
    <p class="card-desc">Threads, atomics, synchronization primitives, futures, stop tokens, and execution-oriented support.</p>
    <p class="card-links"><a href="/cpp/atomic/">Atomics</a> · <a href="/cpp/error/">Diagnostics</a> · <a href="/cpp/execution/">Execution</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Area</th>
        <th>What it covers</th>
        <th>Start here</th>
        <th>Typical headers</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Language support</td>
        <td>Core facilities the language relies on, such as allocation, exceptions, RTTI, and utility building blocks.</td>
        <td><a href="/cpp/utility/">Utility</a>, <a href="/cpp/types/">Type support</a>, <a href="/cpp/error/">Error handling</a></td>
        <td><code>&lt;new&gt;</code>, <code>&lt;type_traits&gt;</code>, <code>&lt;exception&gt;</code>, <code>&lt;compare&gt;</code></td>
      </tr>
      <tr>
        <td>Data structures</td>
        <td>Owning collections, views, iterators, and string abstractions for storing and traversing data.</td>
        <td><a href="/cpp/container/">Containers</a>, <a href="/cpp/iterator/">Iterators</a>, <a href="/cpp/ranges/">Ranges</a></td>
        <td><code>&lt;vector&gt;</code>, <code>&lt;map&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;ranges&gt;</code></td>
      </tr>
      <tr>
        <td>Algorithms and numerics</td>
        <td>Generic algorithms, arithmetic helpers, random engines, math utilities, and time utilities.</td>
        <td><a href="/cpp/algorithm/">Algorithms</a>, <a href="/cpp/numeric/">Numerics</a>, <a href="/cpp/chrono/">Chrono</a></td>
        <td><code>&lt;algorithm&gt;</code>, <code>&lt;numeric&gt;</code>, <code>&lt;random&gt;</code>, <code>&lt;chrono&gt;</code></td>
      </tr>
      <tr>
        <td>Text and I/O</td>
        <td>Streams, file system interaction, regular expressions, localization, and text formatting/encoding.</td>
        <td><a href="/cpp/io/">I/O</a>, <a href="/cpp/text/">Text</a>, <a href="/cpp/locale/">Locale</a>, <a href="/cpp/regex/">Regex</a></td>
        <td><code>&lt;iostream&gt;</code>, <code>&lt;format&gt;</code>, <code>&lt;regex&gt;</code>, <code>&lt;text_encoding&gt;</code></td>
      </tr>
      <tr>
        <td>Concurrency</td>
        <td>Shared-state communication, synchronization, atomic operations, and cooperative cancellation.</td>
        <td><a href="/cpp/thread/">Thread support</a>, <a href="/cpp/atomic/">Atomic operations</a></td>
        <td><code>&lt;thread&gt;</code>, <code>&lt;mutex&gt;</code>, <code>&lt;atomic&gt;</code>, <code>&lt;future&gt;</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Headers

Every standard library entity is declared in a header, but the library is easier to navigate if you first choose the correct family and only then the exact header. For a flat list of header pages, see [all C++ standard library headers](/cpp/header/).

### Common Header Groups

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Group</th>
        <th>Representative headers</th>
        <th>Primary destinations</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Containers and views</td>
        <td><a href="/cpp/header/vector/"><code>&lt;vector&gt;</code></a>, <a href="/cpp/header/array/"><code>&lt;array&gt;</code></a>, <a href="/cpp/header/map/"><code>&lt;map&gt;</code></a>, <a href="/cpp/header/span/"><code>&lt;span&gt;</code></a>, <a href="/cpp/header/mdspan/"><code>&lt;mdspan&gt;</code></a></td>
        <td><a href="/cpp/container/">Containers</a>, <a href="/cpp/ranges/">Ranges</a></td>
      </tr>
      <tr>
        <td>Algorithms and numerics</td>
        <td><a href="/cpp/header/algorithm/"><code>&lt;algorithm&gt;</code></a>, <a href="/cpp/header/numeric/"><code>&lt;numeric&gt;</code></a>, <a href="/cpp/header/random/"><code>&lt;random&gt;</code></a>, <a href="/cpp/header/numbers/"><code>&lt;numbers&gt;</code></a>, <a href="/cpp/header/linalg/"><code>&lt;linalg&gt;</code></a></td>
        <td><a href="/cpp/algorithm/">Algorithms</a>, <a href="/cpp/numeric/">Numerics</a></td>
      </tr>
      <tr>
        <td>Text and formatting</td>
        <td><a href="/cpp/header/string/"><code>&lt;string&gt;</code></a>, <a href="/cpp/header/string_view/"><code>&lt;string_view&gt;</code></a>, <a href="/cpp/header/format/"><code>&lt;format&gt;</code></a>, <a href="/cpp/header/regex/"><code>&lt;regex&gt;</code></a>, <a href="/cpp/header/text_encoding/"><code>&lt;text_encoding&gt;</code></a></td>
        <td><a href="/cpp/string/">Strings</a>, <a href="/cpp/text/">Text processing</a>, <a href="/cpp/regex/">Regex</a></td>
      </tr>
      <tr>
        <td>Memory and utilities</td>
        <td><a href="/cpp/header/memory/"><code>&lt;memory&gt;</code></a>, <a href="/cpp/header/memory_resource/"><code>&lt;memory_resource&gt;</code></a>, <a href="/cpp/header/utility/"><code>&lt;utility&gt;</code></a>, <a href="/cpp/header/optional/"><code>&lt;optional&gt;</code></a>, <a href="/cpp/header/variant/"><code>&lt;variant&gt;</code></a></td>
        <td><a href="/cpp/memory/">Memory</a>, <a href="/cpp/utility/">Utility</a></td>
      </tr>
      <tr>
        <td>Concurrency</td>
        <td><a href="/cpp/header/thread/"><code>&lt;thread&gt;</code></a>, <a href="/cpp/header/mutex/"><code>&lt;mutex&gt;</code></a>, <a href="/cpp/header/atomic/"><code>&lt;atomic&gt;</code></a>, <a href="/cpp/header/future/"><code>&lt;future&gt;</code></a>, <a href="/cpp/header/stop_token/"><code>&lt;stop_token&gt;</code></a></td>
        <td><a href="/cpp/thread/">Thread support</a>, <a href="/cpp/atomic/">Atomic operations</a></td>
      </tr>
    </tbody>
  </table>
</div>

### Headers Added In Newer Standards

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Standard</th>
        <th>Notable headers</th>
        <th>Theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">C++11</span></td>
        <td><a href="/cpp/header/array/"><code>&lt;array&gt;</code></a>, <a href="/cpp/header/chrono/"><code>&lt;chrono&gt;</code></a>, <a href="/cpp/header/condition_variable/"><code>&lt;condition_variable&gt;</code></a>, <a href="/cpp/header/forward_list/"><code>&lt;forward_list&gt;</code></a>, <a href="/cpp/header/future/"><code>&lt;future&gt;</code></a>, <a href="/cpp/header/mutex/"><code>&lt;mutex&gt;</code></a>, <a href="/cpp/header/random/"><code>&lt;random&gt;</code></a>, <a href="/cpp/header/regex/"><code>&lt;regex&gt;</code></a>, <a href="/cpp/header/thread/"><code>&lt;thread&gt;</code></a>, <a href="/cpp/header/tuple/"><code>&lt;tuple&gt;</code></a>, <a href="/cpp/header/type_traits/"><code>&lt;type_traits&gt;</code></a>, <a href="/cpp/header/unordered_map/"><code>&lt;unordered_map&gt;</code></a></td>
        <td>Modern baseline: concurrency, type traits, unordered containers, chrono, regex.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++14</span></td>
        <td><a href="/cpp/header/shared_mutex/"><code>&lt;shared_mutex&gt;</code></a></td>
        <td>Shared locking support.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++17</span></td>
        <td><a href="/cpp/header/any/"><code>&lt;any&gt;</code></a>, <a href="/cpp/header/charconv/"><code>&lt;charconv&gt;</code></a>, <a href="/cpp/header/execution/"><code>&lt;execution&gt;</code></a>, <a href="/cpp/header/filesystem/"><code>&lt;filesystem&gt;</code></a>, <a href="/cpp/header/memory_resource/"><code>&lt;memory_resource&gt;</code></a>, <a href="/cpp/header/optional/"><code>&lt;optional&gt;</code></a>, <a href="/cpp/header/string_view/"><code>&lt;string_view&gt;</code></a>, <a href="/cpp/header/variant/"><code>&lt;variant&gt;</code></a></td>
        <td>Vocabulary types, filesystem, text conversion, and parallel algorithms.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++20</span></td>
        <td><a href="/cpp/header/barrier/"><code>&lt;barrier&gt;</code></a>, <a href="/cpp/header/bit/"><code>&lt;bit&gt;</code></a>, <a href="/cpp/header/compare/"><code>&lt;compare&gt;</code></a>, <a href="/cpp/header/concepts/"><code>&lt;concepts&gt;</code></a>, <a href="/cpp/header/format/"><code>&lt;format&gt;</code></a>, <a href="/cpp/header/latch/"><code>&lt;latch&gt;</code></a>, <a href="/cpp/header/ranges/"><code>&lt;ranges&gt;</code></a>, <a href="/cpp/header/semaphore/"><code>&lt;semaphore&gt;</code></a>, <a href="/cpp/header/span/"><code>&lt;span&gt;</code></a>, <a href="/cpp/header/source_location/"><code>&lt;source_location&gt;</code></a>, <a href="/cpp/header/stop_token/"><code>&lt;stop_token&gt;</code></a>, <a href="/cpp/header/syncstream/"><code>&lt;syncstream&gt;</code></a></td>
        <td>Ranges, concepts, new synchronization primitives, formatting, and comparison support.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++23</span></td>
        <td><a href="/cpp/header/expected/"><code>&lt;expected&gt;</code></a>, <a href="/cpp/header/flat_map/"><code>&lt;flat_map&gt;</code></a>, <a href="/cpp/header/flat_set/"><code>&lt;flat_set&gt;</code></a>, <a href="/cpp/header/generator/"><code>&lt;generator&gt;</code></a>, <a href="/cpp/header/mdspan/"><code>&lt;mdspan&gt;</code></a>, <a href="/cpp/header/print/"><code>&lt;print&gt;</code></a>, <a href="/cpp/header/spanstream/"><code>&lt;spanstream&gt;</code></a>, <a href="/cpp/header/stacktrace/"><code>&lt;stacktrace&gt;</code></a></td>
        <td>Expected-based error transport, modern printing, mdspan, and more flat/generator abstractions.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++26</span></td>
        <td><a href="/cpp/header/debugging/"><code>&lt;debugging&gt;</code></a>, <a href="/cpp/header/hazard_pointer/"><code>&lt;hazard_pointer&gt;</code></a>, <a href="/cpp/header/inplace_vector/"><code>&lt;inplace_vector&gt;</code></a>, <a href="/cpp/header/linalg/"><code>&lt;linalg&gt;</code></a>, <a href="/cpp/header/rcu/"><code>&lt;rcu&gt;</code></a>, <a href="/cpp/header/simd/"><code>&lt;simd&gt;</code></a>, <a href="/cpp/header/text_encoding/"><code>&lt;text_encoding&gt;</code></a></td>
        <td>Low-level concurrency, fixed-capacity containers, linear algebra, SIMD, and text encoding.</td>
      </tr>
    </tbody>
  </table>
</div>

## Using The Library

### Including Headers

The traditional model is `#include`. You include the header that declares the names you want to use, and the declarations become available in the translation unit.

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Model</th>
        <th>Form</th>
        <th>Use when</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Header inclusion</td>
        <td><code>#include &lt;vector&gt;</code></td>
        <td>The default and still the most portable model across current build systems and compilers.</td>
      </tr>
      <tr>
        <td>Header unit import</td>
        <td><code>import &lt;vector&gt;;</code></td>
        <td>You are using C++20 modules support and your toolchain supports importable header units.</td>
      </tr>
      <tr>
        <td>Library module import</td>
        <td><code>import std;</code> or <code>import std.compat;</code></td>
        <td>You want the standardized library module surface introduced for modern module-based code.</td>
      </tr>
    </tbody>
  </table>
</div>

A translation unit may include library headers in any order, and most headers may be included more than once with no additional effect. The notable exception is `cassert`/`assert.h`, whose behavior depends on the current definition of `NDEBUG`.

### Importing Headers

In C++20 and later, implementations may provide importable header units. Conceptually these are still the same library headers, but reached through `import` rather than `#include`.

### Importing Modules

In C++23 and later, the standard library defines two named modules:

- `std` exports the standard library declarations in namespace `std`.
- `std.compat` exports the same declarations and also the global-namespace names corresponding to the C library compatibility surface.

For codebases moving to modules, this gives you a cleaner entry point than importing many individual header units one by one.

## C Library Compatibility

The C++ standard library includes C compatibility headers such as `<cstdio>`, `<cstdlib>`, and `<cmath>`. These provide the C library facilities through the C++ library model, typically in namespace `std`, while some names may also remain available in the global namespace for compatibility.

<div class="overview-note">
If you are writing modern C++, prefer the C++ spellings such as <code>&lt;cstdio&gt;</code> over the legacy C header names such as <code>&lt;stdio.h&gt;</code>, unless you are intentionally working in a mixed C/C++ compatibility context.
</div>

## Defect Reports

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>DR</th>
        <th>Applied to</th>
        <th>Behavior as published</th>
        <th>Correct behavior</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>LWG 1</td>
        <td>C++98</td>
        <td>The language linkages of names from the C standard library were unspecified.</td>
        <td>They are implementation-defined.</td>
      </tr>
      <tr>
        <td>LWG 119</td>
        <td>C++98</td>
        <td>The exception specifications of virtual functions could be strengthened.</td>
        <td>Only non-virtual functions may strengthen them.</td>
      </tr>
      <tr>
        <td>LWG 147</td>
        <td>C++98</td>
        <td>The specification on non-member functions only considered global functions.</td>
        <td>It also considers non-global functions.</td>
      </tr>
      <tr>
        <td>LWG 225</td>
        <td>C++98</td>
        <td>Standard library functions might call non-member functions from other namespaces due to argument-dependent lookup.</td>
        <td>That is prohibited unless otherwise specified.</td>
      </tr>
      <tr>
        <td>LWG 336</td>
        <td>C++98</td>
        <td><code>&lt;strstream&gt;</code> was not a C++ library header.</td>
        <td>It is a C++ library header.</td>
      </tr>
      <tr>
        <td>LWG 343</td>
        <td>C++98</td>
        <td>Library header dependencies were not specified.</td>
        <td>They are specified in the synopses.</td>
      </tr>
      <tr>
        <td>LWG 456</td>
        <td>C++98</td>
        <td>C++ headers for C library facilities could only provide definitions in namespace <code>std</code>.</td>
        <td>They may also define in the global namespace and then inject into <code>std</code>.</td>
      </tr>
      <tr>
        <td>LWG 465</td>
        <td>C++98</td>
        <td>Identifiers that are keywords or operators in C++ could be defined as macros in standard library headers.</td>
        <td>All C++ standard library headers are forbidden from defining them as macros.</td>
      </tr>
      <tr>
        <td>LWG 1178</td>
        <td>C++98</td>
        <td>C++ headers had to include another C++ header containing any needed definition.</td>
        <td>Headers must directly or indirectly provide the declarations and definitions from their synopsis.</td>
      </tr>
      <tr>
        <td>LWG 2013</td>
        <td>C++11</td>
        <td>It was unspecified whether functions not required to be <code>constexpr</code> could still be declared <code>constexpr</code> by the implementation.</td>
        <td>That is prohibited.</td>
      </tr>
      <tr>
        <td>LWG 2225</td>
        <td>C++98</td>
        <td>A diagnostic was required if a header was included at an incorrect position.</td>
        <td>No diagnostic is required.</td>
      </tr>
    </tbody>
  </table>
</div>

---
title: "C++ Reference"
description: "Standard library, language features, and utilities for C++11 through C++26."
source_path: "cpp"
layout: "overview-hub"
overview_page_class: "overview-page-cpp-root"
min_standard_status_hint: "On this page, the filter mainly affects standard-tagged entries such as version-specific rows."
---

C++ spans both a language and a standard library ecosystem. This page is the top-level map of the reference: use it to choose the language rules, library facilities, a specific standard version, or a specialized index. Deeper curated hubs such as <a href="/cpp/ranges/">Ranges</a> and <a href="/cpp/algorithm/">Algorithms</a> are linked as destinations, not redefined here.

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/">Language rules and syntax</a></h3>
    <p class="card-desc">Declarations, types, expressions, classes, templates, object lifetime, and the rules the compiler enforces.</p>
    <p class="card-links"><a href="/cpp/language/classes/">Classes</a> · <a href="/cpp/language/templates/">Templates</a> · <a href="/cpp/language/initialization/">Initialization</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/standard_library/">Standard library overview</a></h3>
    <p class="card-desc">Containers, algorithms, numerics, text, concurrency, memory, utilities, and the header/module entry points for the library.</p>
    <p class="card-links"><a href="/cpp/container/">Containers</a> · <a href="/cpp/io/">I/O</a> · <a href="/cpp/thread/">Concurrency</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/headers/">Choose by header</a></h3>
    <p class="card-desc">Use the curated header hub when you know the include shape you want but need the right family, version, or compatibility path.</p>
    <p class="card-links"><a href="/cpp/header/">All headers</a> · <a href="/cpp/headers/">Header families</a> · <a href="/cpp/standard_library/">Library map</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/20/">Navigate by standard version</a></h3>
    <p class="card-desc">Jump straight to C++11 through C++26 when your codebase or toolchain is anchored to a specific standard revision.</p>
    <p class="card-links"><a href="/cpp/11/">C++11</a> · <a href="/cpp/17/">C++17</a> · <a href="/cpp/20/">C++20</a> · <a href="/cpp/23/">C++23</a></p>
  </section>
</div>

## Language Vs. Library

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Area</th>
        <th>What it answers</th>
        <th>Start with</th>
        <th>Typical topics</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Core language</td>
        <td>How the language itself works: syntax, typing, overload resolution, templates, expressions, storage, object model.</td>
        <td><a href="/cpp/language/">Language</a></td>
        <td><a href="/cpp/language/types/">Types</a>, <a href="/cpp/language/functions/">Functions</a>, <a href="/cpp/language/template_parameters/">Templates</a>, <a href="/cpp/language/raii/">RAII</a></td>
      </tr>
      <tr>
        <td>Standard library</td>
        <td>Which reusable facilities exist and which headers/modules expose them.</td>
        <td><a href="/cpp/standard_library/">Standard library</a></td>
        <td><a href="/cpp/container/">Containers</a>, <a href="/cpp/algorithm/">Algorithms</a>, <a href="/cpp/string/">Strings</a>, <a href="/cpp/thread/">Concurrency</a></td>
      </tr>
      <tr>
        <td>Preprocessor and tokens</td>
        <td>Source transformation before compilation and keyword/token-level reference material.</td>
        <td><a href="/cpp/preprocessor/">Preprocessor</a>, <a href="/cpp/keyword/">Keywords</a></td>
        <td><a href="/cpp/preprocessor/include/">#include</a>, <a href="/cpp/preprocessor/conditional/">conditional compilation</a>, <a href="/cpp/keyword/constexpr/">constexpr</a></td>
      </tr>
      <tr>
        <td>Portability and support status</td>
        <td>Whether a feature exists in a given compiler or standard library and which feature-test macro represents it.</td>
        <td><a href="/cpp/compiler_support/">Compiler support</a>, <a href="/cpp/feature_test/">Feature test macros</a>, <a href="/cpp/freestanding/">Freestanding</a></td>
        <td>Availability tables, macros, hosted vs. freestanding, implementation gaps.</td>
      </tr>
    </tbody>
  </table>
</div>

## Standard Versions

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Standard</th>
        <th>Why you would start there</th>
        <th>Flagship changes</th>
      </tr>
    </thead>
    <tbody>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/11/" data-min-standard-since="C++11">
        <td><span class="overview-chip">C++11</span></td>
        <td><a href="/cpp/11/">The modern baseline</a> for move semantics, lambdas, smart pointers, atomics, and the first big library expansion.</td>
        <td><a href="/cpp/language/lambda/">lambdas</a>, <a href="/cpp/utility/move/">move</a>, <a href="/cpp/thread/">thread support</a>, <a href="/cpp/header/type_traits/"><code>&lt;type_traits&gt;</code></a></td>
      </tr>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/14/" data-min-standard-since="C++14">
        <td><span class="overview-chip">C++14</span></td>
        <td><a href="/cpp/14/">Incremental cleanup</a> when you need the post-C++11 fixes and smaller quality-of-life language improvements.</td>
        <td>Generic lambdas, return type deduction, variable templates, shared locking support.</td>
      </tr>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/17/" data-min-standard-since="C++17">
        <td><span class="overview-chip">C++17</span></td>
        <td><a href="/cpp/17/">Widely deployed production target</a> for filesystem, structured bindings, `if constexpr`, and vocabulary types.</td>
        <td><a href="/cpp/filesystem/">filesystem</a>, <a href="/cpp/utility/optional/">optional</a>, <a href="/cpp/utility/variant/">variant</a>, <a href="/cpp/header/string_view/"><code>&lt;string_view&gt;</code></a></td>
      </tr>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/20/" data-min-standard-since="C++20">
        <td><span class="overview-chip">C++20</span></td>
        <td><a href="/cpp/20/">Feature-heavy modern target</a> for concepts, ranges, coroutines, formatting, and newer concurrency primitives.</td>
        <td><a href="/cpp/concepts/">concepts</a>, <a href="/cpp/ranges/">ranges</a>, <a href="/cpp/coroutine/">coroutines</a>, <a href="/cpp/header/format/"><code>&lt;format&gt;</code></a></td>
      </tr>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/23/" data-min-standard-since="C++23">
        <td><span class="overview-chip">C++23</span></td>
        <td><a href="/cpp/23/">Current language/library refinement wave</a> with expected, print, mdspan, stacktrace, and more library ergonomics.</td>
        <td><a href="/cpp/utility/expected/">expected</a>, <a href="/cpp/header/print/"><code>&lt;print&gt;</code></a>, <a href="/cpp/header/mdspan/"><code>&lt;mdspan&gt;</code></a>, <a href="/cpp/header/stacktrace/"><code>&lt;stacktrace&gt;</code></a></td>
      </tr>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/26/" data-min-standard-since="C++26">
        <td><span class="overview-chip">C++26</span></td>
        <td><a href="/cpp/26/">Forward-looking draft-facing landing</a> for the newest library surfaces and post-C++23 standardization work.</td>
        <td><a href="/cpp/header/debugging/"><code>&lt;debugging&gt;</code></a>, <a href="/cpp/header/inplace_vector/"><code>&lt;inplace_vector&gt;</code></a>, <a href="/cpp/header/linalg/"><code>&lt;linalg&gt;</code></a>, <a href="/cpp/header/simd/"><code>&lt;simd&gt;</code></a></td>
      </tr>
    </tbody>
  </table>
</div>

## Specialized Indexes And Reference Aids

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you already know the shape of what you need</th>
        <th>Go here</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>You know the exact include name or want to browse by header family.</td>
        <td><a href="/cpp/headers/">Curated headers hub</a> or <a href="/cpp/header/">all headers</a></td>
      </tr>
      <tr>
        <td>You want an alphabetic or symbol-driven lookup.</td>
        <td><a href="/cpp/symbol_index/">Symbol index</a>, <a href="/cpp/keyword/">keyword index</a>, <a href="/cpp/keywords/">keywords overview</a></td>
      </tr>
      <tr>
        <td>You need named requirements, compatibility notes, or miscellaneous cross-reference material.</td>
        <td><a href="/cpp/named_req/">Named requirements</a>, <a href="/cpp/meta/">Meta</a>, <a href="/cpp/links/">Legacy links</a></td>
      </tr>
      <tr>
        <td>You are tracking implementation support or feature macros.</td>
        <td><a href="/cpp/compiler_support/">Compiler support</a>, <a href="/cpp/feature_test/">Feature test macros</a>, <a href="/cpp/current_status/">Current status</a></td>
      </tr>
      <tr>
        <td>You need experimental or TS-oriented material outside the standard core/library baseline.</td>
        <td><a href="/cpp/experimental/">Experimental</a></td>
      </tr>
    </tbody>
  </table>
</div>

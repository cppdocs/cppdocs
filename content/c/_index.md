---
title: "C Reference"
description: "Core language rules, standard library families, headers, and navigation paths for the C reference."
source_path: "c"
layout: "overview-hub"
overview_page_class: "overview-page-c-root"
---

C is both a language specification and a standard library. This landing page is the top-level map for the C reference: start here when you need the right branch of the language, the right library family, or a faster route into headers and symbol indexes.

<div class="overview-note">
This root hub is intentionally broad. It points to the main language and library families first, then to the more specialized C-only indexes and bridge pages that still need deeper curation.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/c/language/">Language rules and syntax</a></h3>
    <p class="card-desc">Declarations, expressions, types, initialization, storage duration, functions, and the execution model of the language itself.</p>
    <p class="card-links"><a href="/c/language/declarations/">Declarations</a> · <a href="/c/language/expressions/">Expressions</a> · <a href="/c/language/initialization/">Initialization</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/preprocessor/">Preprocessor and translation</a></h3>
    <p class="card-desc">Macro replacement, conditional inclusion, source file inclusion, line control, and the token-processing steps that happen before compilation.</p>
    <p class="card-links"><a href="/c/preprocessor/include/">#include</a> · <a href="/c/preprocessor/replace/">#define</a> · <a href="/c/preprocessor/conditional/">Conditional inclusion</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/header/">Choose by header family</a></h3>
    <p class="card-desc">Use the header and library-family routes when you know the facility area you need but not yet the exact function or macro name.</p>
    <p class="card-links"><a href="/c/string/">Strings</a> · <a href="/c/io/">I/O</a> · <a href="/c/numeric/">Numerics</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/index/">Find by index</a></h3>
    <p class="card-desc">Jump to index-style routes when you already know the approximate symbol shape, macro family, or entry namespace.</p>
    <p class="card-links"><a href="/c/index/">C index</a> · <a href="/c/keyword/">Keywords</a> · <a href="/c/header/">Headers</a></p>
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
        <td>How C code is parsed and evaluated: types, expressions, declarations, storage duration, initialization, conversions, and program structure.</td>
        <td><a href="/c/language/">Language</a></td>
        <td><a href="/c/language/arithmetic_types/">Arithmetic types</a>, <a href="/c/language/declarations/">Declarations</a>, <a href="/c/language/expressions/">Expressions</a>, <a href="/c/language/lifetime/">Lifetime</a></td>
      </tr>
      <tr>
        <td>Preprocessor</td>
        <td>How source text is transformed before the compiler sees the final translation unit.</td>
        <td><a href="/c/preprocessor/">Preprocessor</a></td>
        <td><a href="/c/preprocessor/include/">#include</a>, <a href="/c/preprocessor/replace/">Macro replacement</a>, <a href="/c/preprocessor/conditional/">Conditional inclusion</a></td>
      </tr>
      <tr>
        <td>Standard library</td>
        <td>Which headers, functions, macros, and support types the C library provides.</td>
        <td><a href="/c/string/">String</a>, <a href="/c/io/">I/O</a>, <a href="/c/numeric/">Numerics</a></td>
        <td><a href="/c/memory/">Memory</a>, <a href="/c/chrono/">Time</a>, <a href="/c/thread/">Threads</a>, <a href="/c/error/">Error handling</a></td>
      </tr>
      <tr>
        <td>Reference aids</td>
        <td>How to browse by keyword, header path, or index rather than by topic-first documentation flow.</td>
        <td><a href="/c/keyword/">Keywords</a>, <a href="/c/header/">Headers</a>, <a href="/c/index/">Index</a></td>
        <td>Tokens, macros, aliases, compatibility entry points, and lookup shortcuts.</td>
      </tr>
    </tbody>
  </table>
</div>

## Library Families

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/c/string/">Strings and memory</a></h3>
    <p class="card-desc">Byte strings, wide strings, memory inspection and copying, and the boundary between raw memory and string-oriented APIs.</p>
    <p class="card-links"><a href="/c/string/">String</a> · <a href="/c/memory/">Memory</a> · <a href="/c/types/">Types</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/io/">Input and output</a></h3>
    <p class="card-desc">Streams, files, buffering, formatted I/O, byte/wide character functions, temporary files, and error-state handling.</p>
    <p class="card-links"><a href="/c/io/fopen/">fopen</a> · <a href="/c/io/fprintf/">fprintf</a> · <a href="/c/io/fflush/">fflush</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/numeric/">Numerics and math</a></h3>
    <p class="card-desc">Mathematical functions, complex arithmetic, floating-point environment, random number generation, and bit utilities.</p>
    <p class="card-links"><a href="/c/numeric/math/">Math</a> · <a href="/c/numeric/complex/">Complex</a> · <a href="/c/numeric/fenv/">Floating-point environment</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/chrono/">Time and date</a></h3>
    <p class="card-desc">Calendar time, broken-down time, clocks, formatting, and portable time measurements.</p>
    <p class="card-links"><a href="/c/chrono/time/">time</a> · <a href="/c/chrono/strftime/">strftime</a> · <a href="/c/chrono/timespec_get/">timespec_get</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/thread/">Concurrency and atomics</a></h3>
    <p class="card-desc">Thread creation and synchronization in C11+, plus the atomic object model, fences, lock-freedom, and memory order.</p>
    <p class="card-links"><a href="/c/thread/">Thread support</a> · <a href="/c/atomic/">Atomics</a> · <a href="/c/atomic/memory_order/">memory_order</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/program/">Program support and diagnostics</a></h3>
    <p class="card-desc">Process control, environment interaction, termination behavior, assertions, errno, and runtime diagnostics.</p>
    <p class="card-links"><a href="/c/program/">Program utilities</a> · <a href="/c/error/">Error handling</a> · <a href="/c/error/assert/">assert</a></p>
  </section>
</div>

## Headers And Indexes

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Use case</th>
        <th>Go here</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>You want to browse the C library by broad header path or compatibility route.</td>
        <td><a href="/c/header/">Header index</a></td>
      </tr>
      <tr>
        <td>You already know the token or language keyword you need.</td>
        <td><a href="/c/keyword/">Keyword index</a></td>
      </tr>
      <tr>
        <td>You want index-style C entry points and macro-oriented lookup paths.</td>
        <td><a href="/c/index/">C index</a></td>
      </tr>
      <tr>
        <td>You need the C++ side of the reference instead of the C side.</td>
        <td><a href="/cpp/">C++ reference</a></td>
      </tr>
    </tbody>
  </table>
</div>

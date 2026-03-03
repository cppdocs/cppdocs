---
title: "Input/output library"
description: "Curated hub for C++ I/O: stream foundations, file and string streams, print-oriented output, syncstream, and C-style compatibility."
source_path: "cpp/io"
category: "io"
layout: "overview-hub"
---

C++ I/O spans several models: classic stream extraction/insertion, file streams, string-backed streams, newer span-backed streams, synchronized output, and modern print-oriented functions. This hub helps you choose the right I/O route first, then drill into the concrete stream or helper type you actually need.

<div class="overview-note">
Use this page for I/O models and navigation. Keep <a href="/cpp/filesystem/">filesystem</a> as the path/filesystem hub, <a href="/cpp/string/">string</a> for textual storage and views, and <a href="/cpp/utility/format/">format</a> for formatting semantics rather than stream transport.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/io/cout/">Console and standard streams</a></h3>
    <p class="card-desc">Start here when you are writing to or reading from the standard process streams and want the usual stream insertion/extraction workflow.</p>
    <p class="card-links"><a href="/cpp/io/cout/">cout</a> · <a href="/cpp/io/cin/">cin</a> · <a href="/cpp/io/cerr/">cerr</a> · <a href="/cpp/io/clog/">clog</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/io/basic_ifstream/">File streams</a></h3>
    <p class="card-desc">Use stream-based file I/O when you want typed extraction/insertion, stream state management, and buffered file access.</p>
    <p class="card-links"><a href="/cpp/io/basic_ifstream/">ifstream</a> · <a href="/cpp/io/basic_ofstream/">ofstream</a> · <a href="/cpp/io/basic_fstream/">fstream</a> · <a href="/cpp/io/basic_filebuf/">filebuf</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/io/basic_istringstream/">String-backed streams</a></h3>
    <p class="card-desc">Choose string streams when you want stream formatting/parsing over an in-memory string buffer instead of a file or console stream.</p>
    <p class="card-links"><a href="/cpp/io/basic_istringstream/">istringstream</a> · <a href="/cpp/io/basic_ostringstream/">ostringstream</a> · <a href="/cpp/io/basic_stringstream/">stringstream</a> · <a href="/cpp/io/basic_stringbuf/">stringbuf</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/io/basic_spanstream/">Span-backed streams</a></h3>
    <p class="card-desc">Use span streams for stream-style operations over an existing span buffer without owning the underlying storage.</p>
    <p class="card-links"><a href="/cpp/io/basic_spanstream/">spanstream</a> · <a href="/cpp/io/basic_ispanstream/">ispanstream</a> · <a href="/cpp/io/basic_ospanstream/">ospanstream</a> · <a href="/cpp/io/basic_spanbuf/">spanbuf</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/io/print/">Modern formatted output</a></h3>
    <p class="card-desc">Prefer print-oriented APIs when you want direct formatted output without building a stream insertion pipeline manually.</p>
    <p class="card-links"><a href="/cpp/io/print/">print</a> · <a href="/cpp/io/println/">println</a> · <a href="/cpp/io/basic_osyncstream/">osyncstream</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/io/c/">C compatibility I/O</a></h3>
    <p class="card-desc">Use the C-style surface when you need `FILE*`, `printf`/`scanf`-style APIs, or compatibility with existing C code.</p>
    <p class="card-links"><a href="/cpp/io/c/">C I/O bridge</a> · <a href="/cpp/header/cstdio/"><code>&lt;cstdio&gt;</code></a> · <a href="/c/io/">C I/O docs</a></p>
  </section>
</div>

## I/O Models

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Model</th>
        <th>Start with</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Stream foundations</td>
        <td><a href="/cpp/io/ios_base/">ios_base</a>, <a href="/cpp/io/basic_ios/">basic_ios</a>, <a href="/cpp/io/basic_streambuf/">basic_streambuf</a></td>
        <td>Understanding stream state, formatting flags, locale interaction, ties, and buffer mechanics.</td>
      </tr>
      <tr>
        <td>Standard process streams</td>
        <td><a href="/cpp/io/cout/">cout</a>, <a href="/cpp/io/cin/">cin</a>, <a href="/cpp/io/cerr/">cerr</a>, <a href="/cpp/io/clog/">clog</a></td>
        <td>Interactive console input/output and process-level logging/error channels.</td>
      </tr>
      <tr>
        <td>File streams</td>
        <td><a href="/cpp/io/basic_ifstream/">ifstream</a>, <a href="/cpp/io/basic_ofstream/">ofstream</a>, <a href="/cpp/io/basic_fstream/">fstream</a></td>
        <td>Buffered file input, output, and read/write stream access with stream semantics.</td>
      </tr>
      <tr>
        <td>String streams</td>
        <td><a href="/cpp/io/basic_istringstream/">istringstream</a>, <a href="/cpp/io/basic_ostringstream/">ostringstream</a>, <a href="/cpp/io/basic_stringstream/">stringstream</a></td>
        <td>Parsing or formatting text in memory using the stream interface.</td>
      </tr>
      <tr>
        <td>Span-backed streams</td>
        <td><a href="/cpp/io/basic_spanstream/">spanstream</a>, <a href="/cpp/io/basic_ispanstream/">ispanstream</a>, <a href="/cpp/io/basic_ospanstream/">ospanstream</a></td>
        <td>Stream-style access over existing contiguous storage, especially when you want non-owning buffers.</td>
      </tr>
      <tr>
        <td>Print-oriented output</td>
        <td><a href="/cpp/io/print/">print</a>, <a href="/cpp/io/println/">println</a></td>
        <td>Direct formatted output using the modern format-based model instead of stream insertion chains.</td>
      </tr>
      <tr>
        <td>Synchronized output</td>
        <td><a href="/cpp/io/basic_osyncstream/">basic_osyncstream</a></td>
        <td>Coordinating output from multiple threads without interleaving chunks unpredictably.</td>
      </tr>
      <tr>
        <td>C compatibility</td>
        <td><a href="/cpp/io/c/">C I/O</a></td>
        <td>`FILE*`-based APIs, compatibility with C code, and traditional formatted I/O families.</td>
      </tr>
    </tbody>
  </table>
</div>

## Quick Choice Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need...</th>
        <th>Start with</th>
        <th>Why</th>
        <th>Common alternative</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Formatted console output in existing stream-heavy code</td>
        <td><a href="/cpp/io/cout/">cout</a> and <a href="/cpp/io/basic_ostream/">ostream</a></td>
        <td>The standard insertion model integrates directly with manipulators and stream state.</td>
        <td><a href="/cpp/io/print/">print</a></td>
      </tr>
      <tr>
        <td>Direct formatted output with less stream boilerplate</td>
        <td><a href="/cpp/io/print/">print</a> or <a href="/cpp/io/println/">println</a></td>
        <td>Uses the modern formatting route and is often simpler when you only need output.</td>
        <td><a href="/cpp/io/cout/">cout</a>, <a href="/cpp/utility/format/">format</a></td>
      </tr>
      <tr>
        <td>File-based text or binary streaming</td>
        <td><a href="/cpp/io/basic_ifstream/">ifstream</a>, <a href="/cpp/io/basic_ofstream/">ofstream</a>, or <a href="/cpp/io/basic_fstream/">fstream</a></td>
        <td>They provide typed stream operations and file ownership on top of file buffers.</td>
        <td><a href="/cpp/io/c/">C I/O</a>, <a href="/cpp/filesystem/">filesystem</a></td>
      </tr>
      <tr>
        <td>Parsing from or formatting to a `std::string`</td>
        <td><a href="/cpp/io/basic_istringstream/">istringstream</a>, <a href="/cpp/io/basic_ostringstream/">ostringstream</a>, or <a href="/cpp/io/basic_stringstream/">stringstream</a></td>
        <td>Lets you reuse the stream extraction/insertion model entirely in memory.</td>
        <td><a href="/cpp/utility/format/">format</a>, <a href="/cpp/string/">string utilities</a></td>
      </tr>
      <tr>
        <td>Stream-style operations over a borrowed buffer</td>
        <td><a href="/cpp/io/basic_spanstream/">spanstream</a> and related span stream types</td>
        <td>Useful when a stream interface is convenient but you do not want string ownership or file handles.</td>
        <td><a href="/cpp/io/basic_stringstream/">stringstream</a>, <a href="/cpp/container/span/">span</a></td>
      </tr>
      <tr>
        <td>Thread-safe grouped output</td>
        <td><a href="/cpp/io/basic_osyncstream/">basic_osyncstream</a></td>
        <td>Buffers output chunks and emits them atomically to the wrapped stream.</td>
        <td><a href="/cpp/io/cout/">cout</a>, <a href="/cpp/io/print/">print</a></td>
      </tr>
      <tr>
        <td>Legacy or C interoperability with `FILE*`</td>
        <td><a href="/cpp/io/c/">C I/O</a></td>
        <td>Required when working with traditional C APIs or `printf`/`scanf` style code.</td>
        <td><a href="/cpp/io/basic_filebuf/">filebuf</a>, <a href="/cpp/io/basic_fstream/">fstream</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Modern Vs. Legacy Routes

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Use case</th>
        <th>Preferred modern route</th>
        <th>Legacy or older route</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Formatted terminal or file output</td>
        <td><a href="/cpp/io/print/">print</a>, <a href="/cpp/io/println/">println</a>, <a href="/cpp/io/basic_ostream/">ostream</a></td>
        <td><a href="/cpp/io/c/">C I/O</a> and manual `printf`-style formatting</td>
      </tr>
      <tr>
        <td>In-memory stream processing</td>
        <td><a href="/cpp/io/basic_stringstream/">stringstream</a>, <a href="/cpp/io/basic_spanstream/">spanstream</a></td>
        <td><a href="/cpp/io/strstream/">strstream</a>, <a href="/cpp/io/istrstream/">istrstream</a>, <a href="/cpp/io/ostrstream/">ostrstream</a>, <a href="/cpp/io/strstreambuf/">strstreambuf</a></td>
      </tr>
      <tr>
        <td>Concurrent output to a shared stream</td>
        <td><a href="/cpp/io/basic_osyncstream/">basic_osyncstream</a></td>
        <td>Manual locking around plain <a href="/cpp/io/basic_ostream/">ostream</a> operations</td>
      </tr>
      <tr>
        <td>Path-oriented file work</td>
        <td><a href="/cpp/filesystem/">filesystem</a> plus file streams when needed</td>
        <td>Mixing all file/path concerns directly into stream-only code</td>
      </tr>
    </tbody>
  </table>
</div>

## Support Types And Stream Plumbing

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Area</th>
        <th>Key pages</th>
        <th>Why you visit it</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Formatting flags and stream state</td>
        <td><a href="/cpp/io/ios_base/">ios_base</a>, <a href="/cpp/io/basic_ios/">basic_ios</a></td>
        <td>When extraction/insertion behavior depends on flags, locale, fill characters, or error bits.</td>
      </tr>
      <tr>
        <td>Underlying buffering</td>
        <td><a href="/cpp/io/basic_streambuf/">basic_streambuf</a>, <a href="/cpp/io/basic_filebuf/">basic_filebuf</a>, <a href="/cpp/io/basic_stringbuf/">basic_stringbuf</a>, <a href="/cpp/io/basic_spanbuf/">basic_spanbuf</a></td>
        <td>When you need lower-level control over the storage or transport behind a stream interface.</td>
      </tr>
      <tr>
        <td>Manipulators and offsets</td>
        <td><a href="/cpp/io/manip/">manipulators</a>, <a href="/cpp/io/fpos/">fpos</a>, <a href="/cpp/io/streamoff/">streamoff</a>, <a href="/cpp/io/streamsize/">streamsize</a></td>
        <td>When formatting, positioning, or size/offset types matter directly.</td>
      </tr>
      <tr>
        <td>I/O error categories</td>
        <td><a href="/cpp/io/io_errc/">io_errc</a></td>
        <td>When integrating stream errors with the broader `error_code` model.</td>
      </tr>
    </tbody>
  </table>
</div>

## Related Navigation

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/filesystem/">Filesystem</a></h3>
    <p class="card-desc">Use filesystem for path manipulation, directory traversal, file status, and file operations outside stream mechanics.</p>
    <p class="card-links"><a href="/cpp/io/basic_ifstream/">ifstream</a> · <a href="/cpp/io/basic_ofstream/">ofstream</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/utility/format/">Format</a></h3>
    <p class="card-desc">Use the formatting library when your main question is format-string semantics or formatter customization rather than I/O transport.</p>
    <p class="card-links"><a href="/cpp/io/print/">print</a> · <a href="/cpp/io/println/">println</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/string/">String</a></h3>
    <p class="card-desc">Use the string hub for owning strings, views, character encodings, literals, and conversions rather than stream wrappers.</p>
    <p class="card-links"><a href="/cpp/io/basic_stringstream/">stringstream</a> · <a href="/cpp/io/basic_stringbuf/">stringbuf</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/error/">Diagnostics</a></h3>
    <p class="card-desc">Use diagnostics for exception types, `error_code`, and broader runtime error handling adjacent to I/O failures.</p>
    <p class="card-links"><a href="/cpp/io/io_errc/">io_errc</a> · <a href="/cpp/error/error_code/">error_code</a></p>
  </section>
</div>

## See also

- [Filesystem library](/cpp/filesystem/)

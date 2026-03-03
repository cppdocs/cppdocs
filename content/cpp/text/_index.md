---
title: "Text processing library"
description: "Curated hub for C++ text processing boundaries: text_encoding, Unicode/encoding identity, and bridges to strings, locale, regex, and formatting."
source_path: "cpp/text"
category: "text"
since: "C++26"
layout: "overview-hub"
---

The C++ text area is intentionally narrow today. Its core standard-library surface is <code>std::text_encoding</code>, which gives programs a vocabulary for talking about ordinary, wide, literal, and environment encodings. This hub exists to route you quickly to that surface and to the adjacent libraries that actually own storage, parsing, matching, or locale behavior.

<div class="overview-note">
Use this page when the question is about encoding identity or about where text-related concerns belong. Keep <a href="/cpp/string/">string</a> for owning and non-owning text containers, <a href="/cpp/locale/locale/">locale</a> for localization and cultural formatting, <a href="/cpp/regex/">regex</a> for pattern matching, and <a href="/cpp/utility/format/">format</a> for output formatting.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/text/text_encoding/">Identify an encoding at runtime or by environment</a></h3>
    <p class="card-desc">Start with <code>std::text_encoding</code> when you need to ask what encoding a literal, locale, or environment is using, or when you need a standard name/MIB-style identity for that encoding.</p>
    <p class="card-links"><a href="/cpp/text/text_encoding/">text_encoding</a> · <a href="/cpp/text/text_encoding/environment/">environment</a> · <a href="/cpp/text/text_encoding/literal/">literal</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/charset/">Understand language-level encodings and character sets</a></h3>
    <p class="card-desc">Use the language route when the issue is source/execution character sets, literal prefixes, or core-language encoding rules rather than a library object.</p>
    <p class="card-links"><a href="/cpp/language/charset/">charset</a> · <a href="/cpp/language/string_literal/">string literals</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/string/">Choose a text storage or view model</a></h3>
    <p class="card-desc">Go to the strings hub when the job is storing, slicing, owning, viewing, or converting text data rather than identifying encodings.</p>
    <p class="card-links"><a href="/cpp/string/">string hub</a> · <a href="/cpp/string/basic_string/">basic_string</a> · <a href="/cpp/string/basic_string_view/">basic_string_view</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/locale/locale/">Handle locale-sensitive text behavior</a></h3>
    <p class="card-desc">Use locale facilities when formatting, collation, classification, or conversions depend on cultural rules instead of just encoding identity.</p>
    <p class="card-links"><a href="/cpp/locale/locale/">locale</a> · <a href="/cpp/utility/format/">format</a> · <a href="/c/string/">C string library</a></p>
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
        <td>Name or compare a text encoding</td>
        <td><a href="/cpp/text/text_encoding/">text_encoding</a></td>
        <td>It is the standard-library type dedicated to encoding identity and comparison.</td>
      </tr>
      <tr>
        <td>Ask about the ordinary or wide literal environment</td>
        <td><a href="/cpp/text/text_encoding/literal/">literal</a> and <a href="/cpp/text/text_encoding/environment/">environment</a></td>
        <td>These entry points expose the predefined encoding categories that matter most when crossing between source text and runtime behavior.</td>
      </tr>
      <tr>
        <td>Get stable names, ids, or aliases for an encoding</td>
        <td><a href="/cpp/text/text_encoding/name/">name</a>, <a href="/cpp/text/text_encoding/id/">id</a>, <a href="/cpp/text/text_encoding/mib/">mib</a>, <a href="/cpp/text/text_encoding/aliases/">aliases</a></td>
        <td>These pages cover the metadata surfaces used to describe or compare encodings programmatically.</td>
      </tr>
      <tr>
        <td>Work with actual text storage, lifetime, or slicing</td>
        <td><a href="/cpp/string/">Strings library</a></td>
        <td>The text hub does not own containers or views; that belongs to the strings library.</td>
      </tr>
      <tr>
        <td>Match, search, or replace text patterns</td>
        <td><a href="/cpp/regex/">Regular expressions library</a></td>
        <td>Regex owns pattern matching; text encoding identity is only adjacent context there.</td>
      </tr>
      <tr>
        <td>Format text for output</td>
        <td><a href="/cpp/utility/format/">format</a></td>
        <td>Formatting chooses presentation; the text hub mainly clarifies encoding boundaries and naming.</td>
      </tr>
    </tbody>
  </table>
</div>

## Text Encoding Surfaces

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Surface</th>
        <th>Primary destinations</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Core encoding object</td>
        <td><a href="/cpp/text/text_encoding/">text_encoding</a>, <a href="/cpp/text/text_encoding/hash/">hash</a>, <a href="/cpp/text/text_encoding/operator_eq/">comparison</a></td>
        <td>Representing and comparing encoding identities in code.</td>
      </tr>
      <tr>
        <td>Environment and literal categories</td>
        <td><a href="/cpp/text/text_encoding/environment/">environment</a>, <a href="/cpp/text/text_encoding/literal/">literal</a>, <a href="/cpp/text/text_encoding/environment_is/">environment_is</a></td>
        <td>Checking which encodings are associated with runtime or literal contexts.</td>
      </tr>
      <tr>
        <td>Metadata and naming</td>
        <td><a href="/cpp/text/text_encoding/name/">name</a>, <a href="/cpp/text/text_encoding/comp-name/">comp-name</a>, <a href="/cpp/text/text_encoding/id/">id</a>, <a href="/cpp/text/text_encoding/mib/">mib</a></td>
        <td>Obtaining standardized names, compact names, and identifier forms for an encoding.</td>
      </tr>
      <tr>
        <td>Alias views</td>
        <td><a href="/cpp/text/text_encoding/aliases/">aliases</a>, <a href="/cpp/text/text_encoding/aliases_view/">aliases_view</a></td>
        <td>Working with alternative naming forms associated with one encoding.</td>
      </tr>
    </tbody>
  </table>
</div>

## Text Vs. String Vs. Locale Vs. Regex

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If your real question is about...</th>
        <th>Go here</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Encoding identity or environment/literal encoding categories</td>
        <td><a href="/cpp/text/text_encoding/">text_encoding</a></td>
        <td>This is the one place in the standard library text area dedicated to encoding identity itself.</td>
      </tr>
      <tr>
        <td>Owning text, string views, conversions, or character traits</td>
        <td><a href="/cpp/string/">Strings library</a></td>
        <td>String storage and manipulation live in the strings library, not in `/cpp/text/`.</td>
      </tr>
      <tr>
        <td>Localization, collation, facets, and cultural formatting behavior</td>
        <td><a href="/cpp/locale/locale/">locale</a></td>
        <td>Locale owns culture-sensitive text behavior beyond raw encoding identity.</td>
      </tr>
      <tr>
        <td>Pattern matching and replacement</td>
        <td><a href="/cpp/regex/">Regular expressions library</a></td>
        <td>Regex owns searching, matching, captures, and tokenization.</td>
      </tr>
      <tr>
        <td>Literal prefixes, source/execution encodings, or character-set rules in the language</td>
        <td><a href="/cpp/language/charset/">Character sets</a> and <a href="/cpp/language/string_literal/">string literals</a></td>
        <td>Those are core-language topics rather than library navigation topics.</td>
      </tr>
    </tbody>
  </table>
</div>

## Standard Evolution

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Standard</th>
        <th>Navigation note</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">Before C++26</span></td>
        <td>Most text-navigation questions were really redirected into <a href="/cpp/string/">string</a>, <a href="/cpp/locale/locale/">locale</a>, or language-level encoding pages because there was no dedicated standard-library text hub surface.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++26</span></td>
        <td><a href="/cpp/text/text_encoding/">text_encoding</a> turns encoding identity into an explicit library destination, making `/cpp/text/` a real route instead of just an adjacency label.</td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/text/text_encoding/">I need the encoding object itself</a></h3>
    <p class="card-desc">Start here for the core API, comparisons, and metadata attached to a concrete encoding identity.</p>
    <p class="card-links"><a href="/cpp/text/text_encoding/name/">name</a> · <a href="/cpp/text/text_encoding/mib/">mib</a> · <a href="/cpp/text/text_encoding/hash/">hash</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/charset/">I am really asking about character sets</a></h3>
    <p class="card-desc">Go here when the problem is source code, execution encodings, or literal interpretation rules.</p>
    <p class="card-links"><a href="/cpp/language/string_literal/">string literals</a> · <a href="/cpp/text/text_encoding/literal/">literal encodings</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/string/">I need text containers or views</a></h3>
    <p class="card-desc">Use the strings hub for text ownership, slicing, conversions, and character-traits-oriented APIs.</p>
    <p class="card-links"><a href="/cpp/string/basic_string/">basic_string</a> · <a href="/cpp/string/basic_string_view/">basic_string_view</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/regex/">I need search or matching</a></h3>
    <p class="card-desc">If the task is pattern matching instead of encoding identity, regex is the correct home.</p>
    <p class="card-links"><a href="/cpp/utility/format/">format</a> · <a href="/cpp/locale/locale/">locale</a></p>
  </section>
</div>

## Boundary Lines

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>This hub covers</th>
        <th>This hub does not try to cover</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Encoding identity, encoding metadata, and where text-related navigation should branch next.</td>
        <td>General string manipulation, locale facet design, I/O formatting APIs, or regex algorithm details.</td>
      </tr>
    </tbody>
  </table>
</div>

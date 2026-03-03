---
title: "Strings library"
description: "Owning strings, string views, character traits, literals, conversions, and adjacent text/encoding routes."
source_path: "cpp/string"
layout: "overview-hub"
overview_page_class: "overview-page-string"
category: "string"
---

The C++ strings area spans owning string containers, non-owning views, character traits, literals, null-terminated compatibility APIs, and newer text-encoding adjacent facilities. This page is the curated starting point when you know your problem is "text-like", but you still need the right model.

<div class="overview-note">
This hub focuses on choosing the right string surface. It does not duplicate the full member indexes of <a href="/cpp/string/basic_string/">basic_string</a> or <a href="/cpp/string/basic_string_view/">basic_string_view</a>, and it keeps broader I/O, locale, and formatting topics linked as adjacent destinations.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card" data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/text/text_encoding/" data-min-standard-since="C++26">
    <h3 class="card-title"><a href="/cpp/string/basic_string/">Owning strings</a></h3>
    <p class="card-desc">Use <code>std::basic_string</code> and its aliases when the string owns its storage, needs mutation, or must outlive the source buffer it came from.</p>
    <p class="card-links"><a href="/cpp/string/basic_string/">basic_string</a> · <a href="/cpp/string/basic_string/to_string/">to_string</a> · <a href="/cpp/string/basic_string/stol/">stoi/stol</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/string/basic_string_view/">Non-owning views</a></h3>
    <p class="card-desc">Use <code>std::basic_string_view</code> when you want to read from an existing character sequence without copying it and can guarantee the referenced storage stays alive.</p>
    <p class="card-links"><a href="/cpp/string/basic_string_view/">basic_string_view</a> · <a href="/cpp/container/span/">span</a> · <a href="/cpp/string/basic_string_view/hash/">hash support</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/string_literal/">String literals and character kinds</a></h3>
    <p class="card-desc">Start here when the issue is about literal syntax, prefixes, encodings, or choosing between <code>char</code>, <code>wchar_t</code>, <code>char8_t</code>, <code>char16_t</code>, and <code>char32_t</code>.</p>
    <p class="card-links"><a href="/cpp/language/string_literal/">String literals</a> · <a href="/cpp/language/charset/">Character sets and encodings</a> · <a href="/cpp/text/text_encoding/">text_encoding</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/string/byte/">Null-terminated compatibility APIs</a></h3>
    <p class="card-desc">Use the byte, multibyte, and wide-string families when you need C-compatible interfaces, locale-sensitive conversions, or legacy NTBS-style algorithms.</p>
    <p class="card-links"><a href="/cpp/string/byte/">Byte strings</a> · <a href="/cpp/string/multibyte/">Multibyte</a> · <a href="/cpp/string/wide/">Wide strings</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need to</th>
        <th>Start with</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Store and mutate text with owned lifetime</td>
        <td><a href="/cpp/string/basic_string/">basic_string</a></td>
        <td>It owns storage, supports mutation, growth, searching, replacement, and the standard string aliases such as <code>std::string</code> and <code>std::u8string</code>.</td>
      </tr>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/string/basic_string_view/" data-min-standard-since="C++17">
        <td>Pass read-only text around without copying</td>
        <td><a href="/cpp/string/basic_string_view/">basic_string_view</a></td>
        <td>It models a lightweight non-owning view over contiguous characters, but the caller must manage lifetime carefully.</td>
      </tr>
      <tr>
        <td>Convert numbers to or from strings</td>
        <td><a href="/cpp/string/basic_string/to_string/">to_string</a>, <a href="/cpp/string/basic_string/stol/">stoi/stol/stoll</a>, <a href="/cpp/string/basic_string/stof/">stof/stod/stold</a></td>
        <td>These are the string-focused conversion helpers; use <a href="/cpp/utility/to_chars/">to_chars</a> and <a href="/cpp/utility/from_chars/">from_chars</a> for lower-level locale-independent conversion.</td>
      </tr>
      <tr>
        <td>Choose the right literal form or suffix</td>
        <td><a href="/cpp/language/string_literal/">String literals</a>, <a href="/cpp/string/basic_string/">basic_string</a>, <a href="/cpp/string/basic_string_view/">basic_string_view</a></td>
        <td>Literals determine character type, encoding form, and whether the result is an array, an owning string, or a string_view.</td>
      </tr>
      <tr>
        <td>Work with C-compatible null-terminated strings</td>
        <td><a href="/cpp/string/byte/">Byte strings</a>, <a href="/cpp/string/wide/">Wide strings</a>, <a href="/cpp/string/multibyte/">Multibyte</a></td>
        <td>These sections hold the NTBS-style and locale-sensitive APIs that remain important for interoperability and lower-level text handling.</td>
      </tr>
      <tr>
        <td>Understand encodings, character traits, or text model boundaries</td>
        <td><a href="/cpp/string/char_traits/">char_traits</a>, <a href="/cpp/language/charset/">Character sets</a>, <a href="/cpp/text/text_encoding/">text_encoding</a></td>
        <td>These pages explain how character operations are abstracted and how encoding-aware code relates to literal and runtime environments.</td>
      </tr>
    </tbody>
  </table>
</div>

## Core String Models

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Model</th>
        <th>Use it when</th>
        <th>Primary destinations</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Owning dynamic string</td>
        <td>You need allocation, mutation, append/replace operations, or independent lifetime.</td>
        <td><a href="/cpp/string/basic_string/">basic_string</a>, <a href="/cpp/string/basic_string/basic_string/">constructors</a>, <a href="/cpp/string/basic_string/operator+/">concatenation</a></td>
      </tr>
      <tr>
        <td>Non-owning string view</td>
        <td>You need a cheap parameter or slice type over existing text and can guarantee the source buffer remains valid.</td>
        <td><a href="/cpp/string/basic_string_view/">basic_string_view</a>, <a href="/cpp/string/basic_string_view/substr/">substr</a>, <a href="/cpp/string/basic_string_view/remove_prefix/">remove_prefix</a></td>
      </tr>
      <tr>
        <td>Character operation policy</td>
        <td>You need generic character comparison/copy/length behavior for a string-like type.</td>
        <td><a href="/cpp/string/char_traits/">char_traits</a></td>
      </tr>
      <tr>
        <td>C-compatible null-terminated strings</td>
        <td>You are interoperating with legacy APIs, locale conversion routines, or NTBS-style algorithms.</td>
        <td><a href="/cpp/string/byte/">byte</a>, <a href="/cpp/string/multibyte/">multibyte</a>, <a href="/cpp/string/wide/">wide</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Character Types And Encodings

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/string_literal/">Literal forms</a></h3>
    <p class="card-desc">String literal prefixes choose the code unit type and affect whether you start from ordinary, wide, UTF-8, UTF-16, or UTF-32 literal data.</p>
    <p class="card-links"><a href="/cpp/language/string_literal/">language literals</a> · <a href="/cpp/string/basic_string/">basic_string aliases</a> · <a href="/cpp/string/basic_string_view/">string_view aliases</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/language/charset/">Character sets</a></h3>
    <p class="card-desc">Use the language charset page when the question is about source, execution, ordinary, or wide literal encodings rather than a particular string container.</p>
    <p class="card-links"><a href="/cpp/language/charset/">charset</a> · <a href="/cpp/text/text_encoding/">text_encoding</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/text/text_encoding/">Runtime encoding identity</a></h3>
    <p class="card-desc"><code>std::text_encoding</code> is the modern route for reasoning about literal, locale, and environment encoding identities at compile time and runtime.</p>
    <p class="card-links"><a href="/cpp/text/text_encoding/">text_encoding</a> · <a href="/cpp/locale/locale/">locale</a></p>
  </section>
</div>

## Conversion And Formatting Routes

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Task</th>
        <th>Preferred route</th>
        <th>Related route</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Numeric value to string</td>
        <td><a href="/cpp/string/basic_string/to_string/">to_string</a>, <a href="/cpp/string/basic_string/to_wstring/">to_wstring</a></td>
        <td><a href="/cpp/utility/format/">format</a> for richer formatting, <a href="/cpp/utility/to_chars/">to_chars</a> for lower-level conversion</td>
      </tr>
      <tr>
        <td>String to integer</td>
        <td><a href="/cpp/string/basic_string/stol/">stoi/stol/stoll</a>, <a href="/cpp/string/basic_string/stoul/">stoul/stoull</a></td>
        <td><a href="/cpp/utility/from_chars/">from_chars</a> when you want locale-independent parsing with tighter control</td>
      </tr>
      <tr>
        <td>String to floating-point</td>
        <td><a href="/cpp/string/basic_string/stof/">stof/stod/stold</a></td>
        <td><a href="/cpp/utility/from_chars/">from_chars</a> for low-level parsing paths</td>
      </tr>
      <tr>
        <td>Stream a string-like object</td>
        <td><a href="/cpp/io/basic_stringstream/">basic_stringstream</a>, <a href="/cpp/string/basic_string/operator_ltltgtgt/">stream operators</a></td>
        <td><a href="/cpp/io/">I/O hub</a> for broader stream model choices</td>
      </tr>
    </tbody>
  </table>
</div>

## Version Highlights

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Standard</th>
        <th>What changed navigation-wise</th>
      </tr>
    </thead>
    <tbody>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/string/" data-min-standard-since="C++11">
        <td><span class="overview-chip">C++11</span></td>
        <td>User-defined string literal suffixes, new conversion helpers like <a href="/cpp/string/basic_string/to_string/">to_string</a>, and the UTF-16/UTF-32 character families became part of the main modern string story.</td>
      </tr>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/string/basic_string_view/" data-min-standard-since="C++17">
        <td><span class="overview-chip">C++17</span></td>
        <td><a href="/cpp/string/basic_string_view/">string_view</a> became the default non-owning route, which materially changes API design and parameter-passing choices.</td>
      </tr>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/string/" data-min-standard-since="C++20">
        <td><span class="overview-chip">C++20</span></td>
        <td><code>char8_t</code> and UTF-8-specific aliases became first-class, making the choice of character type and literal prefix more visible than before.</td>
      </tr>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/string/" data-min-standard-since="C++23">
        <td><span class="overview-chip">C++23</span></td>
        <td>More string/view convenience APIs such as <code>contains</code> and ranges-aware member additions reduce the need for ad hoc helper code.</td>
      </tr>
      <tr data-min-standard-item data-min-standard-scope="cpp" data-min-standard-path="/cpp/text/text_encoding/" data-min-standard-since="C++26">
        <td><span class="overview-chip">C++26</span></td>
        <td><a href="/cpp/text/text_encoding/">text_encoding</a> gives the strings/text area a clearer runtime encoding-identification entry point, and <a href="/cpp/string/basic_string/to_string/">to_string</a> aligns more closely with modern formatting behavior.</td>
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
        <td>Owning strings, string views, traits, literals, NTBS compatibility, and string-specific conversions.</td>
        <td><a href="/cpp/text/">Text</a> for the dedicated text-encoding surface, <a href="/cpp/io/">I/O</a> for stream architecture, <a href="/cpp/utility/">Utility</a> for formatting and char-conversion primitives, <a href="/cpp/locale/">Locale</a> for locale facets and localization behavior.</td>
      </tr>
      <tr>
        <td>C++ string abstractions over character sequences.</td>
        <td><a href="/c/string/">C string</a> when you need the C-side library surface or cross-language compatibility details.</td>
      </tr>
    </tbody>
  </table>
</div>

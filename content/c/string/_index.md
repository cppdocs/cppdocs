---
title: "C strings and text handling"
description: "Curated entry point for C byte strings, wide strings, multibyte conversions, classification, and the boundary between string APIs and raw memory."
source_path: "c/string"
layout: "overview-hub"
overview_page_class: "overview-page-c-string"
---

The C string library is split across several related models: null-terminated byte strings, null-terminated wide strings, multibyte and wide-character conversion APIs, and raw memory functions that often sit next to string code in real programs. This hub is the task-first map for choosing the right family before you drop into individual functions.

<div class="overview-note">
In C, "string handling" often overlaps with raw memory, locale-sensitive classification, and stream I/O. Use this page to decide whether you need byte-string functions, wide-character functions, multibyte conversion state, or a different library family entirely.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/c/string/byte/">Work with ordinary null-terminated byte strings</a></h3>
    <p class="card-desc">Use the byte-string family for classic C strings stored in `char` arrays: measuring, copying, comparing, searching, tokenizing, and converting text to numbers.</p>
    <p class="card-links"><a href="/c/string/byte/strlen/">strlen</a> · <a href="/c/string/byte/strcpy/">strcpy</a> · <a href="/c/string/byte/strcmp/">strcmp</a> · <a href="/c/string/byte/strtok/">strtok</a> · <a href="/c/string/byte/strtol/">strtol</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/string/wide/">Work with wide strings and wide characters</a></h3>
    <p class="card-desc">Use the wide-character family when your program stores text as `wchar_t` strings or uses wide classification, collation, memory, and conversion functions.</p>
    <p class="card-links"><a href="/c/string/wide/wcslen/">wcslen</a> · <a href="/c/string/wide/wcscpy/">wcscpy</a> · <a href="/c/string/wide/wcstok/">wcstok</a> · <a href="/c/string/wide/wmemcpy/">wmemcpy</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/string/multibyte/">Convert between multibyte and wide encodings</a></h3>
    <p class="card-desc">Use the multibyte layer when encoding state matters or when you need to move between byte-based text and wide-character representations.</p>
    <p class="card-links"><a href="/c/string/multibyte/mbrtowc/">mbrtowc</a> · <a href="/c/string/multibyte/mbsrtowcs/">mbsrtowcs</a> · <a href="/c/string/multibyte/wcrtomb/">wcrtomb</a> · <a href="/c/string/multibyte/mbstate_t/">mbstate_t</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/string/byte/memcpy/">Copy or inspect raw memory blocks</a></h3>
    <p class="card-desc">Some of the most-used "string-adjacent" operations are actually raw memory APIs. Start here when the data is bytes, not necessarily text.</p>
    <p class="card-links"><a href="/c/string/byte/memcpy/">memcpy</a> · <a href="/c/string/byte/memmove/">memmove</a> · <a href="/c/string/byte/memchr/">memchr</a> · <a href="/c/string/byte/memset/">memset</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/string/byte/isalpha/">Classify or transform characters</a></h3>
    <p class="card-desc">Use classification and case-conversion functions when you need character properties rather than whole-string operations.</p>
    <p class="card-links"><a href="/c/string/byte/isalpha/">isalpha</a> · <a href="/c/string/byte/isdigit/">isdigit</a> · <a href="/c/string/byte/tolower/">tolower</a> · <a href="/c/string/wide/iswalpha/">iswalpha</a> · <a href="/c/string/wide/towlower/">towlower</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/string/byte/strerror/">Format textual diagnostics or locale-sensitive comparisons</a></h3>
    <p class="card-desc">This route covers error-message strings and locale-sensitive collation/transform functions that often appear next to text handling code.</p>
    <p class="card-links"><a href="/c/string/byte/strerror/">strerror</a> · <a href="/c/string/byte/strcoll/">strcoll</a> · <a href="/c/string/byte/strxfrm/">strxfrm</a> · <a href="/c/string/wide/wcscoll/">wcscoll</a> · <a href="/c/string/wide/wcsxfrm/">wcsxfrm</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If you need to...</th>
        <th>Start with</th>
        <th>Main destinations</th>
        <th>Go elsewhere when...</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Measure, copy, compare, or search a classic `char*` string</td>
        <td>Byte strings</td>
        <td><a href="/c/string/byte/strlen/">strlen</a>, <a href="/c/string/byte/strcpy/">strcpy</a>, <a href="/c/string/byte/strcmp/">strcmp</a>, <a href="/c/string/byte/strstr/">strstr</a></td>
        <td>Use <a href="/c/string/byte/memcpy/">memory functions</a> if the data is not a null-terminated string.</td>
      </tr>
      <tr>
        <td>Copy or compare raw bytes regardless of text encoding</td>
        <td>Memory functions on the byte side</td>
        <td><a href="/c/string/byte/memcpy/">memcpy</a>, <a href="/c/string/byte/memmove/">memmove</a>, <a href="/c/string/byte/memcmp/">memcmp</a>, <a href="/c/string/byte/memset/">memset</a></td>
        <td>Use <a href="/c/memory/">memory management</a> if the question is allocation or ownership.</td>
      </tr>
      <tr>
        <td>Parse text into numeric values</td>
        <td>String-to-number conversion</td>
        <td><a href="/c/string/byte/strtol/">strtol</a>, <a href="/c/string/byte/strtoul/">strtoul</a>, <a href="/c/string/byte/strtof/">strtof</a>, <a href="/c/string/wide/wcstol/">wcstol</a></td>
        <td>Use <a href="/c/numeric/">numerics</a> for math functions rather than textual parsing.</td>
      </tr>
      <tr>
        <td>Classify characters or change case</td>
        <td>Classification and case conversion</td>
        <td><a href="/c/string/byte/isalpha/">isalpha</a>, <a href="/c/string/byte/isspace/">isspace</a>, <a href="/c/string/byte/toupper/">toupper</a>, <a href="/c/string/wide/iswspace/">iswspace</a></td>
        <td>Use <a href="/c/locale/">locale</a> when the question is broader localization support rather than individual predicates.</td>
      </tr>
      <tr>
        <td>Work with `wchar_t` strings or wide memory blocks</td>
        <td>Wide-string functions</td>
        <td><a href="/c/string/wide/wcslen/">wcslen</a>, <a href="/c/string/wide/wcscmp/">wcscmp</a>, <a href="/c/string/wide/wcstok/">wcstok</a>, <a href="/c/string/wide/wmemcpy/">wmemcpy</a></td>
        <td>Use <a href="/c/string/multibyte/">multibyte conversion</a> if you need byte/wide transitions.</td>
      </tr>
      <tr>
        <td>Convert between multibyte text and wide characters with state</td>
        <td>Multibyte conversion APIs</td>
        <td><a href="/c/string/multibyte/mbrtowc/">mbrtowc</a>, <a href="/c/string/multibyte/mbsrtowcs/">mbsrtowcs</a>, <a href="/c/string/multibyte/wcrtomb/">wcrtomb</a>, <a href="/c/string/multibyte/mbstate_t/">mbstate_t</a></td>
        <td>Use <a href="/c/io/">I/O</a> when the main issue is stream reading/writing rather than encoding conversion.</td>
      </tr>
      <tr>
        <td>Produce human-readable error text or locale-aware collation</td>
        <td>Diagnostics and collation helpers</td>
        <td><a href="/c/string/byte/strerror/">strerror</a>, <a href="/c/string/byte/strcoll/">strcoll</a>, <a href="/c/string/wide/wcscoll/">wcscoll</a></td>
        <td>Use <a href="/c/error/">error handling</a> when the main subject is `errno` or assertions rather than textual rendering.</td>
      </tr>
    </tbody>
  </table>
</div>

## Memory Vs. Strings

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Choose...</th>
        <th>When your data is...</th>
        <th>Typical APIs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>String functions</td>
        <td>Null-terminated text where the terminating zero is part of the contract.</td>
        <td><a href="/c/string/byte/strlen/">strlen</a>, <a href="/c/string/byte/strcmp/">strcmp</a>, <a href="/c/string/wide/wcslen/">wcslen</a>, <a href="/c/string/wide/wcscmp/">wcscmp</a></td>
      </tr>
      <tr>
        <td>Memory functions</td>
        <td>Raw storage, binary payloads, slices with explicit lengths, or buffers that may contain zero bytes in the middle.</td>
        <td><a href="/c/string/byte/memcpy/">memcpy</a>, <a href="/c/string/byte/memmove/">memmove</a>, <a href="/c/string/byte/memcmp/">memcmp</a>, <a href="/c/string/byte/memset/">memset</a></td>
      </tr>
      <tr>
        <td>Multibyte conversion</td>
        <td>Encoded byte sequences that must be interpreted through conversion state rather than treated as plain byte arrays.</td>
        <td><a href="/c/string/multibyte/mbrtowc/">mbrtowc</a>, <a href="/c/string/multibyte/mbrlen/">mbrlen</a>, <a href="/c/string/multibyte/wcrtomb/">wcrtomb</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Related Navigation

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If your question is really about...</th>
        <th>Go here</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Allocation, lifetime, and owning buffers</td>
        <td><a href="/c/memory/">Memory management</a></td>
        <td>`/c/string/` covers operations on existing buffers; allocation and ownership rules belong to the memory hub.</td>
      </tr>
      <tr>
        <td>Reading and writing text through streams or files</td>
        <td><a href="/c/io/">I/O</a></td>
        <td>String conversion and parsing live here, but stream/file APIs belong to the I/O hub.</td>
      </tr>
      <tr>
        <td>Locale objects and broader localization support</td>
        <td><a href="/c/locale/">Locale</a></td>
        <td>Classification and collation functions touch locale-sensitive behavior, but the locale family is separate.</td>
      </tr>
      <tr>
        <td>C++ strings, string views, or higher-level text facilities</td>
        <td><a href="/cpp/string/">C++ strings hub</a>, <a href="/cpp/text/">C++ text</a></td>
        <td>The C++ side provides different abstractions and ownership models than C string APIs.</td>
      </tr>
      <tr>
        <td>Header-first lookup rather than topic-first navigation</td>
        <td><a href="/c/header/">C headers</a></td>
        <td>Use the header index when you already know you want the include path rather than the function family.</td>
      </tr>
    </tbody>
  </table>
</div>

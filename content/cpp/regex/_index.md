---
title: "Regular expressions library"
description: "Curated hub for C++ regex: pattern objects, match/search/replace algorithms, flags, traits, match results, iterators, and string/text boundaries."
source_path: "cpp/regex"
category: "regex"
layout: "overview-hub"
overview_page_class: "overview-page-regex"
---

The C++ regular expressions library is built around a small set of cooperating pieces: a compiled regex object, algorithms that apply it to character ranges, result objects that describe matches, iterators that walk repeated matches or tokens, and option/flag types that change both syntax and matching behavior. This hub helps you choose the right regex surface before you dive into the lower-level details.

<div class="overview-note">
Use this page when your question is about pattern matching with the standard regex library. Keep <a href="/cpp/string/">string</a> as the hub for text storage and views, <a href="/cpp/text/">text</a> for broader text-processing adjacency, and <a href="/cpp/error/">diagnostics</a> for exception/error taxonomy beyond regex-specific failures.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/regex/basic_regex/">Compile and hold a regex pattern</a></h3>
    <p class="card-desc">Start with the regex object when your first question is how a pattern is represented, compiled, or parameterized by syntax options and traits.</p>
    <p class="card-links"><a href="/cpp/regex/basic_regex/">basic_regex</a> · <a href="/cpp/regex/syntax_option_type/">syntax_option_type</a> · <a href="/cpp/regex/ecmascript/">ECMAScript grammar</a> · <a href="/cpp/regex/regex_traits/">regex_traits</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/regex/regex_match/">Check or search input text</a></h3>
    <p class="card-desc">Use the matching algorithms when you need whole-input validation, substring search, or extraction of capture groups from a source range.</p>
    <p class="card-links"><a href="/cpp/regex/regex_match/">regex_match</a> · <a href="/cpp/regex/regex_search/">regex_search</a> · <a href="/cpp/regex/match_results/">match_results</a> · <a href="/cpp/regex/sub_match/">sub_match</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/regex/regex_replace/">Rewrite text with regex replacement</a></h3>
    <p class="card-desc">Choose the replace route when the job is transforming text by substituting matched ranges rather than just detecting them.</p>
    <p class="card-links"><a href="/cpp/regex/regex_replace/">regex_replace</a> · <a href="/cpp/regex/match_flag_type/">match_flag_type</a> · <a href="/cpp/regex/match_results/">match_results</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/regex/regex_iterator/">Iterate over many matches or tokens</a></h3>
    <p class="card-desc">Use iterators when you want to traverse every match or every tokenized slice instead of calling search in a loop manually.</p>
    <p class="card-links"><a href="/cpp/regex/regex_iterator/">regex_iterator</a> · <a href="/cpp/regex/regex_token_iterator/">regex_token_iterator</a> · <a href="/cpp/regex/match_results/">match_results</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/regex/syntax_option_type/">Choose syntax and matching options</a></h3>
    <p class="card-desc">Use the flags route when behavior depends on grammar flavor, case sensitivity, formatting rules, or how algorithms advance through the input.</p>
    <p class="card-links"><a href="/cpp/regex/syntax_option_type/">syntax_option_type</a> · <a href="/cpp/regex/match_flag_type/">match_flag_type</a> · <a href="/cpp/regex/ecmascript/">ECMAScript grammar</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/regex/regex_error/">Handle regex-specific failures</a></h3>
    <p class="card-desc">Start here when pattern compilation fails or when you need to reason about the library's regex-specific error categories.</p>
    <p class="card-links"><a href="/cpp/regex/regex_error/">regex_error</a> · <a href="/cpp/regex/error_type/">error_type</a></p>
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
        <th>Common adjacent route</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Validate that the entire input matches a pattern</td>
        <td><a href="/cpp/regex/regex_match/">regex_match</a></td>
        <td>`regex_match` is the whole-input check, unlike search which succeeds on any matching subrange.</td>
        <td><a href="/cpp/regex/regex_search/">regex_search</a></td>
      </tr>
      <tr>
        <td>Find whether a pattern occurs anywhere inside a string</td>
        <td><a href="/cpp/regex/regex_search/">regex_search</a></td>
        <td>This is the canonical route for substring discovery and capture extraction from larger text.</td>
        <td><a href="/cpp/regex/regex_match/">regex_match</a></td>
      </tr>
      <tr>
        <td>Replace matching text with formatted output</td>
        <td><a href="/cpp/regex/regex_replace/">regex_replace</a></td>
        <td>The replacement algorithm handles substitution syntax and formatting behavior directly.</td>
        <td><a href="/cpp/utility/format/">format</a></td>
      </tr>
      <tr>
        <td>Walk every match across an input range</td>
        <td><a href="/cpp/regex/regex_iterator/">regex_iterator</a></td>
        <td>Iterators provide repeated-match traversal without hand-written search loops.</td>
        <td><a href="/cpp/regex/regex_token_iterator/">regex_token_iterator</a></td>
      </tr>
      <tr>
        <td>Split or tokenize text around regex matches or submatches</td>
        <td><a href="/cpp/regex/regex_token_iterator/">regex_token_iterator</a></td>
        <td>This is the standard route for token-oriented regex iteration, including delimiter-style behavior.</td>
        <td><a href="/cpp/string/">string</a></td>
      </tr>
      <tr>
        <td>Choose grammar flavor or matching/replacement flags</td>
        <td><a href="/cpp/regex/syntax_option_type/">syntax_option_type</a> and <a href="/cpp/regex/match_flag_type/">match_flag_type</a></td>
        <td>Regex behavior depends heavily on option flags, so these types are first-class navigation targets.</td>
        <td><a href="/cpp/regex/ecmascript/">ECMAScript grammar</a></td>
      </tr>
      <tr>
        <td>Interpret captures, prefixes, suffixes, or matched subranges</td>
        <td><a href="/cpp/regex/match_results/">match_results</a> and <a href="/cpp/regex/sub_match/">sub_match</a></td>
        <td>Result objects are the canonical route for understanding what the algorithms actually produced.</td>
        <td><a href="/cpp/regex/regex_search/">regex_search</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Regex Building Blocks

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Family</th>
        <th>Core destinations</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pattern objects</td>
        <td><a href="/cpp/regex/basic_regex/">basic_regex</a>, <a href="/cpp/regex/regex_traits/">regex_traits</a>, <a href="/cpp/regex/syntax_option_type/">syntax_option_type</a>, <a href="/cpp/regex/ecmascript/">grammar notes</a></td>
        <td>Constructing and configuring a compiled regex together with its grammar and character-traits behavior.</td>
      </tr>
      <tr>
        <td>Matching algorithms</td>
        <td><a href="/cpp/regex/regex_match/">regex_match</a>, <a href="/cpp/regex/regex_search/">regex_search</a></td>
        <td>Checking whole-string matches or searching for subranges inside larger text.</td>
      </tr>
      <tr>
        <td>Replacement algorithm</td>
        <td><a href="/cpp/regex/regex_replace/">regex_replace</a>, <a href="/cpp/regex/match_flag_type/">match_flag_type</a></td>
        <td>Producing rewritten output based on regex substitutions and replacement formatting rules.</td>
      </tr>
      <tr>
        <td>Match result surfaces</td>
        <td><a href="/cpp/regex/match_results/">match_results</a>, <a href="/cpp/regex/sub_match/">sub_match</a></td>
        <td>Accessing capture groups, matched spans, prefixes, suffixes, and related result metadata.</td>
      </tr>
      <tr>
        <td>Iterators over matches and tokens</td>
        <td><a href="/cpp/regex/regex_iterator/">regex_iterator</a>, <a href="/cpp/regex/regex_token_iterator/">regex_token_iterator</a></td>
        <td>Walking repeated matches or token streams using iterator-based traversal.</td>
      </tr>
      <tr>
        <td>Error and flag types</td>
        <td><a href="/cpp/regex/regex_error/">regex_error</a>, <a href="/cpp/regex/error_type/">error_type</a>, <a href="/cpp/regex/match_flag_type/">match_flag_type</a>, <a href="/cpp/regex/syntax_option_type/">syntax_option_type</a></td>
        <td>Interpreting failures and controlling pattern/matching behavior with the library's enum-style option surfaces.</td>
      </tr>
    </tbody>
  </table>
</div>

## Pattern Vs. Result Vs. Traversal

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Choose...</th>
        <th>When your question is about...</th>
        <th>Primary pages</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pattern definition</td>
        <td>How to construct, store, and parameterize the regex itself.</td>
        <td><a href="/cpp/regex/basic_regex/">basic_regex</a>, <a href="/cpp/regex/syntax_option_type/">syntax options</a>, <a href="/cpp/regex/regex_traits/">regex_traits</a></td>
      </tr>
      <tr>
        <td>One-shot matching/searching</td>
        <td>How to test or search input text against a compiled pattern.</td>
        <td><a href="/cpp/regex/regex_match/">regex_match</a>, <a href="/cpp/regex/regex_search/">regex_search</a></td>
      </tr>
      <tr>
        <td>Interpreting captures</td>
        <td>What matched, what each capture group contains, and how prefixes/suffixes are reported.</td>
        <td><a href="/cpp/regex/match_results/">match_results</a>, <a href="/cpp/regex/sub_match/">sub_match</a></td>
      </tr>
      <tr>
        <td>Repeated traversal</td>
        <td>Walking every match or token across an input range.</td>
        <td><a href="/cpp/regex/regex_iterator/">regex_iterator</a>, <a href="/cpp/regex/regex_token_iterator/">regex_token_iterator</a></td>
      </tr>
      <tr>
        <td>Text rewriting</td>
        <td>Producing a transformed output string from matches.</td>
        <td><a href="/cpp/regex/regex_replace/">regex_replace</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Version And Scope Notes

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Topic</th>
        <th>Navigation note</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">C++11</span></td>
        <td>The standard regex library arrives as a single wave in C++11, so most navigation here is about choosing the right surface, not about major later standard-era branching.</td>
      </tr>
      <tr>
        <td>Text storage vs pattern matching</td>
        <td>Use <a href="/cpp/string/">string</a> or <a href="/cpp/text/">text</a> when the real issue is ownership, encoding, or text representation rather than matching algorithms.</td>
      </tr>
      <tr>
        <td>Regex errors vs general diagnostics</td>
        <td>Use <a href="/cpp/regex/regex_error/">regex_error</a> for regex-specific failures, but go to <a href="/cpp/error/">diagnostics</a> for broader exception and error-code navigation.</td>
      </tr>
      <tr>
        <td>Formatting output</td>
        <td>Use <a href="/cpp/utility/format/">format</a> or <a href="/cpp/io/">I/O</a> when the main concern is output formatting rather than regex-driven replacement.</td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/regex/regex_search/">I need to find patterns inside text</a></h3>
    <p class="card-desc">Start from `regex_search` when the match can occur anywhere inside a larger source string and you want capture groups back.</p>
    <p class="card-links"><a href="/cpp/regex/regex_search/">regex_search</a> · <a href="/cpp/regex/match_results/">match_results</a> · <a href="/cpp/regex/sub_match/">sub_match</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/regex/regex_replace/">I need to rewrite matched text</a></h3>
    <p class="card-desc">Use the replace route when the end result is transformed output text rather than a boolean match result.</p>
    <p class="card-links"><a href="/cpp/regex/regex_replace/">regex_replace</a> · <a href="/cpp/regex/match_flag_type/">match flags</a> · <a href="/cpp/string/">string hub</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/regex/regex_iterator/">I need every match or token</a></h3>
    <p class="card-desc">Use the iterator route when processing many matches or delimiter-style token slices matters more than one-shot searching.</p>
    <p class="card-links"><a href="/cpp/regex/regex_iterator/">regex_iterator</a> · <a href="/cpp/regex/regex_token_iterator/">regex_token_iterator</a> · <a href="/cpp/regex/basic_regex/">basic_regex</a></p>
  </section>
</div>

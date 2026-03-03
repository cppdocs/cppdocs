---
title: "Type support library"
description: "Curated hub for C++ type support: traits, transformations, numeric limits, fixed language support types, and RTTI/type identity utilities."
source_path: "cpp/types"
category: "types"
layout: "overview-hub"
overview_page_class: "overview-page-types"
---

The C++ type support library provides the reusable machinery that generic code uses to inspect, transform, classify, and compare types. It also hosts fixed support types such as `size_t`, `ptrdiff_t`, and `nullptr_t`, numeric limits, byte/endian helpers, and the runtime type information surfaces built around `type_info` and `type_index`.

<div class="overview-note">
Use this hub when the question is about type properties and type-support utilities rather than the core language rules for declaring types. Keep <a href="/cpp/language/">language</a> as the home for syntax and type-system semantics, <a href="/cpp/utility/">utility</a> for vocabulary types and value movement, and <a href="/cpp/concepts/">concepts</a> for template constraints.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/types/is_same/">Ask compile-time questions about a type</a></h3>
    <p class="card-desc">Use the traits route when you need to test whether a type is integral, constructible, polymorphic, trivially copyable, or otherwise belongs to a category.</p>
    <p class="card-links"><a href="/cpp/types/is_same/">is_same</a> · <a href="/cpp/types/is_integral/">is_integral</a> · <a href="/cpp/types/is_pointer/">is_pointer</a> · <a href="/cpp/types/is_trivially_copyable/">is_trivially_copyable</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/types/remove_cv/">Transform one type into another</a></h3>
    <p class="card-desc">Start here for add/remove qualifier helpers, pointer/reference transformations, decay, common-type selection, and type identity tools.</p>
    <p class="card-links"><a href="/cpp/types/remove_cv/">remove_cv</a> · <a href="/cpp/types/remove_reference/">remove_reference</a> · <a href="/cpp/types/add_pointer/">add_pointer</a> · <a href="/cpp/types/decay/">decay</a> · <a href="/cpp/types/type_identity/">type_identity</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/types/numeric_limits/">Query representation limits and machine-facing properties</a></h3>
    <p class="card-desc">Use limits and representation helpers when code depends on value ranges, alignment, object representation, byte order, or low-level type facts.</p>
    <p class="card-links"><a href="/cpp/types/numeric_limits/">numeric_limits</a> · <a href="/cpp/types/alignment_of/">alignment_of</a> · <a href="/cpp/types/endian/">endian</a> · <a href="/cpp/types/byte/">byte</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/types/type_info/">Work with runtime type information</a></h3>
    <p class="card-desc">Choose the RTTI route when dynamic type inspection, `typeid`, or associative storage keyed by runtime type identity is the main concern.</p>
    <p class="card-links"><a href="/cpp/types/type_info/">type_info</a> · <a href="/cpp/types/type_index/">type_index</a> · <a href="/cpp/types/bad_cast/">bad_cast</a> · <a href="/cpp/types/bad_typeid/">bad_typeid</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/types/size_t/">Use standard fixed support types</a></h3>
    <p class="card-desc">Start here when you need the library-defined types that generic code and low-level APIs commonly rely on.</p>
    <p class="card-links"><a href="/cpp/types/size_t/">size_t</a> · <a href="/cpp/types/ptrdiff_t/">ptrdiff_t</a> · <a href="/cpp/types/nullptr_t/">nullptr_t</a> · <a href="/cpp/types/max_align_t/">max_align_t</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/cpp/types/enable_if/">Control templates and overload participation</a></h3>
    <p class="card-desc">Use the metaprogramming-oriented route when substitution, detection, trait composition, or overload gating drives the design.</p>
    <p class="card-links"><a href="/cpp/types/enable_if/">enable_if</a> · <a href="/cpp/types/void_t/">void_t</a> · <a href="/cpp/types/conjunction/">conjunction</a> · <a href="/cpp/types/disjunction/">disjunction</a> · <a href="/cpp/types/conditional/">conditional</a></p>
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
        <td>Test a property of a type at compile time</td>
        <td><a href="/cpp/types/is_same/">type traits</a></td>
        <td>The `is_*`, `has_*`, and related traits answer category and capability questions for generic code.</td>
        <td><a href="/cpp/concepts/">concepts</a></td>
      </tr>
      <tr>
        <td>Strip, add, or normalize qualifiers, references, pointers, or array layers</td>
        <td><a href="/cpp/types/remove_cv/">type transformations</a></td>
        <td>The add/remove/decay family is the canonical route for turning one type form into another.</td>
        <td><a href="/cpp/utility/">utility</a></td>
      </tr>
      <tr>
        <td>Find a common type or reference across several inputs</td>
        <td><a href="/cpp/types/common_type/">common_type</a> or <a href="/cpp/types/common_reference/">common_reference</a></td>
        <td>These helpers model type unification rather than simple yes/no property tests.</td>
        <td><a href="/cpp/ranges/">ranges</a></td>
      </tr>
      <tr>
        <td>Inspect value ranges, alignment, or representation limits</td>
        <td><a href="/cpp/types/numeric_limits/">numeric_limits</a>, <a href="/cpp/types/alignment_of/">alignment_of</a>, <a href="/cpp/types/endian/">endian</a></td>
        <td>These are the core type-support entry points for machine-facing facts about types and objects.</td>
        <td><a href="/cpp/numeric/">numerics</a></td>
      </tr>
      <tr>
        <td>Use library-defined fundamental support types</td>
        <td><a href="/cpp/types/size_t/">size_t</a>, <a href="/cpp/types/ptrdiff_t/">ptrdiff_t</a>, <a href="/cpp/types/nullptr_t/">nullptr_t</a></td>
        <td>These types appear across the library and are the standard entry points for sizes, pointer differences, and null pointer type identity.</td>
        <td><a href="/cpp/language/types/">language types</a></td>
      </tr>
      <tr>
        <td>Perform runtime type inspection or type-keyed lookup</td>
        <td><a href="/cpp/types/type_info/">type_info</a> and <a href="/cpp/types/type_index/">type_index</a></td>
        <td>This is the RTTI route when compile-time trait reasoning is not enough.</td>
        <td><a href="/cpp/error/">diagnostics</a></td>
      </tr>
      <tr>
        <td>Constrain templates or enable overloads conditionally</td>
        <td><a href="/cpp/types/enable_if/">enable_if</a>, <a href="/cpp/types/void_t/">void_t</a>, <a href="/cpp/types/conjunction/">conjunction</a></td>
        <td>These utilities are the traditional metaprogramming route for substitution-based selection.</td>
        <td><a href="/cpp/concepts/">concepts</a></td>
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
        <th>Notable additions here</th>
        <th>Why it changes navigation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="overview-chip">C++11</span></td>
        <td><a href="/cpp/types/is_same/">core trait expansion</a>, <a href="/cpp/types/alignment_of/">alignment helpers</a>, <a href="/cpp/types/type_index/">type_index</a>, <a href="/cpp/types/underlying_type/">underlying_type</a></td>
        <td>Established the modern trait-heavy baseline that most generic libraries now assume.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++14</span></td>
        <td><a href="/cpp/types/integer/">integer aliases and refinements</a>, broader trait cleanup</td>
        <td>Mostly incremental, but relevant for portability when using trait conveniences across older toolchains.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++17</span></td>
        <td><a href="/cpp/types/void_t/">void_t</a>, <a href="/cpp/types/conjunction/">conjunction</a>, <a href="/cpp/types/disjunction/">disjunction</a>, <a href="/cpp/types/byte/">byte</a>, <a href="/cpp/types/has_unique_object_representations/">object representation helpers</a></td>
        <td>Added the trait-composition toolkit and more explicit representation-oriented support.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++20</span></td>
        <td><a href="/cpp/types/remove_cvref/">remove_cvref</a>, <a href="/cpp/types/type_identity/">type_identity</a>, <a href="/cpp/types/endian/">endian</a>, <a href="/cpp/types/is_constant_evaluated/">is_constant_evaluated</a></td>
        <td>Improved modern generic programming patterns and low-level portability helpers.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++23</span></td>
        <td><a href="/cpp/types/reference_constructs_from_temporary/">reference-from-temporary traits</a>, <a href="/cpp/types/is_implicit_lifetime/">is_implicit_lifetime</a>, <a href="/cpp/types/is_scoped_enum/">is_scoped_enum</a></td>
        <td>Expanded the library's ability to express newer lifetime and type-safety questions directly.</td>
      </tr>
      <tr>
        <td><span class="overview-chip">C++26</span></td>
        <td><a href="/cpp/types/is_virtual_base_of/">is_virtual_base_of</a>, <a href="/cpp/types/is_within_lifetime/">is_within_lifetime</a></td>
        <td>Continues the trend toward more explicit compile-time reflection of language object-model properties.</td>
      </tr>
    </tbody>
  </table>
</div>

## Boundary Lines

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If the real question is about...</th>
        <th>Go here instead</th>
        <th>Why</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>How types are declared, formed, deduced, or interpreted by the language</td>
        <td><a href="/cpp/language/">Language</a></td>
        <td>`/cpp/types/` is the library support layer, not the primary home for syntax, declarators, or core type-system rules.</td>
      </tr>
      <tr>
        <td>Vocabulary types, move/forward helpers, formatting, or callable wrappers</td>
        <td><a href="/cpp/utility/">Utility</a></td>
        <td>The utility hub owns runtime support objects and value-oriented helper facilities, while this page focuses on type-support infrastructure.</td>
      </tr>
      <tr>
        <td>Constraints and concept-based template interfaces</td>
        <td><a href="/cpp/concepts/">Concepts</a></td>
        <td>Traits often feed concepts, but concept vocabulary and constrained interfaces belong to the concepts hub.</td>
      </tr>
      <tr>
        <td>Exceptions, `bad_cast`, or runtime failure behavior as diagnostics concerns</td>
        <td><a href="/cpp/error/">Diagnostics</a></td>
        <td>RTTI surfaces touch some diagnostic types, but the full exception/diagnostic taxonomy is elsewhere.</td>
      </tr>
      <tr>
        <td>The C compatibility side of support types and limits</td>
        <td><a href="/c/types/">C types</a></td>
        <td>The C side remains a separate library surface with different naming and compatibility concerns.</td>
      </tr>
    </tbody>
  </table>
</div>

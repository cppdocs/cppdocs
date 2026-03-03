---
title: "C Language"
description: "Curated hub for core C language rules: declarations, expressions, statements, types, initialization, conversions, and object lifetime."
source_path: "c/language"
layout: "overview-hub"
---

The C language reference covers how declarations introduce names, how expressions are evaluated, how statements control execution, and how objects and functions are typed, initialized, and stored. This hub is the task-first entry point for those core language rules.

<div class="overview-note">
Use this page for language semantics, not library APIs. For headers and functions, go back to the <a href="/c/">C root hub</a> or jump directly to library areas such as <a href="/c/io/">I/O</a>, <a href="/c/string/">string</a>, or <a href="/c/numeric/">numerics</a>.
</div>

## Start Here

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/c/language/declarations/">Declarations and definitions</a></h3>
    <p class="card-desc">Start here when the question is about introducing names, forming declarators, defining functions, or understanding what a declaration means.</p>
    <p class="card-links"><a href="/c/language/declarations/">Declarations</a> · <a href="/c/language/function_declaration/">Function declarations</a> · <a href="/c/language/function_definition/">Function definitions</a> · <a href="/c/language/typedef/">typedef</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/language/expressions/">Expressions and operators</a></h3>
    <p class="card-desc">Use this route for precedence, evaluation, operators, conversions, and value computation rules.</p>
    <p class="card-links"><a href="/c/language/expressions/">Expressions</a> · <a href="/c/language/conversion/">Conversions</a> · <a href="/c/language/operator_precedence/">Operator precedence</a> · <a href="/c/language/eval_order/">Evaluation order</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/language/statements/">Statements and control flow</a></h3>
    <p class="card-desc">Choose this route for `if`, loops, `switch`, `goto`, `return`, and how execution moves through a C program.</p>
    <p class="card-links"><a href="/c/language/statements/">Statements</a> · <a href="/c/language/if/">if</a> · <a href="/c/language/for/">for</a> · <a href="/c/language/switch/">switch</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/language/types/">Types and objects</a></h3>
    <p class="card-desc">Start here when the question is about type categories, object representation, arrays, pointers, structs, unions, or qualifiers.</p>
    <p class="card-links"><a href="/c/language/types/">Types</a> · <a href="/c/language/arithmetic_types/">Arithmetic types</a> · <a href="/c/language/pointer/">Pointers</a> · <a href="/c/language/struct/">struct</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/language/initialization/">Initialization and lifetime</a></h3>
    <p class="card-desc">Use this route for object creation, initialization forms, compound literals, lifetime rules, and storage duration.</p>
    <p class="card-links"><a href="/c/language/initialization/">Initialization</a> · <a href="/c/language/array_initialization/">Array initialization</a> · <a href="/c/language/compound_literal/">Compound literals</a> · <a href="/c/language/lifetime/">Lifetime</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/language/storage_duration/">Scope, linkage, and storage duration</a></h3>
    <p class="card-desc">Use this route when semantics depend on file scope, block scope, linkage, `_Thread_local`, or the duration of an object.</p>
    <p class="card-links"><a href="/c/language/storage_duration/">Storage duration</a> · <a href="/c/language/scope/">Scope</a> · <a href="/c/language/file_scope/">File scope</a> · <a href="/c/language/extern/">extern</a></p>
  </section>
</div>

## Quick Map

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>If your question is about</th>
        <th>Start with</th>
        <th>Typical follow-ups</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>How a name, object, or function is introduced</td>
        <td><a href="/c/language/declarations/">Declarations</a></td>
        <td><a href="/c/language/identifier/">Identifiers</a>, <a href="/c/language/function_declaration/">Function declarations</a>, <a href="/c/language/typedef/">typedef</a></td>
      </tr>
      <tr>
        <td>What an expression means or how operators group</td>
        <td><a href="/c/language/expressions/">Expressions</a></td>
        <td><a href="/c/language/conversion/">Conversions</a>, <a href="/c/language/operator_precedence/">Operator precedence</a>, <a href="/c/language/eval_order/">Evaluation order</a></td>
      </tr>
      <tr>
        <td>How program flow branches, loops, or exits</td>
        <td><a href="/c/language/statements/">Statements</a></td>
        <td><a href="/c/language/if/">if</a>, <a href="/c/language/while/">while</a>, <a href="/c/language/for/">for</a>, <a href="/c/language/return/">return</a></td>
      </tr>
      <tr>
        <td>Which type rules apply to an object or expression</td>
        <td><a href="/c/language/types/">Types</a></td>
        <td><a href="/c/language/arithmetic_types/">Arithmetic types</a>, <a href="/c/language/compatible_type/">Compatible type</a>, <a href="/c/language/const/">const</a>, <a href="/c/language/restrict/">restrict</a>, <a href="/c/language/volatile/">volatile</a></td>
      </tr>
      <tr>
        <td>How an object is initialized or when its lifetime begins</td>
        <td><a href="/c/language/initialization/">Initialization</a></td>
        <td><a href="/c/language/scalar_initialization/">Scalar initialization</a>, <a href="/c/language/struct_initialization/">Struct initialization</a>, <a href="/c/language/lifetime/">Lifetime</a></td>
      </tr>
      <tr>
        <td>Whether a value converts implicitly or explicitly</td>
        <td><a href="/c/language/conversion/">Conversions</a></td>
        <td><a href="/c/language/cast/">Cast</a>, <a href="/c/language/value_category/">Value categories</a>, <a href="/c/language/bool_constant/">Boolean conversion</a></td>
      </tr>
      <tr>
        <td>Where a name is visible or how long an object exists</td>
        <td><a href="/c/language/storage_duration/">Storage duration</a></td>
        <td><a href="/c/language/scope/">Scope</a>, <a href="/c/language/file_scope/">File scope</a>, <a href="/c/language/thread_storage_duration/">Thread storage duration</a></td>
      </tr>
    </tbody>
  </table>
</div>

## Core Language Areas

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Area</th>
        <th>Key pages</th>
        <th>Use it for</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Declarations and program structure</td>
        <td><a href="/c/language/declarations/">Declarations</a>, <a href="/c/language/function_definition/">Function definitions</a>, <a href="/c/language/main_function/">main function</a></td>
        <td>How programs declare objects/functions and define executable structure.</td>
      </tr>
      <tr>
        <td>Types, objects, and representation</td>
        <td><a href="/c/language/types/">Types</a>, <a href="/c/language/object/">Objects</a>, <a href="/c/language/array/">Arrays</a>, <a href="/c/language/pointer/">Pointers</a>, <a href="/c/language/struct/">struct</a>, <a href="/c/language/union/">union</a>, <a href="/c/language/enum/">enum</a></td>
        <td>What values and objects are, how they are laid out, and what operations are valid on them.</td>
      </tr>
      <tr>
        <td>Expressions and operators</td>
        <td><a href="/c/language/expressions/">Expressions</a>, <a href="/c/language/operator_arithmetic/">Arithmetic operators</a>, <a href="/c/language/operator_assignment/">Assignment operators</a>, <a href="/c/language/operator_comparison/">Comparison operators</a>, <a href="/c/language/operator_other/">Other operators</a></td>
        <td>How computation is formed and how operators behave.</td>
      </tr>
      <tr>
        <td>Statements and control flow</td>
        <td><a href="/c/language/statements/">Statements</a>, <a href="/c/language/if/">if</a>, <a href="/c/language/for/">for</a>, <a href="/c/language/do/">do</a>, <a href="/c/language/while/">while</a>, <a href="/c/language/switch/">switch</a>, <a href="/c/language/goto/">goto</a></td>
        <td>How control moves and how statements organize side effects and branching.</td>
      </tr>
      <tr>
        <td>Initialization, conversion, and value model</td>
        <td><a href="/c/language/initialization/">Initialization</a>, <a href="/c/language/conversion/">Conversions</a>, <a href="/c/language/cast/">Cast</a>, <a href="/c/language/constant_expression/">Constant expressions</a></td>
        <td>How values are created, transformed, and interpreted.</td>
      </tr>
      <tr>
        <td>Scope, linkage, lifetime</td>
        <td><a href="/c/language/storage_duration/">Storage duration</a>, <a href="/c/language/lifetime/">Lifetime</a>, <a href="/c/language/scope/">Scope</a>, <a href="/c/language/extern/">extern</a>, <a href="/c/language/inline/">inline</a></td>
        <td>How long objects exist, where names are visible, and how translation-unit boundaries matter.</td>
      </tr>
    </tbody>
  </table>
</div>

## Practical Routes

<div class="section-grid">
  <section class="section-card">
    <h3 class="card-title"><a href="/c/language/types/">I need to understand a type rule</a></h3>
    <p class="card-desc">Start from types when the issue is qualifiers, arrays, pointers, compatibility, arithmetic categories, or object representation.</p>
    <p class="card-links"><a href="/c/language/arithmetic_types/">Arithmetic types</a> · <a href="/c/language/pointer/">Pointers</a> · <a href="/c/language/compatible_type/">Compatible type</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/language/expressions/">I need an operator or expression rule</a></h3>
    <p class="card-desc">Start from expressions when the answer depends on precedence, conversions, side effects, or operand categories.</p>
    <p class="card-links"><a href="/c/language/operator_precedence/">Precedence</a> · <a href="/c/language/conversion/">Conversions</a> · <a href="/c/language/eval_order/">Evaluation order</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/language/statements/">I need a control-flow rule</a></h3>
    <p class="card-desc">Start from statements when the problem is looping, branching, block rules, labels, or function exit behavior.</p>
    <p class="card-links"><a href="/c/language/if/">if</a> · <a href="/c/language/for/">for</a> · <a href="/c/language/return/">return</a></p>
  </section>
  <section class="section-card">
    <h3 class="card-title"><a href="/c/language/initialization/">I need initialization or lifetime behavior</a></h3>
    <p class="card-desc">Start from initialization and lifetime when storage, zero-initialization, compound literals, or object existence is the core question.</p>
    <p class="card-links"><a href="/c/language/scalar_initialization/">Scalar initialization</a> · <a href="/c/language/array_initialization/">Array initialization</a> · <a href="/c/language/lifetime/">Lifetime</a></p>
  </section>
</div>

## Adjacent Areas

<div class="overview-table">
  <table>
    <thead>
      <tr>
        <th>Boundary</th>
        <th>Go here</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Your question is about macros, inclusion, or token rewriting before compilation.</td>
        <td><a href="/c/preprocessor/">C preprocessor</a></td>
      </tr>
      <tr>
        <td>You need library typedefs, limits, or standard type support utilities rather than language type rules.</td>
        <td><a href="/c/types/">C types library</a></td>
      </tr>
      <tr>
        <td>You are looking for keyword-by-keyword lookup instead of topic navigation.</td>
        <td><a href="/c/keyword/">C keyword index</a></td>
      </tr>
      <tr>
        <td>You actually need the C++ language reference instead of C semantics.</td>
        <td><a href="/cpp/language/">C++ language</a></td>
      </tr>
    </tbody>
  </table>
</div>

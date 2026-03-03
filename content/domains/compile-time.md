---
title: "Compile-time"
description: "Compile-time evaluation, constraints, and metaprogramming entry points."
---

This hub captures the compile-time pipeline in modern C++.
Use it to navigate template formation, constraint filtering, and constant evaluation before code generation.
The focus is practical: which language/library entry points control each phase.

## Mental Model Diagram
<svg viewBox="0 0 1120 280" role="img" aria-label="Compile-time pipeline from parsing to constant evaluation and code generation boundary" xmlns="http://www.w3.org/2000/svg">
  <style>
    .box { fill: rgba(148, 163, 184, 0.10); stroke: currentColor; stroke-width: 2; rx: 10; ry: 10; }
    .txt { font: 600 18px sans-serif; fill: currentColor; }
    .small { font: 400 14px sans-serif; fill: currentColor; opacity: 0.85; }
    .arrow { stroke: currentColor; stroke-width: 2.5; marker-end: url(#ct-arrow); }
    .boundary { stroke: #7f1d1d; stroke-width: 2.5; stroke-dasharray: 8 6; }
    .boundaryText { font: 600 13px sans-serif; fill: #7f1d1d; }
  </style>
  <defs>
    <marker id="ct-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>

  <rect class="box" x="20" y="40" width="190" height="90"/>
  <text class="txt" x="115" y="75" text-anchor="middle">Parse + Lookup</text>
  <text class="small" x="115" y="98" text-anchor="middle">AST and names</text>

  <rect class="box" x="240" y="40" width="220" height="90"/>
  <text class="txt" x="350" y="75" text-anchor="middle">Instantiate</text>
  <text class="small" x="350" y="98" text-anchor="middle">templates / candidates</text>

  <rect class="box" x="490" y="40" width="220" height="90"/>
  <text class="txt" x="600" y="75" text-anchor="middle">Apply Constraints</text>
  <text class="small" x="600" y="98" text-anchor="middle">requires / concepts</text>

  <rect class="box" x="740" y="40" width="220" height="90"/>
  <text class="txt" x="850" y="75" text-anchor="middle">Const Evaluation</text>
  <text class="small" x="850" y="98" text-anchor="middle">constexpr / consteval</text>

  <line class="arrow" x1="210" y1="86" x2="240" y2="86"/>
  <line class="arrow" x1="460" y1="86" x2="490" y2="86"/>
  <line class="arrow" x1="710" y1="86" x2="740" y2="86"/>

  <line class="boundary" x1="980" y1="20" x2="980" y2="190"/>
  <text class="boundaryText" x="993" y="35">codegen boundary</text>

  <rect class="box" x="1000" y="40" width="100" height="90"/>
  <text class="txt" x="1050" y="75" text-anchor="middle">Emit</text>
  <text class="small" x="1050" y="98" text-anchor="middle">object code</text>
</svg>

Key idea: templates and constraints decide viable program forms, constant evaluation resolves values, and only then backend code emission starts.

## Constant Evaluation
- [Constant expressions](/cpp/language/constant_expression/)
- [constexpr](/cpp/language/constexpr/)
- [consteval](/cpp/language/consteval/)
- [constinit](/cpp/language/constinit/)
- [static_assert](/cpp/language/static_assert/)

## Templates and Instantiation
- [Templates](/cpp/language/templates/)
- [Template parameters](/cpp/language/template_parameters/)
- [Partial specialization](/cpp/language/partial_specialization/)
- [SFINAE](/cpp/language/sfinae/)
- [Fold expressions](/cpp/language/fold/)

## Constraints and Concepts
- [Constraints](/cpp/language/constraints/)
- [Concepts library](/cpp/concepts/)
- [invocable](/cpp/concepts/invocable/)
- [predicate](/cpp/concepts/predicate/)
- [regular](/cpp/concepts/regular/)

## Type Traits and Compile-Time Values
- [Type support (meta)](/cpp/types/)
- [integral_constant](/cpp/types/integral_constant/)
- [enable_if](/cpp/types/enable_if/)
- [is_same](/cpp/types/is_same/)
- [conditional](/cpp/types/conditional/)

## Fast Entry Points
- Pipeline overview: [Templates](/cpp/language/templates/)
- Rule filtering: [Constraints](/cpp/language/constraints/)
- Evaluation semantics: [constexpr](/cpp/language/constexpr/)
- Trait toolbox: [Type support (meta)](/cpp/types/)

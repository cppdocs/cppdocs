---
title: "Analyzability"
source_path: "c/language/analyzability"
category: "c"
---

This optional extension to the C language limits the potential results of executing some forms of undefined behavior, which improves the effectiveness of static analysis of such programs. Analyzability is only guaranteed to be enabled if the [predefined macro constant](/c/preprocessor/replace/) __STDC_ANALYZABLE__(C11) is defined by the compiler.

## Notes
Bounded undefined behavior disables certain optimizations: compilation with analyzability enabled preserves source-code causality, which [may be violated](/c/language/as_if/) by undefined behavior otherwise.

Analyzability extension permits, as a form of implementation-defined behavior, for the [runtime constraint handler](/c/error/set_constraint_handler_s/) to be invoked when a trap occurs.

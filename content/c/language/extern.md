---
title: "External and tentative definitions"
source_path: "c/language/extern"
category: "c"
---

At the top level of a [translation unit](/c/language/translation_phases/) (that is, a source file with all the #includes after the preprocessor), every C program is a sequence of [declarations](/c/language/declarations/), which declare functions and objects with [external or internal linkage](/c/language/storage_duration/). These declarations are known as external declarations because they appear outside of any function.

## Notes
Inline definitions in different translation units are not constrained by one definition rule. See [inline](/c/language/inline/) for the details on the inline function definitions.

See [storage duration and linkage](/c/language/storage_duration/) for the meaning of the keyword extern with declarations at file scope

See [definitions](/c/language/declarations/#Definitions) for the distinction between declarations and definitions.

Tentative definitions were invented to standardize various pre-C89 approaches to forward declaring identifiers with internal linkage.

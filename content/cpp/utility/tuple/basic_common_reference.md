---
title: "std::basic_common_reference<tuple-like>"
source_path: "cpp/utility/tuple/basic_common_reference"
header: "<tuple>"
category: "utility"
since: "C++23"
---

The common reference type of two [tuple-like](/cpp/utility/tuple/tuple-like/) types is a [std::tuple](/cpp/utility/tuple/) consists of the common reference types of all corresponding element type pairs of both types, where the cv and reference qualifiers on the tuple-like types are applied to their element types.

## Declarations
```cpp
template< tuple-like TTuple, tuple-like UTuple,
template<class> class TQual, template<class> class UQual >
requires /* see below */
struct basic_common_reference<TTuple, UTuple, TQual, UQual>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [common_referencebasic_common_reference](/cpp/types/common_reference/)
- [std::basic_common_reference<std::pair>](/cpp/utility/pair/basic_common_reference/)

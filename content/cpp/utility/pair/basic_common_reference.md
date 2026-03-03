---
title: "std::basic_common_reference<std::pair>"
source_path: "cpp/utility/pair/basic_common_reference"
header: "<utility>"
category: "utility"
since: "C++23"
---

The common reference type of two pairs is a pair of both common reference types of corresponding element types of both pairs, where the cv and reference qualifiers on the pairs are applied to their element types.

## Declarations
```cpp
template< class T1, class T2, class U1, class U2,
template<class> class TQual, template<class> class UQual >
requires requires { typename std::pair<std::common_reference_t<TQual<T1>, UQual<U1>>,
std::common_reference_t<TQual<T2>, UQual<U2>>>; }
struct basic_common_reference<std::pair<T1, T2>, std::pair<U1, U2>, TQual, UQual>;
```
_(since C++23)_

## Example
This section is incompleteReason: no example

## See also
- [common_referencebasic_common_reference](/cpp/types/common_reference/)
- [std::basic_common_reference<tuple-like>](/cpp/utility/tuple/basic_common_reference/)

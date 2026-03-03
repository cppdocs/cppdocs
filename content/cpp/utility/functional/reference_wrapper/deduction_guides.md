---
title: "deduction guides for std::reference_wrapper"
source_path: "cpp/utility/functional/reference_wrapper/deduction_guides"
header: "<functional>"
category: "utility"
since: "C++17"
---

One [deduction guide](/cpp/language/ctad/) is provided for [std::reference_wrapper](/cpp/utility/functional/reference_wrapper/) to support deduction of the sole class template parameter.

## Declarations
```cpp
template< typename T >
reference_wrapper( T& ) -> reference_wrapper<T>;
```
_(since C++17)_

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2981 | C++17 | a redundant deduction guide from reference_wrapper<T> was provided | removed |
| LWG 2993 | C++17 | defect resolution removed a constructor used for class template argument deduction | added deduction guide to compensate |

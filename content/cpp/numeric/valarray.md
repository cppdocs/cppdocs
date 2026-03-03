---
title: "std::valarray"
source_path: "cpp/numeric/valarray"
header: "<valarray>"
category: "numeric"
---

std::valarray is the class for representing and manipulating arrays of values. It supports element-wise mathematical operations and various forms of generalized subscript operators, slicing and indirect access.

## Declarations
```cpp
template< class T >
class valarray;
```

## Notes
std::valarray and helper classes are defined to be free of certain forms of aliasing, thus allowing operations on these classes to be optimized similar to the effect of the keyword [restrict](/c/language/restrict/) in the C programming language. In addition, functions and operators that take valarray arguments are allowed to return proxy objects to make it possible for the compiler to optimize an expression such as v1 = a * v2 + v3; as a single loop that executes v1[i] = a * v2[i] + v3[i]; avoiding any temporaries or multiple passes. However, [expression templates](https://en.wikipedia.org/wiki/expression_templates) make the same optimization technique available for any C++ container, and the majority of numeric libraries prefer expression templates to valarrays for flexibility. Some C++ standard library implementations use expression templates to implement efficient operations on std::valarray (e.g. GNU libstdc++ and LLVM libc++). Only rarely are valarrays optimized any further, as in e.g. [Intel Integrated Performance Primitives](https://software.intel.com/en-us/node/684140).

## See also
- [simd](/cpp/numeric/simd/basic_simd/)
- [simd](/cpp/experimental/simd/simd/)
- [simd_mask](/cpp/experimental/simd/simd_mask/)

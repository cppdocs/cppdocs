---
title: "Mathematical special functions (since C++17)"
source_path: "cpp/numeric/special_functions"
category: "numeric"
since: "C++17"
---

The Mathematical Special Functions library was originally part of Library TR1 ISO/IEC TR 19768:2007, then published as an independent ISO standard, ISO/IEC 29124:2010, and finally merged to ISO C++ as of C++17.

## Notes
The float and long double overloads for math special functions without the "f" or "l" suffix are present in the final draft of ISO/IEC 29124:2010 ([N3060](https://wg21.link/N3060)), but absent in the published C++17/20 standard (see [LWG issue 3234](https://cplusplus.github.io/LWG/issue3234)). These overloads were not provided by MSVC STL until VS 2022 17.3.

These functions are unrelated to [special member functions](/cpp/language/member_functions/#Special_member_functions) of class types.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3234(P1467R9) | C++17 | additional overloads for math special functions were missing | these overloads are required |

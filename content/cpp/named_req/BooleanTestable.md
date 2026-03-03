---
title: "C++ named requirements: BooleanTestable"
source_path: "cpp/named_req/BooleanTestable"
category: "named_req"
---

Specifies that an expression of such a type and value category is convertible to bool, and for which the logical operators for the type or two different BooleanTestable types have the usual behavior (including [short-circuiting](https://en.wikipedia.org/wiki/Short-circuit_evaluation)).

## Notes
The standard does not define a named requirement with this name. It was originally proposed in an early resolution of [LWG2114](https://cplusplus.github.io/LWG/issue2114), but was superseded by the exposition-only concept [boolean-testable](/cpp/concepts/boolean-testable/) in the final resolution [P2167R3](https://wg21.link/P2167R3). Because implementations generally expect the provided types to model boolean-testable even in pre-C++20 modes, we intentedly treat P2167R3 as a defect report and transform the boolean-testable to legacy named requirements.

When the && and || operators are used with operands whose type and value category are BooleanTestable, built-in versions are selected and short-circuit evaluation is performed.

The type and value category of an expression e meet the BooleanTestable requirements if and only if decltype((e)) models [boolean-testable](/cpp/concepts/boolean-testable/).

Examples of BooleanTestable types (with any value category) include bool, [std::true_type](/cpp/types/integral_constant/)(since C++11), [std::bitset](/cpp/utility/bitset/)<N>::[reference](/cpp/utility/bitset/reference/), and int*.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2114(P2167R3) | C++98 | convertibility to bool was too weak to reflect the expectation of implementations | requirements strengthened |

## See also
- [boolean-testable](/cpp/concepts/boolean-testable/)

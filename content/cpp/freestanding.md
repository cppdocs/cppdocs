---
title: "Freestanding and hosted implementations"
source_path: "cpp/freestanding"
category: "freestanding"
---

There are two kinds of implementations defined by the C++ standard: hosted and freestanding implementations. For hosted implementations, the set of standard library headers required by the C++ standard is much larger than for freestanding ones. In a freestanding implementation, execution may happen without an operating system.

## Notes
Some compiler vendors may not fully support freestanding implementation. For example, GCC libstdc++ has had implementation and build issues before version 13, while LLVM libcxx and MSVC STL do not support freestanding.

In C++23, many features are made freestanding with partial headers. However, it is still up for discussion in WG21 whether some headers will be made freestanding in the future standards. Regardless, containers like [vector](/cpp/container/vector/), [list](/cpp/container/list/), [deque](/cpp/container/deque/), and [map](/cpp/container/map/) will never be freestanding due to their dependencies on exceptions and heap.

GCC 13 provides more headers, such as [<optional>](/cpp/header/optional/), [<span>](/cpp/header/span/), [<array>](/cpp/header/array/), and [<bitset>](/cpp/header/bitset/), for freestanding, although these headers may not be portable or provide the same capabilities as a hosted implementation. It is better to avoid using them in a freestanding environment, even if the toolchain provides them.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1938 | C++98 | an implementation did not needto document whether it is hosted | made the implementation kind implementation-defined (thus requires a documentation) |
| LWG 3653(P1642R11) | C++20 | <coroutine> is freestanding, butuses std::hash which was not | made <functional> being partially freestanding |

## See also
- [C documentation](/c/language/conformance/)

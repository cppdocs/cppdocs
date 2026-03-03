---
title: "C++ named requirements: LegacyIterator"
source_path: "cpp/named_req/Iterator"
category: "named_req"
---

The LegacyIterator requirements describe types that can be used to identify and traverse the elements of a container.

## Declarations
```cpp
template<class I>
concept __LegacyIterator =
requires(I i)
{
{ *i } -> __Referenceable;
{ ++i } -> std::same_as<I&>;
{ *i++ } -> __Referenceable;
} && std::copyable<I>;
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2437 | C++98 | *r is required to be reference | not required for output iterators |
| LWG 3420 | C++20 | the exposition-only concept checks copyable first | copyable is checked only if the requires-expression yields true |

## See also
- [input_or_output_iterator](/cpp/iterator/input_or_output_iterator/)
- [Iterator library](/cpp/iterator/)

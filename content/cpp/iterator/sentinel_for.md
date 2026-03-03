---
title: "std::sentinel_for"
source_path: "cpp/iterator/sentinel_for"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The sentinel_for concept specifies the relationship between an [input_or_output_iterator](/cpp/iterator/input_or_output_iterator/) type and a [semiregular](/cpp/concepts/semiregular/) type whose values denote a range. The exposition-only concept __WeaklyEqualityComparableWith is described in [equality_comparable](/cpp/concepts/equality_comparable/).

## Declarations
```cpp
template< class S, class I >
concept sentinel_for =
std::semiregular<S> &&
std::input_or_output_iterator<I> &&
__WeaklyEqualityComparableWith<S, I>;
```
_(since C++20)_

## Notes
A sentinel type and its corresponding iterator type are not required to model [equality_comparable_with](/cpp/concepts/equality_comparable/), because the sentinel type may not be comparable with itself, and they are not required to have a common reference type.

It has been permitted to use a sentinel type different from the iterator type in the [range-based for loop](/cpp/language/range-for/) since C++17.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3453 | C++20 | semantic requirements for sentinel_for were too loose for ranges::advance | strengthened |

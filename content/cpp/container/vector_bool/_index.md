---
title: "std::vector<bool>"
source_path: "cpp/container/vector_bool"
header: "<vector>"
since: "C++11"
---

std::vector<bool> is a possibly space-efficient specialization of [std::vector](/cpp/container/vector/) for the type bool.

## Declarations
```cpp
template<
class Allocator
> class vector<bool, Allocator>;
```

## Notes
If the size of the bitset is known at compile time, [std::bitset](/cpp/utility/bitset/) may be used, which offers a richer set of member functions. In addition, [boost::dynamic_bitset](https://www.boost.org/doc/libs/release/libs/dynamic_bitset/dynamic_bitset.html) exists as an alternative to std::vector<bool>.

Since its representation may be optimized, std::vector<bool> does not necessarily meet all [Container](/cpp/named_req/Container/) or [SequenceContainer](/cpp/named_req/SequenceContainer/) requirements. For example, because std::vector<bool>::iterator is implementation-defined, it may not satisfy the [LegacyForwardIterator](/cpp/named_req/ForwardIterator/) requirement. Use of algorithms such as [std::search](/cpp/algorithm/search/) that require [LegacyForwardIterators](/cpp/named_req/ForwardIterator/) may result in [either compile-time or run-time errors](https://www.boost.org/doc/libs/release/libs/dynamic_bitset/dynamic_bitset.html#rationale).

The [Boost.Container version of vector](https://www.boost.org/doc/libs/release/doc/html/boost/container/vector.html) does not specialize for bool.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2187 | C++11 | specializations for bool lacked emplace and emplace_back member functions | added |

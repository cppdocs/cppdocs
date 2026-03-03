---
title: "std::experimental::ostream_joiner<DelimT,CharT,Traits>::operator++"
source_path: "cpp/experimental/ostream_joiner/operator"
category: "experimental"
---

Does nothing. These operator overloads are provided to satisfy the requirements of [LegacyOutputIterator](/cpp/named_req/outputiterator/). They make it possible for the expressions *iter++=value and *++iter=value to be used to output (insert) a value into the underlying stream.

## Declarations
```cpp
ostream_joiner& operator++() noexcept;
```
_(library fundamentals TS v2)_

```cpp
ostream_joiner& operator++( int ) noexcept;
```
_(library fundamentals TS v2)_

## Return value
*this
